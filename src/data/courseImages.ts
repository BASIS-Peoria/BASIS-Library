import AP_Biology from "@/assets/ClassroomImages/AP_Biology.png";
import AP_CalculusAB from "@/assets/ClassroomImages/AP_CalculusAB.png";
import AP_CalculusBC from "@/assets/ClassroomImages/AP_CalculusBC.png";
import AP_Chemistry from "@/assets/ClassroomImages/AP_Chemistry.png";
import AP_ChineseLanguage from "@/assets/ClassroomImages/AP_ChineseLanguage.png";
import AP_ComputerScienceA from "@/assets/ClassroomImages/AP_ComputerScienceA.png";
import AP_ComputerSciencePrinciples from "@/assets/ClassroomImages/AP_ComputerSciencePrinciples.png";
import AP_EnglishLanguageAndComposition from "@/assets/ClassroomImages/AP_EnglishLanguageAndComposition.png";
import AP_EnglishLiteratureAndComposition from "@/assets/ClassroomImages/AP_EnglishLiteratureAndComposition.png";
import AP_EnviromentalScience from "@/assets/ClassroomImages/AP_EnviromentalScience.png";
import AP_EuropeanHistory from "@/assets/ClassroomImages/AP_EuropeanHistory.png";
import AP_FrenchLanguage from "@/assets/ClassroomImages/AP_FrenchLanguage.png";
import AP_Latin from "@/assets/ClassroomImages/AP_Latin.png";
import AP_Macroeconomics from "@/assets/ClassroomImages/AP_Macroeconomics.png";

import AP_Physics1Algebra from "@/assets/ClassroomImages/AP_Physics1Algebra.png";
import AP_Physics2Algebra from "@/assets/ClassroomImages/AP_Physics2Algebra.png";
import AP_PhysicsCMechanics from "@/assets/ClassroomImages/AP_PhysicsCMechanics.png";
import AP_Precalculus from "@/assets/ClassroomImages/AP_Precalculus.png";
import AP_Psychology from "@/assets/ClassroomImages/AP_Psychology.png";
import AP_Research from "@/assets/ClassroomImages/AP_Research.png";
import AP_Seminar from "@/assets/ClassroomImages/AP_Seminar.png";
import AP_SpanishLanguage from "@/assets/ClassroomImages/AP_SpanishLanguage.png";
import AP_Statistics from "@/assets/ClassroomImages/AP_Statistics.png";
import AP_USGovernment from "@/assets/ClassroomImages/AP_USGovernment.png";
import AP_UnitedStatesHistory from "@/assets/ClassroomImages/AP_UnitedStatesHistory.png";
import AP_WorldHistoryModern from "@/assets/ClassroomImages/AP_WorldHistoryModern.png";

export interface CourseImageData {
  image: string;
  color: string;
}

export const courseImageMap: Record<string, CourseImageData> = {
  "ap-physics-1": { image: AP_Physics1Algebra, color: "#52004a" },
  "ap-physics-2": { image: AP_Physics2Algebra, color: "#52004a" },
  "ap-physics-c": { image: AP_PhysicsCMechanics, color: "#003c64" },
  "ap-biology": { image: AP_Biology, color: "#9a1481" },
  "ap-chemistry": { image: AP_Chemistry, color: "#159c93" },
  "ap-environmental-science": { image: AP_EnviromentalScience, color: "#01614a" },
  "ap-calculus-ab": { image: AP_CalculusAB, color: "#4d6ed0" },
  "ap-calculus-bc": { image: AP_CalculusBC, color: "#4d6ed0" },
  "ap-precalculus": { image: AP_Precalculus, color: "#52004a" },
  "ap-statistics": { image: AP_Statistics, color: "#003c64" },
  "ap-computer-science-a": { image: AP_ComputerScienceA, color: "#159c93" },
  "ap-computer-science-principles": { image: AP_ComputerSciencePrinciples, color: "#9a1481" },
  "ap-english-lang": { image: AP_EnglishLanguageAndComposition, color: "#01614a" },
  "ap-english-lit": { image: AP_EnglishLiteratureAndComposition, color: "#0077c8" },
  "ap-european-history": { image: AP_EuropeanHistory, color: "#0077c8" },
  "ap-us-history": { image: AP_UnitedStatesHistory, color: "#003c64" },
  "ap-world-history": { image: AP_WorldHistoryModern, color: "#4d6ed0" },
  "ap-economics": { image: AP_Macroeconomics, color: "#01614a" },
  "ap-psychology": { image: AP_Psychology, color: "#f46643" },
  "ap-us-gov": { image: AP_USGovernment, color: "#52004a" },
  "ap-chinese": { image: AP_ChineseLanguage, color: "#9a1481" },
  "ap-french": { image: AP_FrenchLanguage, color: "#4d6ed0" },
  "ap-spanish": { image: AP_SpanishLanguage, color: "#fbae25" },
  "ap-latin": { image: AP_Latin, color: "#52004a" },
  "ap-seminar": { image: AP_Seminar, color: "#0077c8" },
  "ap-research": { image: AP_Research, color: "#4d6ed0" },
};

// Preload all banner images into browser cache
export function preloadCourseImages() {
  Object.values(courseImageMap).forEach(({ image }) => {
    const img = new Image();
    img.src = image;
  });
}
