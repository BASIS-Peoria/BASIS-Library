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

export type ResourceType = "book" | "note" | "collegeboard";

export interface Course {
  id: string;
  name: string;
  books: Book[];
  notes: Note[];
  collegeboard: CollegeBoardMaterial[];
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
          { id: "cb-phys1-frq-2025", title: "[2025] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-1.pdf" },
          { id: "cb-phys1-frq-2024", title: "[2024] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-1.pdf" },
          { id: "cb-phys1-frq-2023", title: "[2023] AP Physics 1 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-1.pdf" },
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
          { id: "cb-phys2-frq-2025", title: "[2025] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-2.pdf" },
          { id: "cb-phys2-frq-2024", title: "[2024] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-2.pdf" },
          { id: "cb-phys2-frq-2023", title: "[2023] AP Physics 2 - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-2.pdf" },
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
          { id: "cb-physc-em-frq-2025", title: "[2025] AP Physics C: E&M - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-c-em.pdf" },
          { id: "cb-physc-em-frq-2024-s1", title: "[2024] AP Physics C: E&M - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-em-set-1.pdf" },
          { id: "cb-physc-em-frq-2024-s2", title: "[2024] AP Physics C: E&M - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-em-set-2.pdf" },
          { id: "cb-physc-em-frq-2023-s1", title: "[2023] AP Physics C: E&M - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-em-set-1.pdf" },
          { id: "cb-physc-em-frq-2023-s2", title: "[2023] AP Physics C: E&M - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-em-set-2.pdf" },
          { id: "cb-physc-mech-frq-2025", title: "[2025] AP Physics C: Mechanics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-physics-c-mech.pdf" },
          { id: "cb-physc-mech-frq-2024-s1", title: "[2024] AP Physics C: Mechanics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-mech-set-1.pdf" },
          { id: "cb-physc-mech-frq-2024-s2", title: "[2024] AP Physics C: Mechanics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-physics-c-mech-set-2.pdf" },
          { id: "cb-physc-mech-frq-2023-s1", title: "[2023] AP Physics C: Mechanics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-mechanics-set-1.pdf" },
          { id: "cb-physc-mech-frq-2023-s2", title: "[2023] AP Physics C: Mechanics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-physics-c-mechanics-set-2.pdf" },
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
          { id: "cb-bio-frq-2025", title: "[2025] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-biology.pdf" },
          { id: "cb-bio-frq-2024", title: "[2024] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-biology.pdf" },
          { id: "cb-bio-frq-2023", title: "[2023] AP Biology - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-biology.pdf" },
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
          { id: "cb-chem-frq-2025", title: "[2025] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-chemistry.pdf" },
          { id: "cb-chem-frq-2024", title: "[2024] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-chemistry.pdf" },
          { id: "cb-chem-frq-2023", title: "[2023] AP Chemistry - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-chemistry.pdf" },
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
          { id: "cb-envs-frq-2025-s1", title: "[2025] AP Environmental Science - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-environmental-science-set-1.pdf" },
          { id: "cb-envs-frq-2025-s2", title: "[2025] AP Environmental Science - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-environmental-science-set-2.pdf" },
          { id: "cb-envs-frq-2024-s1", title: "[2024] AP Environmental Science - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-environmental-science-set-1.pdf" },
          { id: "cb-envs-frq-2024-s2", title: "[2024] AP Environmental Science - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-environmental-science-set-2.pdf" },
          { id: "cb-envs-frq-2023-s1", title: "[2023] AP Environmental Science - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-environmental-science-set-1.pdf" },
          { id: "cb-envs-frq-2023-s2", title: "[2023] AP Environmental Science - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-environmental-science-set-2.pdf" },
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
          { id: "cb-calc-ab-frq-2025", title: "[2025] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-ab.pdf" },
          { id: "cb-calc-ab-frq-2024", title: "[2024] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-ab.pdf" },
          { id: "cb-calc-ab-frq-2023", title: "[2023] AP Calculus AB - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-ab.pdf" },
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
          { id: "cb-calc-bc-frq-2025", title: "[2025] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-calculus-bc.pdf" },
          { id: "cb-calc-bc-frq-2024", title: "[2024] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-calculus-bc.pdf" },
          { id: "cb-calc-bc-frq-2023", title: "[2023] AP Calculus BC - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-calculus-bc.pdf" },
        ],
      },
      {
        id: "ap-precalculus", name: "AP Precalculus", books: [
          { id: "precalc-book-barrons-2025", title: "[2025] AP Precalculus - Barron's Premium", link: "https://drive.google.com/file/d/1IddZdHtclENqNtOc5yFWhSbyZlXnHDQL/view" },
          { id: "precalc-book-barrons-2024", title: "[2024] AP Precalculus - Barron's Premium", link: "https://drive.google.com/file/d/1Spc_7zoiU6QGzN0USVn5TtXwcvwhwmbr/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-precalc-frq-2025", title: "[2025] AP Precalculus - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-precalculus.pdf" },
          { id: "cb-precalc-frq-2024", title: "[2024] AP Precalculus - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-precalculus.pdf" },
        ],
      },
      {
        id: "ap-statistics", name: "AP Statistics", books: [
          { id: "stats-book-practice-2015", title: "[2015] AP Statistics - The Practice of Statistics", link: "https://drive.google.com/file/d/1eIM7mdhrn-2T0x6FTzMFJV0UQf8pnZgj/view" },
          { id: "stats-book-5steps-2023", title: "[2023] AP Statistics - 5 Steps to a 5", link: "https://drive.google.com/file/d/1N4R07ROrsNHiQqKqAdcUHgUss2CX7kft/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-stats-frq-2025", title: "[2025] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-statistics.pdf" },
          { id: "cb-stats-frq-2024", title: "[2024] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-statistics.pdf" },
          { id: "cb-stats-frq-2023", title: "[2023] AP Statistics - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-statistics.pdf" },
        ],
      },
      {
        id: "ap-computer-science-a", name: "AP Computer Science A", books: [
          { id: "csa-book-barrons-2024", title: "[2024] AP Computer Science A - Barron's Premium", link: "https://drive.google.com/file/d/1OqX9yLF0b5-fth4RHdfsUlGBQuViUgZr/view" },
          { id: "csa-book-5steps-2024", title: "[2024] AP Computer Science A - 5 Steps to a 5", link: "https://drive.google.com/file/d/1lbQE0jXdYMGYscNdhXEopwbLz5kZQT1y/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-csa-frq-2025", title: "[2025] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-a.pdf" },
          { id: "cb-csa-frq-2024", title: "[2024] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-comp-sci-a.pdf" },
          { id: "cb-csa-frq-2023", title: "[2023] AP Computer Science A - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-comp-sci-a.pdf" },
        ],
      },
      {
        id: "ap-computer-science-principles", name: "AP Computer Science Principles", books: [
          { id: "csp-book-5steps-2023", title: "[2023] AP Computer Science Principles - 5 Steps to a 5", link: "https://drive.google.com/file/d/1-B8_N8OFKkzZbnC00TXSIvup1VnTaG7c/view" },
          { id: "csp-book-barrons-2025", title: "[2025] AP Computer Science Principles - Barron's Premium", link: "https://drive.google.com/file/d/1i0fUJKBPCLHlLgIztkNTZpQh2w05_HvE/view" },
        ], notes: [],
        collegeboard: [
          { id: "cb-csp-frq-2025-s1", title: "[2025] AP Computer Science Principles - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-principles-set-1.pdf" },
          { id: "cb-csp-frq-2025-s2", title: "[2025] AP Computer Science Principles - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-computer-science-principles-set-2.pdf" },
          { id: "cb-csp-frq-2024-s1", title: "[2024] AP Computer Science Principles - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-1.pdf" },
          { id: "cb-csp-frq-2024-s2", title: "[2024] AP Computer Science Principles - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-csp-set-2.pdf" },
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
          { id: "cb-eng-lang-frq-2025-s1", title: "[2025] AP English Language - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-language-set-1.pdf" },
          { id: "cb-eng-lang-frq-2025-s2", title: "[2025] AP English Language - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-language-set-2.pdf" },
          { id: "cb-eng-lang-frq-2024-s1", title: "[2024] AP English Language - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-language-set-1.pdf" },
          { id: "cb-eng-lang-frq-2024-s2", title: "[2024] AP English Language - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-language-set-2.pdf" },
          { id: "cb-eng-lang-frq-2023-s1", title: "[2023] AP English Language - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-language-set-1.pdf" },
          { id: "cb-eng-lang-frq-2023-s2", title: "[2023] AP English Language - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-language-set-2.pdf" },
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
          { id: "cb-eng-lit-frq-2025-s1", title: "[2025] AP English Literature - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-literature-set-1.pdf" },
          { id: "cb-eng-lit-frq-2025-s2", title: "[2025] AP English Literature - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-english-literature-set-2.pdf" },
          { id: "cb-eng-lit-frq-2024-s1", title: "[2024] AP English Literature - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-lit-set-1.pdf" },
          { id: "cb-eng-lit-frq-2024-s2", title: "[2024] AP English Literature - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-lit-set-2.pdf" },
          { id: "cb-eng-lit-frq-2023-s1", title: "[2023] AP English Literature - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-lit-set-1.pdf" },
          { id: "cb-eng-lit-frq-2023-s2", title: "[2023] AP English Literature - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-english-lit-set-2.pdf" },
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
          { id: "cb-euro-frq-2025-s1", title: "[2025] AP European History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-european-history-set-1.pdf" },
          { id: "cb-euro-frq-2025-s2", title: "[2025] AP European History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-european-history-set-2.pdf" },
          { id: "cb-euro-frq-2024-s1", title: "[2024] AP European History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-european-history-set-1.pdf" },
          { id: "cb-euro-frq-2024-s2", title: "[2024] AP European History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-european-history-set-2.pdf" },
          { id: "cb-euro-frq-2023-s1", title: "[2023] AP European History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-european-history-set-1.pdf" },
          { id: "cb-euro-frq-2023-s2", title: "[2023] AP European History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-european-history-set-2.pdf" },
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
          { id: "cb-apush-frq-2025-s1", title: "[2025] AP U.S. History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-history-set-1.pdf" },
          { id: "cb-apush-frq-2025-s2", title: "[2025] AP U.S. History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-history-set-2.pdf" },
          { id: "cb-apush-frq-2024-s1", title: "[2024] AP U.S. History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-history-set-1.pdf" },
          { id: "cb-apush-frq-2024-s2", title: "[2024] AP U.S. History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-history-set-2.pdf" },
          { id: "cb-apush-frq-2023-s1", title: "[2023] AP U.S. History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-history-set-1.pdf" },
          { id: "cb-apush-frq-2023-s2", title: "[2023] AP U.S. History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-history-set-2.pdf" },
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
          { id: "cb-world-frq-2025-s1", title: "[2025] AP World History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-world-history-modern-set-1.pdf" },
          { id: "cb-world-frq-2025-s2", title: "[2025] AP World History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-world-history-modern-set-2.pdf" },
          { id: "cb-world-frq-2024-s1", title: "[2024] AP World History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-world-history-set-1.pdf" },
          { id: "cb-world-frq-2024-s2", title: "[2024] AP World History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-world-history-set-2.pdf" },
          { id: "cb-world-frq-2023-s1", title: "[2023] AP World History - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-world-history-modern-set-1.pdf" },
          { id: "cb-world-frq-2023-s2", title: "[2023] AP World History - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-world-history-modern-set-2.pdf" },
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
          { id: "cb-macro-frq-2025-s1", title: "[2025] AP Macroeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-macroeconomics-set-1.pdf" },
          { id: "cb-macro-frq-2025-s2", title: "[2025] AP Macroeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-macroeconomics-set-2.pdf" },
          { id: "cb-macro-frq-2024-s1", title: "[2024] AP Macroeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-macroeconomics-set-1.pdf" },
          { id: "cb-macro-frq-2024-s2", title: "[2024] AP Macroeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-macroeconomics-set-2.pdf" },
          { id: "cb-macro-frq-2023-s1", title: "[2023] AP Macroeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-macroeconomics-set-1.pdf" },
          { id: "cb-macro-frq-2023-s2", title: "[2023] AP Macroeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-macroeconomics-set-2.pdf" },
          { id: "cb-micro-frq-2025-s1", title: "[2025] AP Microeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-microeconomics-set-1.pdf" },
          { id: "cb-micro-frq-2025-s2", title: "[2025] AP Microeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-microeconomics-set-2.pdf" },
          { id: "cb-micro-frq-2024-s1", title: "[2024] AP Microeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-microeconomics-set-1.pdf" },
          { id: "cb-micro-frq-2024-s2", title: "[2024] AP Microeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-microeconomics-set-2.pdf" },
          { id: "cb-micro-frq-2023-s1", title: "[2023] AP Microeconomics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-microeconomics-set-1.pdf" },
          { id: "cb-micro-frq-2023-s2", title: "[2023] AP Microeconomics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-microeconomics-set-2.pdf" },
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
          { id: "cb-psych-frq-2025-s1", title: "[2025] AP Psychology - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-psychology-set-1.pdf" },
          { id: "cb-psych-frq-2025-s2", title: "[2025] AP Psychology - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-psychology-set-2.pdf" },
          { id: "cb-psych-frq-2024-s1", title: "[2024] AP Psychology - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-psychology-set-1.pdf" },
          { id: "cb-psych-frq-2024-s2", title: "[2024] AP Psychology - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-psychology-set-2.pdf" },
          { id: "cb-psych-frq-2023-s1", title: "[2023] AP Psychology - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-psychology-set-1.pdf" },
          { id: "cb-psych-frq-2023-s2", title: "[2023] AP Psychology - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-psychology-set-2.pdf" },
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
          { id: "cb-usgov-frq-2025-s1", title: "[2025] AP U.S. Government & Politics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-gov-pol-set-1.pdf" },
          { id: "cb-usgov-frq-2025-s2", title: "[2025] AP U.S. Government & Politics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-gov-pol-set-2.pdf" },
          { id: "cb-usgov-frq-2024-s1", title: "[2024] AP U.S. Government & Politics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-gov-pol-set-1.pdf" },
          { id: "cb-usgov-frq-2024-s2", title: "[2024] AP U.S. Government & Politics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-gov-pol-set-2.pdf" },
          { id: "cb-usgov-frq-2023-s1", title: "[2023] AP U.S. Government & Politics - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-gov-pol-set-1.pdf" },
          { id: "cb-usgov-frq-2023-s2", title: "[2023] AP U.S. Government & Politics - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-gov-pol-set-2.pdf" },
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
          { id: "cb-chinese-frq-2025", title: "[2025] AP Chinese - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-chinese-language.pdf" },
          { id: "cb-chinese-frq-2024", title: "[2024] AP Chinese - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-chinese-language.pdf" },
          { id: "cb-chinese-frq-2023", title: "[2023] AP Chinese - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-chinese-language.pdf" },
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
          { id: "cb-french-frq-2025", title: "[2025] AP French - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-french-language.pdf" },
          { id: "cb-french-frq-2024", title: "[2024] AP French - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-french-language.pdf" },
          { id: "cb-french-frq-2023", title: "[2023] AP French - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-french-language.pdf" },
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
          { id: "cb-spanish-frq-2025", title: "[2025] AP Spanish - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-spanish-language.pdf" },
          { id: "cb-spanish-frq-2024", title: "[2024] AP Spanish - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-spanish-language.pdf" },
          { id: "cb-spanish-frq-2023", title: "[2023] AP Spanish - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-spanish-language.pdf" },
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
          { id: "cb-latin-frq-2025", title: "[2025] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-latin.pdf" },
          { id: "cb-latin-frq-2024", title: "[2024] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-latin.pdf" },
          { id: "cb-latin-frq-2023", title: "[2023] AP Latin - FRQ", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-latin.pdf" },
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
          { id: "cb-seminar-frq-2025-s1", title: "[2025] AP Seminar - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-seminar-set-1.pdf" },
          { id: "cb-seminar-frq-2025-s2", title: "[2025] AP Seminar - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap25-frq-seminar-set-2.pdf" },
          { id: "cb-seminar-frq-2024-s1", title: "[2024] AP Seminar - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-seminar-set-1.pdf" },
          { id: "cb-seminar-frq-2024-s2", title: "[2024] AP Seminar - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap24-frq-seminar-set-2.pdf" },
          { id: "cb-seminar-frq-2023-s1", title: "[2023] AP Seminar - FRQ Set 1", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-seminar-set-1.pdf" },
          { id: "cb-seminar-frq-2023-s2", title: "[2023] AP Seminar - FRQ Set 2", link: "https://apcentral.collegeboard.org/media/pdf/ap23-frq-seminar-set-2.pdf" },
        ],
      },
      {
        id: "ap-research", name: "AP Research", books: [], notes: [],
        collegeboard: [
          { id: "cb-research-sg-2025", title: "[2025] AP Research - Scoring Guidelines", link: "https://apcentral.collegeboard.org/media/pdf/ap25-sg-research-academic-paper.pdf" },
          { id: "cb-research-sg-2024", title: "[2024] AP Research - Scoring Guidelines", link: "https://apcentral.collegeboard.org/media/pdf/ap24-sg-research-academic-paper.pdf" },
          { id: "cb-research-sg-2023", title: "[2023] AP Research - Scoring Guidelines", link: "https://apcentral.collegeboard.org/media/pdf/ap23-sg-research-academic-paper.pdf" },
        ],
      },
    ],
  },
];

// Flat list for route lookups
export const courses: Course[] = courseGroups.flatMap((g) => g.courses);
