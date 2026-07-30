import { getDaysUntilExam, getExamDateLabel } from "@/data/examDates";

interface ExamCountdownProps {
  courseId: string;
}

const ExamCountdown = ({ courseId }: ExamCountdownProps) => {
  const days = getDaysUntilExam(courseId);
  const label = getExamDateLabel(courseId);

  if (days === null || label === null) return null;

  const isPast = days < 0;
  const isToday = days === 0;
  const isPortfolio = courseId === "ap-research";

  return (
    <div className="px-4 py-2 text-sm text-muted-foreground border-b border-border">
      <span className="font-medium text-foreground">
        {isPast
          ? isPortfolio
            ? "Portfolio deadline has passed"
            : "Exam has passed"
          : isToday
          ? isPortfolio
            ? "Portfolio deadline is TODAY!"
            : "Exam is TODAY!"
          : `${days} day${days === 1 ? "" : "s"} until ${isPortfolio ? "portfolio deadline" : "exam"}`}
      </span>
      <span className="mx-1.5">·</span>
      <span>{label}</span>
    </div>
  );
};

export default ExamCountdown;
