import { useState, useMemo, useCallback } from "react";
import { courseGroups, courses } from "@/data/courses";
import type { Course, ResourceType } from "@/data/courses";
import Header from "@/components/Header";
import CourseSidebar from "@/components/CourseSidebar";
import BookListView from "@/components/BookListView";
import CourseCard from "@/components/CourseCard";
import { ChevronLeft } from "lucide-react";
import GitHubLink from "@/components/GitHubLink";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCourse = useMemo(
    () => courses.find((c) => c.id === selectedCourseId) ?? null,
    [selectedCourseId]
  );

  const selectedGroup = useMemo(
    () => courseGroups.find((g) => g.label === selectedCategory) ?? null,
    [selectedCategory]
  );

  // Single-pass search: collect matches by title and course name in one loop
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: { item: { id: string; title: string; link: string | null; type: ResourceType }; courseName: string }[] = [];
    const seen = new Set<string>();

    const addItem = (item: { id: string; title: string; link: string | null }, type: ResourceType, courseName: string) => {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        results.push({ item: { ...item, type }, courseName });
      }
    };

    const courseNameMatches = q.length > 0;

    for (const course of courses) {
      const courseMatches = courseNameMatches && course.name.toLowerCase().includes(q);
      for (const book of course.books) {
        if (courseMatches || book.title.toLowerCase().includes(q)) addItem(book, "book", course.name);
      }
      for (const note of course.notes) {
        if (courseMatches || note.title.toLowerCase().includes(q)) addItem(note, "note", course.name);
      }
      for (const cb of course.collegeboard) {
        if (courseMatches || cb.title.toLowerCase().includes(q)) addItem(cb, "collegeboard", course.name);
      }
    }
    return results;
  }, [searchQuery]);

  const handleSelectCategory = useCallback((cat: string | null) => {
    setSelectedCategory(cat);
    setSelectedCourseId(null);
  }, []);

  const handleBackClick = useCallback(() => setSelectedCourseId(null), []);

  const renderCourseGrid = (coursesToShow: Course[], title: string) => (
    <div key={title} className="p-6">
      <h2 className="text-lg font-semibold text-foreground mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {coursesToShow.map((course) => (
          <CourseCard key={course.id} course={course} onSelect={setSelectedCourseId} />
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (searchResults) {
      return (
        <div key="search">
          <BookListView course={null} searchResults={searchResults} searchQuery={searchQuery} />
        </div>
      );
    }

    if (selectedCourseId && selectedCourse) {
      return (
        <div key={`course-${selectedCourseId}`}>
          <button
            onClick={handleBackClick}
            className="flex items-center gap-1 px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to {selectedGroup?.label ?? "categories"}
          </button>
          <BookListView course={selectedCourse} searchResults={null} searchQuery="" />
        </div>
      );
    }

    if (selectedGroup) return renderCourseGrid(selectedGroup.courses, selectedGroup.label);
    return renderCourseGrid(courses, "All Courses");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="flex flex-1 overflow-hidden">
        <CourseSidebar selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
      <GitHubLink />
    </div>
  );
};

export default Index;
