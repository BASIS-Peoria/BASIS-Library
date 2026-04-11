import { courseImageMap } from "@/data/courseImages";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  onSelect: (id: string) => void;
}

const CourseCard = ({ course, onSelect }: CourseCardProps) => {
  const imageData = courseImageMap[course.id];
  const bgColor = imageData?.color ?? "#374151";
  const bannerSrc = imageData?.image;

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col cursor-pointer group"
      style={{ backgroundColor: bgColor }}
      onClick={() => onSelect(course.id)}
    >
      {/* Banner */}
      {bannerSrc && (
        <div className="w-full aspect-[16/7] overflow-hidden">
          <img
            src={bannerSrc}
            alt={course.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Info section */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-semibold text-sm leading-tight">
          {course.name}
        </h3>
        <p className="text-white/70 text-xs">
          {course.books.length} {course.books.length === 1 ? "book" : "books"}
          {course.notes.length > 0 && `, ${course.notes.length} ${course.notes.length === 1 ? "note" : "notes"}`}
          {course.collegeboard.length > 0 && `, ${course.collegeboard.length} CB ${course.collegeboard.length === 1 ? "resource" : "resources"}`}
          {" "}available
        </p>
        <div className="mt-auto pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(course.id);
            }}
            className="w-full py-2 px-4 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs font-medium transition-colors"
          >
            View Material
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
