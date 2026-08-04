import { getDaysUntilExam, getExamDateLabel } from "@/data/examDates";
import { getTeacherEmail } from "@/data/teacherEmails";

interface ExamCountdownProps {
  courseId: string;
}

const ExamCountdown = ({ courseId }: ExamCountdownProps) => {
  const days = getDaysUntilExam(courseId);
  const label = getExamDateLabel(courseId);
  const email = getTeacherEmail(courseId);

  const hasExam = days !== null && label !== null;
  if (!hasExam && !email) return null;

  const isPast = hasExam && days! < 0;
  const isToday = hasExam && days === 0;
  const isPortfolio = courseId === "ap-research";

  return (
    <div
      className={`px-4 py-2 text-sm text-muted-foreground border-b border-border flex items-center gap-4 ${
        hasExam ? "justify-between" : "justify-end"
      }`}
    >
      {hasExam && (
        <div className="min-w-0 truncate">
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
      )}
      {email && (
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Email ${email} via Gmail`}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          {email}
        </a>
      )}
    </div>
  );
};

export default ExamCountdown;
