export interface ExamDate {
  date: string;
  time: "morning" | "afternoon";
}

export const examDates: Record<string, ExamDate> = {
  "ap-physics-c":                 { date: "2027-05-03", time: "morning" },
  "ap-biology":                   { date: "2027-05-03", time: "afternoon" },

  "ap-us-gov":                    { date: "2027-05-04", time: "morning" },
  "ap-european-history":          { date: "2027-05-04", time: "afternoon" },
  "ap-economics":                 { date: "2027-05-04", time: "afternoon" },

  "ap-english-lit":               { date: "2027-05-05", time: "morning" },
  "ap-physics-1":                 { date: "2027-05-05", time: "afternoon" },

  "ap-french":                    { date: "2027-05-06", time: "morning" },
  "ap-physics-2":                 { date: "2027-05-06", time: "morning" },
  "ap-world-history":             { date: "2027-05-06", time: "morning" },
  "ap-chemistry":                 { date: "2027-05-06", time: "afternoon" },

  "ap-us-history":                { date: "2027-05-07", time: "morning" },

  "ap-calculus-ab":               { date: "2027-05-10", time: "morning" },
  "ap-calculus-bc":               { date: "2027-05-10", time: "morning" },
  "ap-seminar":                   { date: "2027-05-10", time: "afternoon" },

  "ap-precalculus":               { date: "2027-05-11", time: "morning" },
  "ap-statistics":                { date: "2027-05-11", time: "afternoon" },

  "ap-english-lang":              { date: "2027-05-12", time: "morning" },
  "ap-computer-science-a":        { date: "2027-05-12", time: "afternoon" },

  "ap-spanish":                   { date: "2027-05-13", time: "morning" },
  "ap-chinese":                   { date: "2027-05-13", time: "afternoon" },
  "ap-environmental-science":     { date: "2027-05-13", time: "afternoon" },

  "ap-computer-science-principles": { date: "2027-05-14", time: "morning" },
  "ap-latin":                     { date: "2027-05-14", time: "afternoon" },
  "ap-psychology":                { date: "2027-05-14", time: "afternoon" },

  "ap-research":                  { date: "2027-04-30", time: "morning" },
};

export function getDaysUntilExam(courseId: string): number | null {
  const entry = examDates[courseId];
  if (!entry) return null;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const exam = new Date(entry.date + "T00:00:00");
  const diff = Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

export function getExamDateLabel(courseId: string): string | null {
  const entry = examDates[courseId];
  if (!entry) return null;
  const exam = new Date(entry.date + "T00:00:00");
  const month = exam.toLocaleDateString("en-US", { month: "long" });
  const day = exam.getDate();
  const year = exam.getFullYear();
  if (courseId === "ap-research") {
    return `${month} ${day}, ${year} · Portfolio`;
  }
  const timeLabel = entry.time === "morning" ? "8 AM" : "12 PM";
  return `${month} ${day}, ${year} · ${timeLabel}`;
}
