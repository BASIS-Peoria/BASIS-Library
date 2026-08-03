import { useState, useMemo, useCallback, useRef, type MouseEvent } from "react";
import type { Course, ResourceType } from "@/data/courses";
import ResourceRow, { type ResourceItem } from "@/components/ResourceRow";
import FilterToolbar from "@/components/FilterToolbar";
import SectionHeader from "@/components/SectionHeader";
import ExamCountdown from "@/components/ExamCountdown";

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
  ...(course.videos ?? []).map((v) => ({ ...v, type: "video" as const })),
  ...(course.websites ?? []).map((w) => ({ ...w, type: "website" as const })),
];

const BookListView = ({ course, searchResults, searchQuery }: BookListViewProps) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const lastClickedIdRef = useRef<string | null>(null);

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
    lastClickedIdRef.current = id;
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

  const handleRowClick = useCallback((id: string, e: MouseEvent) => {
    const item = items.find((b) => b.item.id === id)?.item;
    if (!item?.link) return;

    if (e.shiftKey && lastClickedIdRef.current) {
      const orderedIds = items.filter((b) => b.item.link).map((b) => b.item.id);
      const start = orderedIds.indexOf(lastClickedIdRef.current);
      const end = orderedIds.indexOf(id);
      if (start !== -1 && end !== -1) {
        const [from, to] = start < end ? [start, end] : [end, start];
        const rangeIds = orderedIds.slice(from, to + 1);
        setSelectedIds((prev) => {
          const next = new Set(prev);
          rangeIds.forEach((rid) => next.add(rid));
          return next;
        });
        lastClickedIdRef.current = id;
        return;
      }
    }

    if (e.metaKey || e.ctrlKey) {
      toggleOne(id);
      return;
    }

    lastClickedIdRef.current = id;
    window.open(item.link, "_blank", "noopener,noreferrer");
  }, [items, toggleOne]);

  const bookItems = useMemo(() => items.filter((i) => i.item.type === "book"), [items]);
  const noteItems = useMemo(() => items.filter((i) => i.item.type === "note"), [items]);
  const cbItems = useMemo(() => items.filter((i) => i.item.type === "collegeboard"), [items]);
  const videoItems = useMemo(() => items.filter((i) => i.item.type === "video"), [items]);
  const websiteItems = useMemo(() => items.filter((i) => i.item.type === "website"), [items]);

  const supportsCollegeBoard = course?.showCollegeBoard !== false;
  const showBooks = typeFilter === "all" || typeFilter === "book";
  const showNotes = typeFilter === "all" || typeFilter === "note";
  const showCB = supportsCollegeBoard && (typeFilter === "all" || typeFilter === "collegeboard");
  const showVideos = typeFilter === "all" || typeFilter === "video";
  const showWebsites = typeFilter === "all" || typeFilter === "website";

  return (
    <div className="flex flex-col h-full">
      {!isSearch && course && <ExamCountdown courseId={course.id} />}

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
          showCollegeBoard={supportsCollegeBoard}
        />
      )}

      <div className="flex-1 overflow-y-auto">
        {!isSearch && !course && (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            Select a class from the sidebar to view textbooks.
          </div>
        )}

        {isSearch && items.length === 0 && (
          <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
            No results found.
          </div>
        )}

        {isSearch && items.map((entry) => (
          <ResourceRow
            key={entry.item.id}
            item={entry.item}
            subtitle={entry.subtitle}
            isSelected={selectedIds.has(entry.item.id)}
            onToggle={toggleOne}
            onRowClick={handleRowClick}
          />
        ))}

        {!isSearch && course && (
          <>
            {showBooks && (
              <div>
                <SectionHeader title="Books" count={bookItems.length} />
                {bookItems.length > 0 ? (
                  bookItems.map((entry) => (
                    <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} onRowClick={handleRowClick} />
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-muted-foreground text-center">No books yet.</div>
                )}
              </div>
            )}

            {showNotes && (
              <div>
                <SectionHeader title="Student Notes" count={noteItems.length} />
                {noteItems.length > 0 ? (
                  noteItems.map((entry) => (
                    <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} onRowClick={handleRowClick} />
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-muted-foreground text-center">No student notes yet.</div>
                )}
              </div>
            )}

            {showCB && (
              <div>
                <SectionHeader title="College Board Materials" count={cbItems.length} />
                {cbItems.length > 0 ? (
                  cbItems.map((entry) => (
                    <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} onRowClick={handleRowClick} />
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-muted-foreground text-center">No College Board materials yet.</div>
                )}
              </div>
            )}

            {showVideos && (
              <div>
                <SectionHeader title="Helpful Videos" count={videoItems.length} />
                {videoItems.length > 0 ? (
                  videoItems.map((entry) => (
                    <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} onRowClick={handleRowClick} />
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-muted-foreground text-center">No helpful videos yet.</div>
                )}
              </div>
            )}

            {showWebsites && (
              <div>
                <SectionHeader title="Helpful Websites" count={websiteItems.length} />
                {websiteItems.length > 0 ? (
                  websiteItems.map((entry) => (
                    <ResourceRow key={entry.item.id} item={entry.item} isSelected={selectedIds.has(entry.item.id)} onToggle={toggleOne} onRowClick={handleRowClick} />
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-muted-foreground text-center">No helpful websites yet.</div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookListView;
