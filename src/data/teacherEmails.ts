/** Teacher emails keyed by course id. */
export const teacherEmails: Record<string, string> = {
  "ap-european-history": "andrew.estes@basised.com",
  "ap-latin": "andrew.estes@basised.com",

  "ap-environmental-science": "april.aberra@basised.com",

  "ap-biology": "charlotte.hagerman@basised.com",

  "ap-english-lit": "darla.grant@basised.com",

  "ap-spanish": "emy.huangalespinoza@basised.com",

  "ap-psychology": "henry.alford@basised.com",

  "ap-english-lang": "katelyn.ainslie@basised.com",
  "ap-research": "katelyn.ainslie@basised.com",

  "ap-economics": "makenna.mccurley@basised.com",

  "ap-physics-1": "melissa.georgi@basised.com",
  "ap-seminar": "melissa.georgi@basised.com",

  "ap-us-history": "michael.willett@basised.com",

  "ap-chemistry": "natalie.walker@basised.com",

  "ap-precalculus": "pallavi.payal@basised.com",

  "ap-chinese": "shanshan.hu@basised.com",

  "ap-calculus-bc": "spencer.kwit@basised.com",
  "ap-computer-science-principles": "spencer.kwit@basised.com",
  "ap-physics-2": "spencer.kwit@basised.com",
  "ap-physics-c": "spencer.kwit@basised.com",
  "multivariable-calculus": "spencer.kwit@basised.com",

  "ap-calculus-ab": "tim.winzeler@basised.com",
  "ap-statistics": "tim.winzeler@basised.com",

  "ap-us-gov": "trevor.eaton@basised.com",
};

export function getTeacherEmail(courseId: string): string | null {
  return teacherEmails[courseId] ?? null;
}
