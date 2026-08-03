export interface Book {
  id: string;
  title: string;
  link: string | null;
}

export interface Note {
  id: string;
  title: string;
  link: string | null;
}

export interface CollegeBoardMaterial {
  id: string;
  title: string;
  link: string | null;
}

export interface Video {
  id: string;
  title: string;
  link: string | null;
}

export interface Website {
  id: string;
  title: string;
  link: string | null;
}

export type ResourceType = "book" | "note" | "collegeboard" | "video" | "website";

export interface Course {
  id: string;
  name: string;
  books: Book[];
  notes: Note[];
  collegeboard: CollegeBoardMaterial[];
  videos: Video[];
  websites: Website[];
  /** When false, omit College Board Materials (non-AP Capstones). */
  showCollegeBoard?: boolean;
}

export interface CourseGroup {
  label: string;
  courses: Course[];
}

export const courseGroups: CourseGroup[] = [
  {
    label: "Sciences",
    courses: [
      {
        id: "ap-physics-1",
        name: "AP Physics 1: Algebra-Based",
        books: [
          { id: "phys1-barrons-2026", title: "[2026] AP Physics 1 - Barron's Premium", link: "https://drive.google.com/file/d/1UDUOk1fbHA4Wg35K-y1mPLRwqkSWWUaV/view?usp=sharing" },
          { id: "phys1-princeton-2023", title: "[2023] AP Physics 1 - Princeton Review", link: "https://drive.google.com/file/d/1J4TmK-JYfw7F90RT8WvOraMRRAxeYAR9/view?usp=sharing" },
        ],
        notes: [
          { id: "phys1-note-2024", title: "[2024] AP Physics 1 - Notes", link: "https://drive.google.com/file/d/16K5zn_SePNIvqLYIHEpkqpIKVC8Q9q0R/view" },
        ],
        collegeboard: [
          { id: "cb-phys1-frq-2026", title: "[2026] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-physics-1.pdf" },
          { id: "cb-phys1-frq-2025", title: "[2025] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-1.pdf" },
          { id: "cb-phys1-frq-2024", title: "[2024] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-1.pdf" },
          { id: "cb-phys1-frq-2023", title: "[2023] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-1.pdf" },
        ],
        videos: [
          { id: "phys1-vid-flipping", title: "Flipping Physics", link: "https://www.youtube.com/playlist?list=PLPyapQSxH6mb62DDbqhnHrXlriWlUjLdY" },
          { id: "phys1-vid-marco", title: "Marco Learning", link: "https://www.youtube.com/playlist?list=PLCEja84uspXslPFUjfY5fp7Hw62HmUbay" },
          { id: "phys1-vid-allen", title: "AllenTsaoSTEMCoach", link: "https://www.youtube.com/@AllenTsaoSTEMCoach/search?query=ap%20physics%201" },
        ],
        websites: [
          { id: "phys1-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/science/ap-college-physics-1" },
          { id: "phys1-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/cb9ba294-a74d-4235-9105-ff34370b5ebc/AP-Physics-1-Ultimate-Guide" },
          { id: "phys1-web-bozeman", title: "Bozeman Science", link: "https://www.bozemanscience.com/ap-physics" },
          { id: "phys1-web-fiveable", title: "Fiveable Cheatsheet", link: "https://cdn.prod.website-files.com/632be2995229ca0bd3715246/6622e385b4c1262b23cb6ee0_AP%20Physics%201%20Cheatsheet%20(2024).pdf" },
          { id: "phys1-web-aplus", title: "APlus Physics", link: "https://aplusphysics.com/courses/ap-1/AP1_Physics.html" },
          { id: "phys1-web-aviary", title: "The Physics Aviary", link: "https://www.thephysicsaviary.com/" },
          { id: "phys1-web-freeman", title: "Michael Freeman", link: "https://sites.google.com/view/afreeparticle/home?authuser=0" },
          { id: "phys1-web-extra", title: "Extra Resources", link: "https://shagun-baranwal.notion.site/AP-Physics-1-Resources-608af1c442c84c6084edc5144988991a" },
          { id: "phys1-web-textbook", title: "Free Textbook", link: "https://openstax.org/details/books/college-physics-ap-courses-2e" },
          { id: "phys1-web-flipping-review", title: "Flipping Physics (review)", link: "https://www.flippingphysics.com/ap-physics-1-review.html" },
        ],
      },
      {
        id: "ap-physics-2",
        name: "AP Physics 2: Algebra-Based",
        books: [
          { id: "phys2-barrons-2021", title: "[2021] AP Physics 2 - Barron's Premium", link: "https://drive.google.com/file/d/1m2mH__lDPW-hgNsm72mSzk_O7YNzHD6D/view?usp=sharing" },
          { id: "phys2-princeton-2025", title: "[2025] AP Physics 2 - Princeton Review", link: "https://drive.google.com/file/d/1_qX5nuZ9l__0UjYnLIJPkM6cxOAxPUyB/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-phys2-frq-2026", title: "[2026] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-physics-2.pdf" },
          { id: "cb-phys2-frq-2025", title: "[2025] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-2.pdf" },
          { id: "cb-phys2-frq-2024", title: "[2024] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-2.pdf" },
          { id: "cb-phys2-frq-2023", title: "[2023] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-2.pdf" },
        ],
        videos: [
          { id: "phys2-vid-allen", title: "AllenTsaoSTEMCoach", link: "https://www.youtube.com/@AllenTsaoSTEMCoach/search?query=ap%20physics%202" },
          { id: "phys2-vid-twu", title: "Yau-Jong Twu", link: "https://www.youtube.com/user/onlearningcurve/playlists" },
        ],
        websites: [
          { id: "phys2-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/science/ap-physics-2" },
          { id: "phys2-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/4e82ce64-6863-475e-8fde-6b183d5e4a3a/AP-Physics-2-Ultimate-Guide" },
          { id: "phys2-web-bozeman", title: "Bozeman Science", link: "https://www.bozemanscience.com/ap-physics" },
          { id: "phys2-web-aplus", title: "APlus Physics", link: "https://aplusphysics.com/courses/ap-1/AP1_Physics.html" },
          { id: "phys2-web-aviary", title: "The Physics Aviary", link: "https://www.thephysicsaviary.com/" },
          { id: "phys2-web-extra", title: "Extra Resources", link: "https://shagun-baranwal2.notion.site/AP-Physics-2-Resources-a722abf45d004a59a276371537adba0d" },
          { id: "phys2-web-textbook", title: "Free Textbook", link: "https://openstax.org/details/books/college-physics-ap-courses-2e" },
        ],
      },
      {
        id: "ap-physics-c",
        name: "AP Physics C",
        books: [
          { id: "physc-5steps-2024", title: "[2024] AP Physics C - 5 Steps to a 5", link: "https://drive.google.com/file/d/1lS9a_MwHHkt_yj1dffe2Ze_L9vKQQZXa/view?usp=sharing" },
          { id: "physc-barrons-2024", title: "[2024] AP Physics C - Barron's Premium", link: "https://drive.google.com/file/d/1vWzCOxr637e6oKgmq-OhSizPD-zYVQkB/view?usp=sharing" },
          { id: "physc-princeton-2023", title: "[2023] AP Physics C - Princeton Review", link: "https://drive.google.com/file/d/1kzoj2kAJSj_HBQwXIkdrIelXDm-o19JY/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-physc-em-frq-2026", title: "[2026] AP Physics C: E&M - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-physics-c-em.pdf" },
          { id: "cb-physc-em-frq-2025", title: "[2025] AP Physics C: E&M - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-c-em.pdf" },
          { id: "cb-physc-em-frq-2024-s1", title: "[2024] AP Physics C: E&M - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-em-set-1.pdf" },
          { id: "cb-physc-em-frq-2024-s2", title: "[2024] AP Physics C: E&M - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-em-set-2.pdf" },
          { id: "cb-physc-em-frq-2023-s1", title: "[2023] AP Physics C: E&M - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-em-set-1.pdf" },
          { id: "cb-physc-em-frq-2023-s2", title: "[2023] AP Physics C: E&M - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-em-set-2.pdf" },
          { id: "cb-physc-mech-frq-2026", title: "[2026] AP Physics C: Mechanics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-physics-c-mech.pdf" },
          { id: "cb-physc-mech-frq-2025", title: "[2025] AP Physics C: Mechanics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-c-mech.pdf" },
          { id: "cb-physc-mech-frq-2024-s1", title: "[2024] AP Physics C: Mechanics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-mech-set-1.pdf" },
          { id: "cb-physc-mech-frq-2024-s2", title: "[2024] AP Physics C: Mechanics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-mech-set-2.pdf" },
          { id: "cb-physc-mech-frq-2023-s1", title: "[2023] AP Physics C: Mechanics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-mechanics-set-1.pdf" },
          { id: "cb-physc-mech-frq-2023-s2", title: "[2023] AP Physics C: Mechanics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-mechanics-set-2.pdf" },
        ],
        videos: [
          { id: "physc-vid-flipping-em", title: "Flipping Physics (E&M)", link: "https://www.youtube.com/playlist?list=PLPyapQSxH6mbZsSbda5nrvEQpps6lyTr2" },
          { id: "physc-vid-allen-em", title: "AllenTsaoSTEMCoach (E&M)", link: "https://www.youtube.com/@AllenTsaoSTEMCoach/search?query=ap%20physics%20c%20e%26m" },
          { id: "physc-vid-viren-em", title: "Viren's Videos (E&M)", link: "https://www.apphysicslectures.com/ap-physics-em" },
          { id: "physc-vid-flipping-mech", title: "Flipping Physics (Mechanics)", link: "https://www.youtube.com/@FlippingPhysics/search?query=ap%20physics%20c%20mech" },
          { id: "physc-vid-allen-mech", title: "AllenTsaoSTEMCoach (Mechanics)", link: "https://www.youtube.com/@AllenTsaoSTEMCoach/search?query=ap%20physics%20c%20mech" },
          { id: "physc-vid-viren-mech", title: "Viren's Videos (Mechanics)", link: "https://www.apphysicslectures.com/ap-physics-mechanics" },
        ],
        websites: [
          { id: "physc-web-em-knowt", title: "Knowt Ultimate Guide (E&M)", link: "https://knowt.com/note/604126be-aee3-4ae0-8e85-dda91b70f1fb/AP-Physics-C-Electricity-and-Magnetism-" },
          { id: "physc-web-em-aplus", title: "APlus Physics (E&M)", link: "https://aplusphysics.com/courses/ap-c/videos/APCVidIndex.html#EM" },
          { id: "physc-web-em-extra", title: "Extra Resources (E&M)", link: "https://shagun-baranwal2.notion.site/AP-Physics-Electricity-Magnetism-Resources-1583aea07da844eb8a9b00294bc1b121" },
          { id: "physc-web-em-flipping", title: "Flipping Physics (E&M)", link: "https://www.flippingphysics.com/ap-physics-c-em.html" },
          { id: "physc-web-mech-knowt", title: "Knowt Ultimate Guide (Mechanics)", link: "https://knowt.com/note/33168435-42e3-48fe-886b-b20aff53664c/AP-Physics-C-Mechanics-Ultimate-Guide" },
          { id: "physc-web-mech-aplus", title: "APlus Physics (Mechanics)", link: "https://aplusphysics.com/courses/ap-c/videos/APCVidIndex.html#Mechanics" },
          { id: "physc-web-mech-extra", title: "Extra Resources (Mechanics)", link: "https://shagun-baranwal2.notion.site/AP-Physics-Mechanics-Resources-c716df7b1f4140c18b6c9d0dc27deba9" },
          { id: "physc-web-mech-flipping", title: "Flipping Physics (Mechanics)", link: "https://www.flippingphysics.com/ap-physics-c.html" },
        ],
      },
      {
        id: "ap-biology",
        name: "AP Biology",
        books: [
          { id: "bio-princeton-2023", title: "[2023] AP Biology - Princeton Review", link: "https://drive.google.com/file/d/1qcbzm9aq-zMA4lvP__AuHaHpGdKdqP5q/view?usp=sharing" },
          { id: "bio-barrons-2025", title: "[2025] AP Biology - Barron's Premium", link: "https://drive.google.com/file/d/1YZY5NURFWira8pboxwCtspUuKDlG7Lxf/view?usp=sharing" },
        ],
        notes: [
          { id: "bio-note-review", title: "[2026] AP Biology - Detailed Review Packet", link: "https://drive.google.com/file/d/1lvOiEI-7lnmfnY3DhiUcJZG2e4sGD6Ad/view" },
        ],
        collegeboard: [
          { id: "cb-bio-frq-2026", title: "[2026] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-biology.pdf" },
          { id: "cb-bio-frq-2025", title: "[2025] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-biology.pdf" },
          { id: "cb-bio-frq-2024", title: "[2024] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-biology.pdf" },
          { id: "cb-bio-frq-2023", title: "[2023] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-biology.pdf" },
        ],
        videos: [
          { id: "bio-vid-marco", title: "Marco Learning", link: "https://www.youtube.com/playlist?list=PLCEja84uspXsN8Cxx-p-RK6pMpwghiJ4d" },
          { id: "bio-vid-heynow", title: "HeyNowScience", link: "https://www.youtube.com/@HeyNow1003/search?query=ap%20bio" },
          { id: "bio-vid-lasseter", title: "Lasseter's Lab", link: "https://www.youtube.com/@LassetersLab/search?query=ap%20bio" },
          { id: "bio-vid-gabe", title: "Gabe Poser", link: "https://www.youtube.com/@poseknowsbio/videos" },
          { id: "bio-vid-recap", title: "The APsolute RecAP", link: "https://www.youtube.com/@theapsoluterecap/search?query=ap%20bio" },
        ],
        websites: [
          { id: "bio-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/science/ap-biology" },
          { id: "bio-web-penguins", title: "AP Bio Penguin", link: "https://apbiopenguins.weebly.com/" },
          { id: "bio-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/d4df491c-bca7-4d95-ba98-033ee368dddc/AP-Biology-Ultimate-Guide" },
          { id: "bio-web-teacher", title: "Teacher Recommended Resources", link: "https://apcentral.collegeboard.org/courses/ap-biology/classroom-resources/teacher-recommended-resources" },
          { id: "bio-web-bozeman", title: "Bozeman Science", link: "https://www.bozemanscience.com/ap-biology" },
          { id: "bio-web-simple", title: "Simple Studies", link: "https://www.simplestudies.org/groups/ap-biology" },
        ],
      },
      {
        id: "ap-chemistry",
        name: "AP Chemistry",
        books: [
          { id: "chem-barrons-2025", title: "[2025] AP Chemistry - Barron's Premium", link: "https://drive.google.com/file/d/1akr6zePzug7gDACEKRK9xW57nNpUmSVy/view?usp=sharing" },
          { id: "chem-princeton-2023", title: "[2023] AP Chemistry - Princeton Review", link: "https://drive.google.com/file/d/1SniSoCqK7LhZcQ5zcKDUhridMoA20U23/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-chem-frq-2026", title: "[2026] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-chemistry.pdf" },
          { id: "cb-chem-frq-2025", title: "[2025] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-chemistry.pdf" },
          { id: "cb-chem-frq-2024", title: "[2024] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-chemistry.pdf" },
          { id: "cb-chem-frq-2023", title: "[2023] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-chemistry.pdf" },
        ],
        videos: [
          { id: "chem-vid-krug", title: "Jeremy Krug", link: "https://www.youtube.com/playlist?list=PLp8P489qkBoZb_b4_FOgGGPWGxrVV6Al9" },
          { id: "chem-vid-organic", title: "Organic Chemistry Tutor", link: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BWziAvOKdqsMFSB_MyyLAqS" },
          { id: "chem-vid-farabaugh", title: "Michael Farabaugh", link: "https://www.youtube.com/@mrfarabaugh/videos" },
        ],
        websites: [
          { id: "chem-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/science/ap-chemistry-beta" },
          { id: "chem-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/0b470471-02df-4bfb-b1db-588c8e0b46db/AP-Chemistry-Ultimate-Guide" },
          { id: "chem-web-bozeman", title: "Bozeman Science", link: "https://www.bozemanscience.com/ap-chemistry" },
          { id: "chem-web-equations", title: "Equations Sheet", link: "https://apcentral.collegeboard.org/media/pdf/ap-chemistry-equations-sheet.pdf" },
          { id: "chem-web-wong", title: "Wong Chemistry Review Packets", link: "https://wongchemistry.weebly.com/ap-exam-review-packets.html" },
          { id: "chem-web-reddit", title: "r/APChem", link: "https://www.reddit.com/r/APChem/" },
          { id: "chem-web-iitian", title: "IITian Academy", link: "https://www.iitianacademy.com/ap-chemistry-mcqs-and-free-response-exam-style-practice-question-and-answer/" },
          { id: "chem-web-reddit-guide", title: "Reddit Study Guide", link: "https://www.reddit.com/r/APStudents/comments/129e0t0/comment/jenciph/" },
        ],
      },
      {
        id: "ap-environmental-science",
        name: "AP Environmental Science",
        books: [
          { id: "envs-5steps-2024", title: "[2024] AP Environmental Science - 5 Steps to a 5", link: "https://drive.google.com/file/d/1ZDId0VRSA8Pn4jEs8n4HXNzv1gxJdg18/view?usp=sharing" },
          { id: "envs-barrons-2025", title: "[2025] AP Environmental Science - Barron's Premium", link: "https://drive.google.com/file/d/1JCSnkq51-FaV_CW1_Qe6BNbqoGI26sjb/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-envs-frq-2026", title: "[2026] AP Environmental Science - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-environmental-science.pdf" },
          { id: "cb-envs-frq-2025-s1", title: "[2025] AP Environmental Science - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-environmental-science-set-1.pdf" },
          { id: "cb-envs-frq-2025-s2", title: "[2025] AP Environmental Science - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-environmental-science-set-2.pdf" },
          { id: "cb-envs-frq-2024-s1", title: "[2024] AP Environmental Science - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-environmental-science-set-1.pdf" },
          { id: "cb-envs-frq-2024-s2", title: "[2024] AP Environmental Science - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-environmental-science-set-2.pdf" },
          { id: "cb-envs-frq-2023-s1", title: "[2023] AP Environmental Science - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-environmental-science-set-1.pdf" },
          { id: "cb-envs-frq-2023-s2", title: "[2023] AP Environmental Science - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-environmental-science-set-2.pdf" },
        ],
        videos: [
          { id: "envs-vid-smedes", title: "Mr. Smedes", link: "https://www.youtube.com/@Mr.Smedes/videos" },
          { id: "envs-vid-bozeman", title: "Bozeman Science", link: "https://www.youtube.com/playlist?list=PLllVwaZQkS2qK4Z6xBVDRak8an1-kqsgm" },
        ],
        websites: [
          { id: "envs-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/science/ap-college-environmental-science" },
          { id: "envs-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/1607cb1a-986f-435d-9f60-91d9b9b77d38/Ultimate-Guide-AP-Environmental-Science" },
          { id: "envs-web-bozeman", title: "Bozeman Science", link: "https://www.bozemanscience.com/ap-environmental-science" },
          { id: "envs-web-practice", title: "PracticeAP", link: "https://practiceap.com/envsci.html" },
          { id: "envs-web-mrsk", title: "Mrs. K Science", link: "https://www.mrskscience.com/ap-environmental-science" },
        ],
      },
    ],
  },
  {
    label: "Mathematics & Computer Science",
    courses: [
      {
        id: "ap-calculus-ab", name: "AP Calculus AB", books: [
          { id: "calc-ab-book-course-2020", title: "[2020] AP Calculus AB - Calculus for the AP Course", link: "https://drive.google.com/file/d/1h4MHzRVhMi6IM1VaODVlEQAjetdFK_p_/view" },
          { id: "calc-ab-book-5steps-2020", title: "[2020] AP Calculus AB - 5 Steps to a 5", link: "https://drive.google.com/file/d/1-IIImlV3JyMjTLOkuqtuO_ubbcTXB99U/view" },
          { id: "calc-ab-book-frq-2016", title: "[2016] AP Calculus AB - Free Response Questions in Preparation 10th Edition", link: "https://drive.google.com/file/d/1_ruT8XwKNLp7RE9DHJY2y6EWczjiB7bl/view" },
          { id: "calc-ab-book-5steps-2021", title: "[2021] AP Calculus AB - 5 Steps to a 5", link: "https://drive.google.com/file/d/1k8r-41EPxnzSHZ0fni3LscwbNs5MWDiN/view" },
          { id: "calc-ab-book-barrons-2025", title: "[2025] AP Calculus AB - Barron's Premium", link: "https://drive.google.com/file/d/1b9Jox4PRsIgbjZgLllWrplTKbOin2R0B/view" },
        ],
        notes: [
          { id: "calc-ab-note-review", title: "[2025] AP Calculus AB - Detailed Review Packet", link: "https://drive.google.com/file/d/1TQkclT1H-azp5bcK_BxybmwwXoBsd1WR/view" },
          { id: "calc-ab-note-cheat", title: "[2025] AP Calculus AB/BC - Cheat Sheet", link: "https://drive.google.com/file/d/1qa2RZ-NsKgjX9NpBGPkjiL8WjrsmlU3F/view" },
          { id: "calc-ab-note-cram", title: "[2025] AP Calculus AB - Cram Sheet", link: "https://drive.google.com/file/d/11FgWFvVBeRvlmXmPUxDxwrciK_v-hXYh/view" },
        ],
        collegeboard: [
          { id: "cb-calc-ab-frq-2026", title: "[2026] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-calculus-ab.pdf" },
          { id: "cb-calc-ab-frq-2025", title: "[2025] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-ab.pdf" },
          { id: "cb-calc-ab-frq-2024", title: "[2024] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-ab.pdf" },
          { id: "cb-calc-ab-frq-2023", title: "[2023] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-ab.pdf" },
        ],
        videos: [
          { id: "calc-ab-vid-dave", title: "Professor Dave Explains", link: "https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M" },
          { id: "calc-ab-vid-3b1b", title: "3B1B Essence of Calculus", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
          { id: "calc-ab-vid-organic", title: "Organic Chemistry Tutor", link: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyV4T2Allw6zY0jEumv" },
        ],
        websites: [
          { id: "calc-ab-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/math/ap-calculus-ab" },
          { id: "calc-ab-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/ab37c1eb-4e01-4be6-8cf4-1e02c9305a0c/AP-Calculus-AB---Ultimate-Guide" },
          { id: "calc-ab-web-flipped", title: "Flipped Math", link: "https://calculus.flippedmath.com/" },
          { id: "calc-ab-web-turks", title: "TurksVids Resources", link: "https://docs.google.com/document/d/1omZqpB0UkSJY1r4lPvEtojAa5NahVoW3ZxN0uLviKww/edit?usp=sharing" },
        ],
      },
      {
        id: "ap-calculus-bc", name: "AP Calculus BC", books: [
          { id: "calc-bc-book-5steps-2024", title: "[2024] AP Calculus AB - 5 Steps to a 5", link: "https://drive.google.com/file/d/1YlvVSsTj9COaPjYfjl_gqMFtt9oPiKQ_/view" },
          { id: "calc-bc-book-cracking-2024", title: "[2024] AP Calculus BC - Cracking the AP Calculus BC Exam", link: "https://drive.google.com/file/d/1UBQmzYu3x4Am9qnR_n100dZKq6LzN72v/view" },
        ],
        notes: [
          { id: "calc-bc-note-cheat", title: "[2025] AP Calculus AB/BC - Cheat Sheet", link: "https://drive.google.com/file/d/1qa2RZ-NsKgjX9NpBGPkjiL8WjrsmlU3F/view" },
          { id: "calc-bc-note-tri1", title: "[2026] AP Calculus BC - Trimester 1 Notes", link: "https://drive.google.com/file/d/1Nrq5Sugc06VHS7HedbQEb7GlccNLLcp8/view" },
          { id: "calc-bc-note-tri2", title: "[2026] AP Calculus BC - Trimester 2 Notes", link: "https://drive.google.com/file/d/1_Ah26LqWJjoVdVzgyzAPjLlTOPSLvCoE/view" },
        ],
        collegeboard: [
          { id: "cb-calc-bc-frq-2026", title: "[2026] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-calculus-bc.pdf" },
          { id: "cb-calc-bc-frq-2025", title: "[2025] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-bc.pdf" },
          { id: "cb-calc-bc-frq-2024", title: "[2024] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-bc.pdf" },
          { id: "cb-calc-bc-frq-2023", title: "[2023] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-bc.pdf" },
        ],
        videos: [
          { id: "calc-bc-vid-dave", title: "Professor Dave Explains", link: "https://www.youtube.com/playlist?list=PLybg94GvOJ9ELZEe9s2NXTKr41Yedbw7M" },
          { id: "calc-bc-vid-3b1b", title: "3B1B Essence of Calculus", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
          { id: "calc-bc-vid-organic", title: "Organic Chemistry Tutor", link: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyV4T2Allw6zY0jEumv" },
        ],
        websites: [
          { id: "calc-bc-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/math/ap-calculus-bc" },
          { id: "calc-bc-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/820d043b-616e-495e-a62c-ebfad689e850/AP-Calculus-BC-Ultimate-Guide" },
          { id: "calc-bc-web-flipped", title: "Flipped Math", link: "https://calculus.flippedmath.com/" },
          { id: "calc-bc-web-turks", title: "TurksVids Resources", link: "https://docs.google.com/document/d/1h0OsHwdEplKx7CqUWtqkl3AauL6Nt3e7_L0cZRdtARs/edit?usp=sharing" },
          { id: "calc-bc-web-iitian", title: "IITian Academy", link: "https://www.iitianacademy.com/ap-calculus-bc-mcqs-and-free-response-exam-style-practice-question-and-answer/" },
        ],
      },
      {
        id: "ap-precalculus", name: "AP Precalculus", books: [
          { id: "precalc-book-barrons-2025", title: "[2025] AP Precalculus - Barron's Premium", link: "https://drive.google.com/file/d/1IddZdHtclENqNtOc5yFWhSbyZlXnHDQL/view" },
          { id: "precalc-book-barrons-2024", title: "[2024] AP Precalculus - Barron's Premium", link: "https://drive.google.com/file/d/1Spc_7zoiU6QGzN0USVn5TtXwcvwhwmbr/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-precalc-frq-2026", title: "[2026] AP Precalculus - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-precalculus.pdf" },
          { id: "cb-precalc-frq-2025", title: "[2025] AP Precalculus - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-precalculus.pdf" },
          { id: "cb-precalc-frq-2024", title: "[2024] AP Precalculus - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-precalculus.pdf" },
        ],
        videos: [
          { id: "precalc-vid-maphy", title: "Tutoring MaPhy", link: "https://www.youtube.com/playlist?list=PLCI1LaWjWlZ8rD2TictdYdmrh9CiMvgyA" },
          { id: "precalc-vid-algebros", title: "The Algebros", link: "https://www.youtube.com/@TheAlgebros/videos" },
          { id: "precalc-vid-katherine", title: "Katherine Quigley", link: "https://youtube.com/@MsQ_MathIsCool/videos" },
          { id: "precalc-vid-karie", title: "Karie E Kosh", link: "https://www.youtube.com/@karieekosh7964/videos" },
        ],
        websites: [
          { id: "precalc-web-knowt", title: "Knowt Guides", link: "https://knowt.com/exams/AP/AP-Precalculus" },
          { id: "precalc-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/math/precalculus" },
          { id: "precalc-web-flipped", title: "Flipped Math", link: "https://precalculus.flippedmath.com/ap-precalc.html" },
        ],
      },
      {
        id: "ap-statistics", name: "AP Statistics", books: [
          { id: "stats-book-practice-2015", title: "[2015] AP Statistics - The Practice of Statistics", link: "https://drive.google.com/file/d/1eIM7mdhrn-2T0x6FTzMFJV0UQf8pnZgj/view" },
          { id: "stats-book-5steps-2023", title: "[2023] AP Statistics - 5 Steps to a 5", link: "https://drive.google.com/file/d/1N4R07ROrsNHiQqKqAdcUHgUss2CX7kft/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-stats-frq-2026", title: "[2026] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-statistics.pdf" },
          { id: "cb-stats-frq-2025", title: "[2025] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-statistics.pdf" },
          { id: "cb-stats-frq-2024", title: "[2024] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-statistics.pdf" },
          { id: "cb-stats-frq-2023", title: "[2023] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-statistics.pdf" },
        ],
        videos: [
          { id: "stats-vid-hayes", title: "Hayes' World of Math", link: "https://www.youtube.com/@HayesWorldofMath/search?query=ap%20statistics" },
          { id: "stats-vid-organic", title: "Organic Chemistry Tutor", link: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BVsziIRdfv4Hl4UIqDZhXWV" },
          { id: "stats-vid-skew", title: "Skew the Script", link: "https://www.youtube.com/@skewthescript/search?query=ap%20stat" },
        ],
        websites: [
          { id: "stats-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/math/ap-statistics" },
          { id: "stats-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/ad2dad79-c814-408d-bc06-aafc72bb3722/AP-Statistics-Ultimate-Guide" },
          { id: "stats-web-bedford", title: "Bedford Textbook Videos", link: "https://www.macmillanlearning.com/studentresources/highschool/hsbridgepage/tps6e_update.html" },
        ],
      },
      {
        id: "ap-computer-science-a", name: "AP Computer Science A", books: [
          { id: "csa-book-barrons-2024", title: "[2024] AP Computer Science A - Barron's Premium", link: "https://drive.google.com/file/d/1OqX9yLF0b5-fth4RHdfsUlGBQuViUgZr/view" },
          { id: "csa-book-5steps-2024", title: "[2024] AP Computer Science A - 5 Steps to a 5", link: "https://drive.google.com/file/d/1lbQE0jXdYMGYscNdhXEopwbLz5kZQT1y/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-csa-frq-2026", title: "[2026] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-computer-science-a.pdf" },
          { id: "cb-csa-frq-2025", title: "[2025] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-a.pdf" },
          { id: "cb-csa-frq-2024", title: "[2024] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-comp-sci-a.pdf" },
          { id: "cb-csa-frq-2023", title: "[2023] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-comp-sci-a.pdf" },
        ],
        videos: [
          { id: "csa-vid-bill", title: "Bill Barnurr", link: "https://www.youtube.com/playlist?list=PLmpmyPywZ440vPqpAPeUkE-TeKifbS45W" },
          { id: "csa-vid-colleen", title: "Colleen Lewis", link: "https://www.youtube.com/@ColleenMLewis/videos" },
        ],
        websites: [
          { id: "csa-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/09f1277d-977c-41b4-b9ca-04bc94becbb6/AP-Computer-Science-A-Ultimate-Guide" },
          { id: "csa-web-codeorg", title: "code.org", link: "https://code.org/curriculum/csa" },
          { id: "csa-web-csawesome", title: "CSAwesome", link: "https://runestone.academy/ns/books/published/csawesome/index.html?mode=browsing" },
          { id: "csa-web-mcq", title: "MCQ Practice", link: "https://www.apcsaexam.org/mcpractice.html" },
          { id: "csa-web-codehs", title: "CodeHS", link: "https://codehs.com/textbook/apcsa_textbook/" },
        ],
      },
      {
        id: "ap-computer-science-principles", name: "AP Computer Science Principles", books: [
          { id: "csp-book-5steps-2023", title: "[2023] AP Computer Science Principles - 5 Steps to a 5", link: "https://drive.google.com/file/d/1-B8_N8OFKkzZbnC00TXSIvup1VnTaG7c/view" },
          { id: "csp-book-barrons-2025", title: "[2025] AP Computer Science Principles - Barron's Premium", link: "https://drive.google.com/file/d/1i0fUJKBPCLHlLgIztkNTZpQh2w05_HvE/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-csp-frq-2026", title: "[2026] AP Computer Science Principles - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-computer-science-principles.pdf" },
          { id: "cb-csp-frq-2025-s1", title: "[2025] AP Computer Science Principles - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-principles-set-1.pdf" },
          { id: "cb-csp-frq-2025-s2", title: "[2025] AP Computer Science Principles - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-principles-set-2.pdf" },
          { id: "cb-csp-frq-2024-s1", title: "[2024] AP Computer Science Principles - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" },
          { id: "cb-csp-frq-2024-s2", title: "[2024] AP Computer Science Principles - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-2.pdf" },
        ],
        videos: [
          { id: "csp-vid-kaiser", title: "Mr. Kaiser", link: "https://www.youtube.com/@KurtKaiserUS/videos" },
          { id: "csp-vid-wu", title: "Dr_Wu", link: "https://www.youtube.com/@dr_wu3964/featured" },
        ],
        websites: [
          { id: "csp-web-codeorg", title: "code.org", link: "https://studio.code.org/courses/csp-2024/?redirect_warning=true" },
          { id: "csp-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/computing/ap-computer-science-principles" },
          { id: "csp-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/044e1aae-359c-4d9c-99cd-a61d0671853b/AP-Computer-Science-Principles-Ultimate-" },
          { id: "csp-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-comp-sci-p" },
          { id: "csp-web-mobilecsp", title: "Mobile CSP", link: "https://runestone.academy/ns/books/published/mobilecsp/Unit8-AP-Exam-Prep/toctree.html" },
        ],
      },
    ],
  },
  {
    label: "English",
    courses: [
      {
        id: "ap-english-lang",
        name: "AP English Language and Composition",
        books: [
          { id: "eng-lang-5steps-2024", title: "[2024] AP English Language and Composition - 5 Steps to a 5", link: "https://drive.google.com/file/d/1C79184nKVRWPcqRWgML1-HXWVUkZSHOA/view" },
          { id: "eng-lang-princeton-2025", title: "[2025] AP English Language and Composition - Princeton Review", link: "https://drive.google.com/file/d/1CD6z_cNcV2_U3DlVVYEUYewyKTbjyR4j/view" },
          { id: "eng-lang-barrons-2026", title: "[2026] AP English Language and Composition - Barron's", link: "https://drive.google.com/file/d/1f78BQTbOH7WZ0wvF0OEYgr5d59wVjoPy/view" },
          { id: "eng-lang-barrons-2025", title: "[2025] AP English Language and Composition - Barron's", link: "https://drive.google.com/file/d/1pyTARVtm3Rulely_QLp7KUpkK9f2CMl4/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-eng-lang-frq-2026", title: "[2026] AP English Language - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-english-language.pdf" },
          { id: "cb-eng-lang-frq-2025-s1", title: "[2025] AP English Language - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-language-set-1.pdf" },
          { id: "cb-eng-lang-frq-2025-s2", title: "[2025] AP English Language - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-language-set-2.pdf" },
          { id: "cb-eng-lang-frq-2024-s1", title: "[2024] AP English Language - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-language-set-1.pdf" },
          { id: "cb-eng-lang-frq-2024-s2", title: "[2024] AP English Language - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-language-set-2.pdf" },
          { id: "cb-eng-lang-frq-2023-s1", title: "[2023] AP English Language - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-language-set-1.pdf" },
          { id: "cb-eng-lang-frq-2023-s2", title: "[2023] AP English Language - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-language-set-2.pdf" },
        ],
        videos: [
          { id: "eng-lang-vid-marco", title: "Marco Learning", link: "https://www.youtube.com/@MarcoLearning/search?query=english%20lang" },
          { id: "eng-lang-vid-garden", title: "Garden of English", link: "https://www.youtube.com/@GardenofEnglish/search?query=english%20lang" },
          { id: "eng-lang-vid-coach", title: "Coach Hall Writes", link: "https://www.youtube.com/@CoachHallWrites/videos" },
          { id: "eng-lang-vid-peer", title: "Ms. Peer Editor", link: "https://www.youtube.com/@MsPeerEditor/videos" },
        ],
        websites: [
          { id: "eng-lang-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/b0bbae2f-4764-4ef1-a0e9-1acbb1eb871e/AP-English-Language--Composition-Ultima" },
          { id: "eng-lang-web-quill", title: "Quill Official AP Writing Practice", link: "https://www.quill.org/ap" },
          { id: "eng-lang-web-teacher", title: "Teacher Recommended Resources", link: "https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/classroom-resources/teacher-recommended-resources" },
          { id: "eng-lang-web-synthesis", title: "Synthesis Help", link: "https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/classroom-resources/preparing-synthesis-question" },
          { id: "eng-lang-web-reddit", title: "r/APLang", link: "https://www.reddit.com/r/APLang/" },
          { id: "eng-lang-web-tips", title: "General Tips", link: "https://www.reddit.com/r/APStudents/comments/14z0v5a/tips_for_ap_english_language_and_composition/" },
        ],
      },
      {
        id: "ap-english-lit",
        name: "AP English Literature and Composition",
        books: [
          { id: "eng-lit-barrons-2026", title: "[2026] AP English Literature and Composition - Barron's Premium", link: "https://drive.google.com/file/d/1Td_lTDNOVmy7oi24W0NhtSAjk24c7AgV/view" },
          { id: "eng-lit-princeton-2025", title: "[2025] AP English Literature and Composition - Princeton Review", link: "https://drive.google.com/file/d/1hlrO85NK1orsckLpJA7SjqQnflF2oi75/view" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-eng-lit-frq-2026", title: "[2026] AP English Literature - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-english-literature.pdf" },
          { id: "cb-eng-lit-frq-2025-s1", title: "[2025] AP English Literature - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-literature-set-1.pdf" },
          { id: "cb-eng-lit-frq-2025-s2", title: "[2025] AP English Literature - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-literature-set-2.pdf" },
          { id: "cb-eng-lit-frq-2024-s1", title: "[2024] AP English Literature - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-lit-set-1.pdf" },
          { id: "cb-eng-lit-frq-2024-s2", title: "[2024] AP English Literature - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-lit-set-2.pdf" },
          { id: "cb-eng-lit-frq-2023-s1", title: "[2023] AP English Literature - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-lit-set-1.pdf" },
          { id: "cb-eng-lit-frq-2023-s2", title: "[2023] AP English Literature - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-lit-set-2.pdf" },
        ],
        videos: [
          { id: "eng-lit-vid-marco", title: "Marco Learning", link: "https://www.youtube.com/@MarcoLearning/search?query=english%20lit" },
          { id: "eng-lit-vid-garden", title: "Garden of English", link: "https://www.youtube.com/@GardenofEnglish/search?query=english%20lit" },
          { id: "eng-lit-vid-nerd", title: "English Nerd", link: "https://www.youtube.com/@englishnerd5580/videos" },
          { id: "eng-lit-vid-mcq", title: "Marco's MCQ Hacks", link: "https://www.youtube.com/watch?v=PdfouQqHZG8&ab_channel=MarcoLearning" },
        ],
        websites: [
          { id: "eng-lit-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/8f8e01c4-ea37-4693-856b-b0bd9cf4a902/AP-English-Literature-and-Composition-Ul" },
          { id: "eng-lit-web-quill", title: "Quill Official AP Writing Practice", link: "https://www.quill.org/ap" },
          { id: "eng-lit-web-teacher", title: "Teacher Recommended Resources", link: "https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition/classroom-resources/teacher-recommended-resources" },
          { id: "eng-lit-web-tips", title: "General Tips", link: "https://www.reddit.com/r/APStudents/comments/vtvvvp/how_to_prepare_for_ap_lit-exam-and-get-an-a_in/" },
          { id: "eng-lit-web-tips2", title: "More Tips", link: "https://www.reddit.com/r/APStudents/comments/u2yozv/ap_english_lit_last_minute_tips/" },
        ],
      },
    ],
  },
  {
    label: "History & Social Sciences",
    courses: [
      {
        id: "ap-european-history",
        name: "AP European History",
        books: [
          { id: "euro-hist-barrons-2025", title: "[2026] AP European History - Barron's Premium", link: "https://drive.google.com/file/d/1USqHFlrXDlaCJjI0XMg8jygjTpVAOOc_/view?usp=sharing" },
          { id: "euro-hist-princeton-25th", title: "[2026] AP European History - Princeton Review", link: "https://drive.google.com/file/d/1I1wFUY9qqcPQEw56VaMycHdBg_mn0orM/view?usp=sharing" },
        ],
        notes: [
          { id: "euro-note-leq-u2", title: "[2025] AP European History - LEQ Prep Unit 2", link: "https://drive.google.com/file/d/1AuB9uumRpCGF9buBaoh1BUmVC_3GCAz8/view" },
          { id: "euro-note-leq-u3", title: "[2025] AP European History - LEQ Prep Unit 3", link: "https://drive.google.com/file/d/1VZinhACT2e_tZgmd4_l_tsh46AHFOglW/view" },
          { id: "euro-note-dates", title: "[2025] AP European History - Key Dates", link: "https://drive.google.com/file/d/16WywBrD-KJVbikhK9350hsKaVh60qzNE/view" },
          { id: "euro-note-review", title: "[2025] AP European History - Detailed Review Packet", link: "https://drive.google.com/file/d/1pdNDAKG7KGN_Mx5qmOe9mgkjadz7cf3X/view" },
        ],
        collegeboard: [
          { id: "cb-euro-frq-2026", title: "[2026] AP European History - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-european-history.pdf" },
          { id: "cb-euro-frq-2025-s1", title: "[2025] AP European History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-european-history-set-1.pdf" },
          { id: "cb-euro-frq-2025-s2", title: "[2025] AP European History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-european-history-set-2.pdf" },
          { id: "cb-euro-frq-2024-s1", title: "[2024] AP European History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-european-history-set-1.pdf" },
          { id: "cb-euro-frq-2024-s2", title: "[2024] AP European History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-european-history-set-2.pdf" },
          { id: "cb-euro-frq-2023-s1", title: "[2023] AP European History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-european-history-set-1.pdf" },
          { id: "cb-euro-frq-2023-s2", title: "[2023] AP European History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-european-history-set-2.pdf" },
        ],
        videos: [
          { id: "euro-vid-heimler", title: "Heimler's History", link: "https://www.youtube.com/@heimlershistory/search?query=ap%20euro" },
          { id: "euro-vid-marco", title: "Marco Learning", link: "https://www.youtube.com/playlist?list=PLCEja84uspXtEbazPc-D46CtFKOurJBY-" },
          { id: "euro-vid-antisocial", title: "Anti-Social Studies", link: "https://www.youtube.com/@AntiSocialStudies/search?query=ap%20euro" },
        ],
        websites: [
          { id: "euro-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/c301c06c-a9f3-4ec5-9031-1255c2979927/AP-European-History-Ultimate-Guide" },
          { id: "euro-web-richey", title: "Tom Richey", link: "https://www.tomrichey.net/" },
          { id: "euro-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-euro" },
          { id: "euro-web-marco", title: "Marco Learning", link: "https://marcolearning.com/apeuro/" },
          { id: "euro-web-podcast", title: "Euro Simplified Podcast", link: "https://www.lyndeurozone.com/" },
          { id: "euro-web-notes", title: "Course Notes", link: "https://www.reddit.com/r/APStudents/comments/1clsyhs/full_course_review_notes_for_apush_ap_euro/" },
        ],
      },
      {
        id: "ap-us-history",
        name: "AP United States History",
        books: [
          { id: "us-hist-princeton-25th", title: "[2026] AP U.S. History - Princeton Review", link: "https://drive.google.com/file/d/1jqdHUPHGe5bFvOkpf8RfiFL0L3tvvEHl/view?usp=sharing" },
          { id: "us-hist-amsco-4th", title: "[2026] AP U.S. History - AMSCO", link: "https://drive.google.com/file/d/1_fLuPh4JEDTLgw84v8qZMSMiXW7sjuA3/view?usp=sharing" },
          { id: "us-hist-barrons-2026", title: "[2026] AP U.S. History - Barron's Premium", link: "https://drive.google.com/file/d/1ILFJ_WYgupo4P5kzdd91XT_AO6Z0MJ_C/view?usp=sharing" },
        ],
        notes: [
          { id: "apush-note-review", title: "[2026] AP U.S. History - Detailed Review Packet", link: "https://drive.google.com/file/d/1dszDc-gJxSIARnNLOdYyqNztUpuuHalr/view" },
          { id: "apush-note-u2", title: "[2026] AP U.S. History - Unit 2 Notes", link: "https://drive.google.com/file/d/1t3YF65c4T64P5PcouYRm8lD3YY2L91DW/view" },
          { id: "apush-note-u2-3-cram", title: "[2026] AP U.S. History - Unit 2-3 Cram", link: "https://drive.google.com/file/d/1EZ2KSjz6y6HrCFD2Z24d4QiR8zQm3Ogu/view" },
          { id: "apush-note-u1", title: "[2026] AP U.S. History - Unit 1 Notes", link: "https://drive.google.com/file/d/1DtzPKB7di024hKAVDMQO-gf4WhrMMoK6/view" },
          { id: "apush-note-u6-leq", title: "[2026] AP U.S. History - Unit 6 LEQ Brainstorm", link: "https://drive.google.com/file/d/1uUFXzwOPgddJ5WDGK2c0iVAJtlf98d8H/view" },
        ],
        collegeboard: [
          { id: "cb-apush-frq-2026", title: "[2026] AP U.S. History - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-us-history.pdf" },
          { id: "cb-apush-frq-2025-s1", title: "[2025] AP U.S. History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-history-set-1.pdf" },
          { id: "cb-apush-frq-2025-s2", title: "[2025] AP U.S. History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-history-set-2.pdf" },
          { id: "cb-apush-frq-2024-s1", title: "[2024] AP U.S. History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-history-set-1.pdf" },
          { id: "cb-apush-frq-2024-s2", title: "[2024] AP U.S. History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-history-set-2.pdf" },
          { id: "cb-apush-frq-2023-s1", title: "[2023] AP U.S. History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-history-set-1.pdf" },
          { id: "cb-apush-frq-2023-s2", title: "[2023] AP U.S. History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-history-set-2.pdf" },
        ],
        videos: [
          { id: "apush-vid-heimler", title: "Heimler's History", link: "https://www.youtube.com/@heimlershistory/search?query=apush" },
          { id: "apush-vid-norris", title: "Adam Norris", link: "https://www.youtube.com/@AdamNorrisAPUSH/videos" },
        ],
        websites: [
          { id: "apush-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/humanities/ap-us-history" },
          { id: "apush-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/1ef50511-6e3c-4e40-804e-4f907b0b5a67/AP-US-History-Ultimate-Study-Guide" },
          { id: "apush-web-richey", title: "Tom Richey", link: "https://www.tomrichey.net/" },
          { id: "apush-web-marco", title: "Marco Learning", link: "https://marcolearning.com/students/ap-study-guides/" },
          { id: "apush-web-notes", title: "Course Notes", link: "https://www.reddit.com/r/APStudents/comments/1clsyhs/full_course_review_notes_for_apush_ap_euro/" },
          { id: "apush-web-resources", title: "List of Resources", link: "https://www.reddit.com/r/APUSH/comments/bgg7pj/giant_list_of_apush_study_resources/" },
        ],
      },
      {
        id: "ap-world-history",
        name: "AP World History: Modern",
        books: [
          { id: "world-hist-princeton-25th", title: "[2026] AP World History - Princeton Review", link: "https://drive.google.com/file/d/16FT2Yoey2JnSf5_ZKIu8KwkQgUuMq0ej/view?usp=sharing" },
          { id: "world-hist-barrons-2025", title: "[2026] AP World History - Barron's Premium", link: "https://drive.google.com/file/d/1To1VysdMp-7967iog9YCjJS8ZhAmjiuw/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-world-frq-2026", title: "[2026] AP World History: Modern - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-world-history-modern.pdf" },
          { id: "cb-world-frq-2025-s1", title: "[2025] AP World History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-world-history-modern-set-1.pdf" },
          { id: "cb-world-frq-2025-s2", title: "[2025] AP World History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-world-history-modern-set-2.pdf" },
          { id: "cb-world-frq-2024-s1", title: "[2024] AP World History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-world-history-set-1.pdf" },
          { id: "cb-world-frq-2024-s2", title: "[2024] AP World History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-world-history-set-2.pdf" },
          { id: "cb-world-frq-2023-s1", title: "[2023] AP World History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-world-history-modern-set-1.pdf" },
          { id: "cb-world-frq-2023-s2", title: "[2023] AP World History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-world-history-modern-set-2.pdf" },
        ],
        videos: [
          { id: "world-vid-heimler", title: "Heimler's History", link: "https://www.youtube.com/@heimlershistory/search?query=ap%20world" },
          { id: "world-vid-gorges", title: "Stephanie Gorges", link: "https://www.youtube.com/@StephanieGorges/search?query=world" },
          { id: "world-vid-antisocial", title: "Anti-Social Studies", link: "https://www.youtube.com/@AntiSocialStudies/search?query=world" },
        ],
        websites: [
          { id: "world-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/humanities/world-history-project-ap" },
          { id: "world-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/2d02dd1c-e85c-45a2-a939-c0a395bbdf48/AP-World-History---Ultimate-Guide" },
          { id: "world-web-richey", title: "Tom Richey", link: "https://www.tomrichey.net/" },
          { id: "world-web-marco", title: "Marco Learning", link: "https://marcolearning.com/students/ap-study-guides/" },
          { id: "world-web-guide", title: "Study & Exam Guide", link: "https://www.reddit.com/r/APStudents/comments/pqes1o/a_full_ap_world_history_study_and_exam_guide/" },
          { id: "world-web-freeman", title: "Freeman-Pedia", link: "https://www.freeman-pedia.com/apworldmodern" },
        ],
      },
      {
        id: "ap-economics",
        name: "AP Economics",
        books: [
          { id: "econ-barrons-2024", title: "[2025] AP Economics Micro & Macro - Barron's Premium", link: "https://drive.google.com/file/d/1a5Hbg9nIJN_dTvCG9egd6r2-Iww-4Wr6/view?usp=sharing" },
          { id: "econ-princeton-2020", title: "[2021] AP Economics Micro & Macro - Princeton Review", link: "https://drive.google.com/file/d/1u8yiPVwessaI_jbcnk-mNOB30Pca6qNE/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-macro-frq-2026", title: "[2026] AP Macroeconomics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-macroeconomics.pdf" },
          { id: "cb-macro-frq-2025-s1", title: "[2025] AP Macroeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-macroeconomics-set-1.pdf" },
          { id: "cb-macro-frq-2025-s2", title: "[2025] AP Macroeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-macroeconomics-set-2.pdf" },
          { id: "cb-macro-frq-2024-s1", title: "[2024] AP Macroeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-macroeconomics-set-1.pdf" },
          { id: "cb-macro-frq-2024-s2", title: "[2024] AP Macroeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-macroeconomics-set-2.pdf" },
          { id: "cb-macro-frq-2023-s1", title: "[2023] AP Macroeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-macroeconomics-set-1.pdf" },
          { id: "cb-macro-frq-2023-s2", title: "[2023] AP Macroeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-macroeconomics-set-2.pdf" },
          { id: "cb-micro-frq-2026", title: "[2026] AP Microeconomics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-microeconomics.pdf" },
          { id: "cb-micro-frq-2025-s1", title: "[2025] AP Microeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-microeconomics-set-1.pdf" },
          { id: "cb-micro-frq-2025-s2", title: "[2025] AP Microeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-microeconomics-set-2.pdf" },
          { id: "cb-micro-frq-2024-s1", title: "[2024] AP Microeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-microeconomics-set-1.pdf" },
          { id: "cb-micro-frq-2024-s2", title: "[2024] AP Microeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-microeconomics-set-2.pdf" },
          { id: "cb-micro-frq-2023-s1", title: "[2023] AP Microeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-microeconomics-set-1.pdf" },
          { id: "cb-micro-frq-2023-s2", title: "[2023] AP Microeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-microeconomics-set-2.pdf" },
        ],
        videos: [
          { id: "econ-vid-clifford-micro", title: "Jacob Clifford (Micro)", link: "https://www.youtube.com/@JacobAClifford/search?query=micro" },
          { id: "econ-vid-reviewecon-vids", title: "ReviewEcon", link: "https://www.youtube.com/@ReviewEcon/playlists" },
          { id: "econ-vid-clifford-macro", title: "Jacob Clifford (Macro)", link: "https://www.youtube.com/@JacobAClifford/search?query=macro" },
          { id: "econ-vid-cb-macro", title: "CollegeBoard (Macro)", link: "https://www.youtube.com/playlist?list=PLoGgviqq4846HpniS9auPk8siwRF5LoPB" },
        ],
        websites: [
          { id: "econ-web-khan-micro", title: "Khan Academy (Micro)", link: "https://www.khanacademy.org/economics-finance-domain/ap-microeconomics" },
          { id: "econ-web-khan-macro", title: "Khan Academy (Macro)", link: "https://www.khanacademy.org/economics-finance-domain/ap-macroeconomics" },
          { id: "econ-web-reviewecon", title: "ReviewEcon", link: "https://www.reviewecon.com/" },
          { id: "econ-web-knowt-micro", title: "Knowt Ultimate Guide (Micro)", link: "https://knowt.com/note/3db2dac7-25c5-42f3-bee9-815e5ba8e696/AP-Microeconomics-Ultimate-Guide" },
          { id: "econ-web-knowt-macro", title: "Knowt Ultimate Guide (Macro)", link: "https://knowt.com/note/1f4783f2-edad-41a3-8581-4af3870f69a7/AP-Macroeconomics-Ultimate-Guide" },
        ],
      },
      {
        id: "ap-psychology",
        name: "AP Psychology",
        books: [
          { id: "psych-5steps-2024", title: "[2024] AP Psychology - 5 Steps to a 5", link: "https://drive.google.com/file/d/1I3SGyfOsYHRhACQytfPZnjux7ayhGiaG/view?usp=sharing" },
          { id: "psych-princeton-25th", title: "[2026] AP Psychology - Princeton Review", link: "https://drive.google.com/file/d/1zKKxHg1bawi-4BUrnGU-pNUQM1RN6jQ7/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-psych-frq-2026", title: "[2026] AP Psychology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-psychology.pdf" },
          { id: "cb-psych-frq-2025-s1", title: "[2025] AP Psychology - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-psychology-set-1.pdf" },
          { id: "cb-psych-frq-2025-s2", title: "[2025] AP Psychology - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-psychology-set-2.pdf" },
          { id: "cb-psych-frq-2024-s1", title: "[2024] AP Psychology - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-psychology-set-1.pdf" },
          { id: "cb-psych-frq-2024-s2", title: "[2024] AP Psychology - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-psychology-set-2.pdf" },
          { id: "cb-psych-frq-2023-s1", title: "[2023] AP Psychology - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-psychology-set-1.pdf" },
          { id: "cb-psych-frq-2023-s2", title: "[2023] AP Psychology - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-psychology-set-2.pdf" },
        ],
        videos: [
          { id: "psych-vid-sinn", title: "Mr. Sinn", link: "https://www.youtube.com/@MrSinn/search?query=ap%20psychology" },
          { id: "psych-vid-rice", title: "Mandy Rice", link: "https://www.youtube.com/@TheSustainableTeacher/search?query=psychology" },
        ],
        websites: [
          { id: "psych-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/df47cd35-5adc-4547-9452-03e38a0fed12/AP-Psychology-Ultimate-Guide" },
          { id: "psych-web-myers", title: "Myers Psychology Resources", link: "https://www.macmillanlearning.com/studentresources/highschool/hsbridgepage/myersap3e.html" },
          { id: "psych-web-recall", title: "AP Active Recall", link: "https://www.apactiverecall.com/ap-psych" },
        ],
      },
      {
        id: "ap-us-gov",
        name: "AP United States Government and Politics",
        books: [
          { id: "us-gov-5steps-2024", title: "[2024] AP U.S. Government & Politics - 5 Steps to a 5", link: "https://drive.google.com/file/d/1VyO7elLaGUKeiFpPyR9NDjEPp6DWeMMG/view?usp=sharing" },
          { id: "us-gov-princeton-25th", title: "[2026] AP U.S. Government & Politics - Princeton Review", link: "https://drive.google.com/file/d/1JM3QvjmYo5WHVNC8yI8CJ6bXNunKQfxi/view?usp=sharing" },
        ],
        notes: [
          { id: "usgov-note-study", title: "[2024] AP U.S. Government & Politics - Detailed Study Guide", link: "https://drive.google.com/file/d/18yXEx2vO_HP0VCtRhg_mePpzjzHMtyVe/view" },
        ],
        collegeboard: [
          { id: "cb-usgov-frq-2026", title: "[2026] AP U.S. Government & Politics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-us-gov-pol.pdf" },
          { id: "cb-usgov-frq-2025-s1", title: "[2025] AP U.S. Government & Politics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-gov-pol-set-1.pdf" },
          { id: "cb-usgov-frq-2025-s2", title: "[2025] AP U.S. Government & Politics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-gov-pol-set-2.pdf" },
          { id: "cb-usgov-frq-2024-s1", title: "[2024] AP U.S. Government & Politics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-gov-pol-set-1.pdf" },
          { id: "cb-usgov-frq-2024-s2", title: "[2024] AP U.S. Government & Politics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-gov-pol-set-2.pdf" },
          { id: "cb-usgov-frq-2023-s1", title: "[2023] AP U.S. Government & Politics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-gov-pol-set-1.pdf" },
          { id: "cb-usgov-frq-2023-s2", title: "[2023] AP U.S. Government & Politics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-gov-pol-set-2.pdf" },
        ],
        videos: [
          { id: "usgov-vid-heimler", title: "Heimler's History", link: "https://www.youtube.com/@heimlershistory/search?query=ap%20gov" },
          { id: "usgov-vid-carey", title: "Carey LaManna", link: "https://www.youtube.com/@CareyLaManna" },
          { id: "usgov-vid-frq", title: "FRQ Review", link: "https://www.youtube.com/playlist?list=PLEHRHjICEfDXwqpQ-XgswFaDecZ0u3fdP" },
        ],
        websites: [
          { id: "usgov-web-khan", title: "Khan Academy", link: "https://www.khanacademy.org/humanities/ap-us-government-and-politics" },
          { id: "usgov-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/b11b2173-a75e-4bff-94fc-b9c232559cce/The-Ultimate-Guide-to-AP-United-States-G" },
          { id: "usgov-web-richey", title: "Tom Richey", link: "https://www.tomrichey.net/" },
          { id: "usgov-web-marco", title: "Marco Learning", link: "https://marcolearning.com/students/ap-study-guides/" },
          { id: "usgov-web-flashcards", title: "Knowt Flashcards", link: "https://knowt.com/flashcards/3c7abaea-1959-4a7c-823d-4d26320ed50b" },
          { id: "usgov-web-cases", title: "Court Cases", link: "https://apsubjects.weebly.com/uploads/2/0/5/3/20538716/keycourtcases.pdf" },
          { id: "usgov-web-cases2", title: "Court Cases 2", link: "https://knowt.com/blog/15-supreme-court-cases-you-have-to-know-for-the-ap-government-exam" },
          { id: "usgov-web-recall", title: "AP Active Recall", link: "https://www.apactiverecall.com/ap-gov" },
        ],
      },
    ],
  },
  {
    label: "World Languages & Culture",
    courses: [
      {
        id: "ap-chinese",
        name: "AP Chinese Language and Culture",
        books: [
          { id: "chinese-barrons-2008", title: "[2008] AP Chinese Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1ypZHh9mILyRHAhioq0uy0xElILPeXdPb/view" },
          { id: "chinese-barrons-2014", title: "[2014] AP Chinese Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1s7NghZzzmo7SVYNaMnGq7tMiX0rUsQe3/view" },
          { id: "chinese-5steps-2018", title: "[2018] AP Chinese Language and Culture - 5 Steps to a 5", link: "https://drive.google.com/file/d/12eTReKP9ARvVYylpzcyM22UQAGkm8yOm/view" },
          { id: "chinese-barrons-2020", title: "[2020] AP Chinese Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1CUDpuhc1fiF6W7EfMBQCxDuLLUDHwE4M/view" },
          { id: "chinese-barrons-2023", title: "[2023] AP Chinese Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1UULnBQxZ0aImw_0HhtZOV3bU4-Lq3Elf/view" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-chinese-frq-2026", title: "[2026] AP Chinese Language - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-chinese-language.pdf" },
          { id: "cb-chinese-frq-2025", title: "[2025] AP Chinese - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-chinese-language.pdf" },
          { id: "cb-chinese-frq-2024", title: "[2024] AP Chinese - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-chinese-language.pdf" },
          { id: "cb-chinese-frq-2023", title: "[2023] AP Chinese - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-chinese-language.pdf" },
        ],
        videos: [
          { id: "chinese-vid-faculty", title: "Faculty Lectures", link: "https://www.youtube.com/playlist?list=PLoGgviqq4847leIHROLA05RFVZXs290ud" },
          { id: "chinese-vid-jingle", title: "Jingle Chinese", link: "https://www.youtube.com/c/JingleChinese" },
          { id: "chinese-vid-speaking", title: "Speaking Practice", link: "https://www.youtube.com/playlist?list=PL4xQxHTHTxAdYF3sB9JucG8bLWZRDggBu" },
          { id: "chinese-vid-cultural", title: "Cultural Presentation", link: "https://www.youtube.com/playlist?list=PLxNwYQfk1paAvsXkIabcuLKu6Rs8M8jsS" },
        ],
        websites: [
          { id: "chinese-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/02fe9eae-70e1-4025-a915-e7fbbb722b98/AP-Chinese-Ultimate-Guide" },
          { id: "chinese-web-flashcards", title: "Flashcards", link: "https://quizlet.com/class/18683708/materials" },
          { id: "chinese-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-chinese" },
          { id: "chinese-web-reddit", title: "r/ChineseLanguage", link: "https://www.reddit.com/r/ChineseLanguage/" },
        ],
      },
      {
        id: "ap-french",
        name: "AP French Language and Culture",
        books: [
          { id: "french-barrons-2023", title: "[2023] AP French Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1K1IHiL5SaXvD1wQL6rbg2Jw1w0bJKUkq/view" },
          { id: "french-5steps-2020", title: "[2020] AP French Language and Culture - 5 Steps to a 5", link: "https://drive.google.com/file/d/1zmsp6c4oK1rRgLY5QLjK9LGwkZa17MsW/view?usp=sharing" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-french-frq-2026", title: "[2026] AP French Language - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-french-language.pdf" },
          { id: "cb-french-frq-2025", title: "[2025] AP French - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-french-language.pdf" },
          { id: "cb-french-frq-2024", title: "[2024] AP French - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-french-language.pdf" },
          { id: "cb-french-frq-2023", title: "[2023] AP French - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-french-language.pdf" },
        ],
        videos: [
          { id: "french-vid-extra", title: "Extra", link: "https://www.youtube.com/playlist?list=PLc7z_FoE4tpB7RZTqo4byIU0lvWrCo2ip" },
          { id: "french-vid-faculty", title: "Faculty Lectures", link: "https://www.youtube.com/playlist?list=PLoGgviqq4847irhH0wjgh2vWSDqbEsl9L" },
        ],
        websites: [
          { id: "french-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/2833618b-abd7-4f6a-80cf-6d1a1b6919ab/The-Ultimate-Guide-for-The-AP-French-Lan" },
          { id: "french-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-french" },
          { id: "french-web-albert", title: "Albert.io", link: "https://www.albert.io/blog/category/test-prep/advanced-placement/ap-french-language/" },
          { id: "french-web-reddit", title: "r/French", link: "https://www.reddit.com/r/French/" },
        ],
      },
      {
        id: "ap-spanish",
        name: "AP Spanish Language and Culture",
        books: [
          { id: "spanish-barrons-2025", title: "[2025] AP Spanish Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1MVDsPFj8YD_jSoYPihKbbR0xQIfqL-RP/view" },
          { id: "spanish-barrons-2022", title: "[2022] AP Spanish Language and Culture - Barron's Premium", link: "https://drive.google.com/file/d/1lUrREChNsJT04TsvlX5Yo1M7WuWPr2IC/view" },
        ],
        notes: [],
        collegeboard: [
          { id: "cb-spanish-frq-2026", title: "[2026] AP Spanish Language - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-spanish-language.pdf" },
          { id: "cb-spanish-frq-2025", title: "[2025] AP Spanish - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-spanish-language.pdf" },
          { id: "cb-spanish-frq-2024", title: "[2024] AP Spanish - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-spanish-language.pdf" },
          { id: "cb-spanish-frq-2023", title: "[2023] AP Spanish - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-spanish-language.pdf" },
        ],
        videos: [
          { id: "spanish-vid-faculty", title: "Faculty Lectures", link: "https://www.youtube.com/playlist?list=PLoGgviqq4847YqtaAWkCjOJ97a1d0bhF2" },
          { id: "spanish-vid-marco", title: "Marco Learning", link: "https://www.youtube.com/playlist?list=PLCEja84uspXslPFUjfY5fp7Hw62HmUbay" },
          { id: "spanish-vid-hola", title: "Hola Spanish", link: "https://www.youtube.com/holaspanish" },
          { id: "spanish-vid-convo", title: "Conversation Practice", link: "https://www.youtube.com/playlist?list=PLF7pYNOtuBgWKDVYN_dCls45qqGa2UTBL" },
        ],
        websites: [
          { id: "spanish-web-knowt", title: "Knowt Ultimate Guide", link: "https://knowt.com/note/ce787801-50d9-4dbd-a95b-f35e6fdb2a24/Ultimate-Guide-AP-Spanish-Language-and-C" },
          { id: "spanish-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-spanish-lang" },
          { id: "spanish-web-reddit", title: "r/Spanish", link: "https://www.reddit.com/r/Spanish/" },
        ],
      },
      {
        id: "ap-latin",
        name: "AP Latin",
        books: [
          { id: "latin-vergil-2008", title: "[2008] AP Latin - Vergil Exam", link: "https://drive.google.com/file/d/1TGyTiYDBOFzJcsP4jOqx3IYimgIXbgEa/view" },
        ],
        notes: [
          { id: "latin-note-vocab-1", title: "[2025] AP Latin - Master Vocabulary List Part 1", link: "https://drive.google.com/file/d/1D5AQqiLKyDzOmp1eKuBamvulSuvfLlIQ/view" },
          { id: "latin-note-virgil", title: "[2025] AP Latin - Virgil", link: "https://drive.google.com/file/d/1OJbdoNNtENJRgvO2WCXLAIFIvDny94Bc/view" },
          { id: "latin-note-passages", title: "[2025] AP Latin - Project Passages", link: "https://drive.google.com/file/d/1pCLH47f_JsxZ113cNfDxxebmwvHi05WU/view" },
          { id: "latin-note-pliny", title: "[2025] AP Latin - Pliny", link: "https://drive.google.com/file/d/1PDQ8O9pRPzSKbvKaiSDTwq1ysc418a--/view" },
        ],
        collegeboard: [
          { id: "cb-latin-frq-2026", title: "[2026] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-latin.pdf" },
          { id: "cb-latin-frq-2025", title: "[2025] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-latin.pdf" },
          { id: "cb-latin-frq-2024", title: "[2024] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-latin.pdf" },
          { id: "cb-latin-frq-2023", title: "[2023] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-latin.pdf" },
        ],
        videos: [
          { id: "latin-vid-extra", title: "Extra", link: "https://www.youtube.com/playlist?list=PLc7z_FoE4tpBpfUX-BuXLOyCT6KzVppPM" },
          { id: "latin-vid-faculty", title: "Faculty Lectures", link: "https://www.youtube.com/playlist?list=PLoGgviqq4845juHutqq04yew7sEc-ONVo" },
          { id: "latin-vid-dwpco", title: "Dwpcoofficial (old)", link: "https://www.youtube.com/playlist?list=PLGlG3j5usdNfrzwoXvfCaAUrVkRuhP8pM" },
          { id: "latin-vid-easylatin", title: "EasyLatin", link: "https://www.youtube.com/@EasyLatin" },
        ],
        websites: [
          { id: "latin-web-knowt", title: "Knowt Guides", link: "https://knowt.com/exams/AP/view/AP-Latin-flashcards" },
          { id: "latin-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-latin" },
          { id: "latin-web-hackett", title: "Hackett Manual", link: "https://hackettpublishing.com/a-hackett-test-prep-manual-for-use-with-apr-latin-4426" },
          { id: "latin-web-reddit", title: "r/Latin", link: "https://www.reddit.com/r/latin/" },
        ],
      },
    ],
  },
  {
    label: "Capstone Program",
    courses: [
      {
        id: "ap-seminar", name: "AP Seminar", books: [], notes: [],
        collegeboard: [
          { id: "cb-seminar-frq-2026", title: "[2026] AP Seminar - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap26-frq-seminar.pdf" },
          { id: "cb-seminar-frq-2025-s1", title: "[2025] AP Seminar - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-seminar-set-1.pdf" },
          { id: "cb-seminar-frq-2025-s2", title: "[2025] AP Seminar - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-seminar-set-2.pdf" },
          { id: "cb-seminar-frq-2024-s1", title: "[2024] AP Seminar - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-seminar-set-1.pdf" },
          { id: "cb-seminar-frq-2024-s2", title: "[2024] AP Seminar - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-seminar-set-2.pdf" },
          { id: "cb-seminar-frq-2023-s1", title: "[2023] AP Seminar - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-seminar-set-1.pdf" },
          { id: "cb-seminar-frq-2023-s2", title: "[2023] AP Seminar - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-seminar-set-2.pdf" },
        ],
        videos: [
          { id: "seminar-vid-uncs", title: "Uncs Nikhil & Manil", link: "https://www.youtube.com/watch?v=n5oPlSlMXVI&ab_channel=UncsNikhil%26Manil" },
          { id: "seminar-vid-tmps", title: "Example TMPs", link: "https://www.youtube.com/playlist?list=PLASStV3zZxE4srcmBr-K7IDclhTS8Zx3K" },
        ],
        websites: [
          { id: "seminar-web-reddit", title: "r/APSeminar", link: "https://www.reddit.com/r/APSeminar/" },
          { id: "seminar-web-ced", title: "Course & Exam Description", link: "https://apcentral.collegeboard.org/media/pdf/ap-seminar-course-and-exam-description.pdf" },
          { id: "seminar-web-teacher", title: "Teacher Recommended Resources", link: "https://apcentral.collegeboard.org/courses/ap-seminar/classroom-resources/teacher-recommended-resources" },
          { id: "seminar-web-knowt", title: "Knowt Guides", link: "https://knowt.com/exams/AP/AP-Seminar" },
        ],
      },
      {
        id: "ap-research", name: "AP Research", books: [], notes: [],
        collegeboard: [
          { id: "cb-research-sg-2025", title: "[2025] AP Research - Scoring Guidelines", link: "https://apcentral.collegeboard.org/media/pdf/ap25-sg-research-academic-paper.pdf" },
          { id: "cb-research-sg-2024", title: "[2024] AP Research - Scoring Guidelines", link: "https://apcentral.collegeboard.org/media/pdf/ap24-sg-research-academic-paper.pdf" },
          { id: "cb-research-sg-2023", title: "[2023] AP Research - Scoring Guidelines", link: "https://apcentral.collegeboard.org/media/pdf/ap23-sg-research-academic-paper.pdf" },
        ],
        videos: [
          { id: "research-vid-presentations", title: "Example Presentations", link: "https://www.youtube.com/playlist?list=PLGx-cR21knC057h1lp4GOpUminnUt3ulg" },
        ],
        websites: [
          { id: "research-web-papers", title: "Sample Academic Papers", link: "https://apcentral.collegeboard.org/courses/ap-research/exam/past-exam-questions" },
          { id: "research-web-reddit", title: "r/APResearch", link: "https://www.reddit.com/r/APResearch/" },
          { id: "research-web-ced", title: "Course & Exam Description", link: "https://apcentral.collegeboard.org/media/pdf/ap-research-course-and-exam-description.pdf" },
          { id: "research-web-topic", title: "Finding Topic", link: "https://www.reddit.com/r/APStudents/comments/o5ozbn/anybody_have_any_tips_for_finding_a_topic_for_ap/" },
          { id: "research-web-teacher", title: "Teacher Recommended Resources", link: "https://apcentral.collegeboard.org/courses/ap-research/classroom-resources/teacher-recommended-resources" },
          { id: "research-web-fiveable", title: "Fiveable", link: "https://library.fiveable.me/ap-research" },
        ],
      },
    ],
  },
  {
    label: "Capstones",
    courses: [
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        showCollegeBoard: false,
        books: [],
        notes: [],
        collegeboard: [],
        videos: [],
        websites: [],
      },
    ],
  },
];

export const courses: Course[] = courseGroups.flatMap((g) => g.courses);
