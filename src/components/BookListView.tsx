import { useState, useMemo, useCallback } from "react";
import type { Course, ResourceType } from "@/data/courses";
import ResourceRow, { type ResourceItem } from "@/components/ResourceRow";
import FilterToolbar from "@/components/FilterToolbar";
import SectionHeader from "@/components/SectionHeader";

interface BookListViewProps {
  course: Course | null;
  searchResults: { item: ResourceItem; courseName: string }[] | null;
  searchQuery: string;
}

const extractYear = (title: string): string | null => {
  const match = title.match(/\[(\d{4})\]/);
  return match ? match[1] : null;
};

const courseToResources = (course: Course): ResourceItem[] => [
  ...course.books.map((b) => ({ ...b, type: "book" as const })),
  ...course.notes.map((n) => ({ ...n, type: "note" as const })),
  ...course.collegeboard.map((c) => ({ ...c, type: "collegeboard" as const })),
];

const BookListView = ({ course, searchResults, searchQuery }: BookListViewProps) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const isSearch = searchResults !== null;

  const allItems = useMemo<{ item: ResourceItem; subtitle?: string }[]>(() => {
    if (isSearch) return searchResults.map((r) => ({ item: r.item, subtitle: r.courseName }));
    if (course) return courseToResources(course).map((item) => ({ item }));
    return [];
  }, [isSearch, searchResults, course]);

  const availableYears = useMemo(() => {
    const years = new Set<string>();
    for (const { item } of allItems) {
      const y = extractYear(item.title);
      if (y) years.add(y);
    }
    return Array.from(years).sort();
  }, [allItems]);

  const items = useMemo(() => {
    let filtered = allItems;
    if (typeFilter !== "all") filtered = filtered.filter(({ item }) => item.type === typeFilter);
    if (yearFilter !== "all") filtered = filtered.filter(({ item }) => extractYear(item.title) === yearFilter);
    return filtered;
  }, [allItems, yearFilter, typeFilter]);

  const allSelectableIds = useMemo(
    () => items.filter((b) => b.item.link).map((b) => b.item.id),
    [items]
  );
  const allSelected = allSelectableIds.length > 0 && allSelectableIds.every((id) => selectedIds.has(id));

  const toggleAll = useCallback(() => {
    setSelectedIds((prev) => {
      const ids = items.filter((b) => b.item.link).map((b) => b.item.id);
      const allSel = ids.length > 0 && ids.every((id) => prev.has(id));
      return allSel ? new Set() : new Set(ids);
    });
  }, [items]);

  const toggleOne = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const openSelected = useCallback(() => {
    items
      .filter((b) => selectedIds.has(b.item.id) && b.item.link)
      .forEach((b) => {
        const a = document.createElement("a");
        a.href = b.item.link!;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
  }, [items, selectedIds]);

  const bookItems = useMemo(() => items.filter((i) => i.item.type === "book"), [items]);
  const noteItems = useMemo(() => items.filter((i) => i.item.type === "note"), [items]);
  const cbItems = useMemo(() => items.filter((i) => i.item.type === "collegeboard"), [items]);

  const showBooks = typeFilter === "all" || typeFilter === "book";
  const showNotes = typeFilter === "all" || typeFilter === "note";
  const showCB = typeFilter === "all" || typeFilter === "collegeboard";

  return (
    <div className="flex flex-col h-full">
      {allItems.length > 0 && (
        <FilterToolbar
          typeFilter={typeFilter}
          yearFilter={yearFilter}
          onTypeChange={setTypeFilter}
          onYearChange={setYearFilter}
          availableYears={availableYears}
          allSelected={allSelected}
          selectedCount={selectedIds.size}
          itemCount={items.length}
          onToggleAll={toggleAll}
          onOpenSelected={openSelected}
        />
      )}

      <div className="flex-1 overflow-y-auto">
        {!isSearch && !course && (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            Select a class from the sidebar to view textbooks.
          </div>
        )}

        {(isSearch || course) && items.length === 0 && (
          <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
            {isSearch ? "No results found." : "No items added yet."}
          </div>
        )}

        {isSearch && items.map((entry) => (
          <ResourceRow
            key={entry.item.id}
            item={entry.item}
            subtitle={entry.subtitle}
            isSelected={selectedIds.has(entry.item.id)}
            onToggle={toggleOne}
          />
        ))}

        {!isSearch && course && (
          <>
            {showBooks && bookItems.length > 0 && (
              <div>
                <SectionHeader title="Books" count={bookItems.length} />
                {bookItems.map((entry) => (
                  <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} />
                ))}
              </div>
            )}

            {showNotes && noteItems.length > 0 && (
              <div>
                <SectionHeader title="Student Notes" count={noteItems.length} />
                {noteItems.map((entry) => (
                  <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} />
                ))}
              </div>
            )}

            {showNotes && noteItems.length === 0 && bookItems.length > 0 && (
              <div>
                <SectionHeader title="Student Notes" count={0} />
                <div className="px-4 py-6 text-sm text-muted-foreground text-center">No student notes yet.</div>
              </div>
            )}

            {showCB && cbItems.length > 0 && (
              <div>
                <SectionHeader title="College Board Materials" count={cbItems.length} />
                {cbItems.map((entry) => (
                  <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} />
                ))}
              </div>
            )}

            {showCB && cbItems.length === 0 && (bookItems.length > 0 || noteItems.length > 0) && (
              <div>
                <SectionHeader title="College Board Materials" count={0} />
                <div className="px-4 py-6 text-sm text-muted-foreground text-center">No College Board materials yet.</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookListView;
