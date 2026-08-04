import { useState } from "react";
import { getDaysUntilExam, getExamDateLabel } from "@/data/examDates";
import { getTeacherEmail } from "@/data/teacherEmails";

interface ExamCountdownProps {
  courseId: string;
}

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(ua)) return true;
  return navigator.maxTouchPoints > 0 && window.matchMedia("(max-width: 1024px)").matches;
};

const ExamCountdown = ({ courseId }: ExamCountdownProps) => {
  const [copied, setCopied] = useState(false);
  const days = getDaysUntilExam(courseId);
  const label = getExamDateLabel(courseId);
  const email = getTeacherEmail(courseId);

  const hasExam = days !== null && label !== null;
  if (!hasExam && !email) return null;

  const isPast = hasExam && days! < 0;
  const isToday = hasExam && days === 0;
  const isPortfolio = courseId === "ap-research";

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!email) return;

    // Mobile: keep mailto so the OS can offer Mail / Gmail / etc.
    if (isMobileDevice()) return;

    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback for older browsers / denied clipboard permission
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

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
          href={`mailto:${email}`}
          onClick={handleEmailClick}
          title={copied ? "Copied" : "Copy email"}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? "Copied" : email}
        </a>
      )}
    </div>
  );
};

export default ExamCountdown;
