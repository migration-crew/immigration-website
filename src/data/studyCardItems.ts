import BeforeStudy from "@/public/before-study.png";
import PostGraduationOpportunities from "@/public/post-graduation-opportunities.png";
import StudyBenefits from "@/public/study-benefits.png";
import StudyWorkPermits from "@/public/study-work-permits.png";
import { StudyCardType } from "@/types/studyCardType";

export const studyCardItems: StudyCardType[] = [
  {
    title: "Before study in Canada",
    image: BeforeStudy,
    alt: "Before study in Canada image",
    description:
      "Before choosing a school, make sure it is a Designated Learning Institution (DLI). A DLI is a school approved by a provincial or territorial government to host international students. Attending a DLI is crucial because it ensures you can obtain a valid study permit and, in many cases, may impact your eligibility for a Post-Graduation Work Permit (PGWP). If your goal is immigration, I suggest consulting with an immigration consultant before enrolling to ensure your plan is viable and current.",
  },
  {
    title: "Study and Work Permits",
    image: StudyWorkPermits,
    alt: "Study and Work Permits image",
    description:
      "Many people choose to study in Canada as an entry door to work or immigration. Here at Up Immigration, we do it all. We provide extensive support for your study in Canada, including assistance with study permits and work permits, helping you choose the right institution and program, and providing comprehensive visa and immigration support.",
  },
  {
    title: "Benefits of Studying in Canada",
    image: StudyBenefits,
    alt: "Benefits of Studying in Canada image",
    description:
      "Studying in Canada gives you access to quality education from renowned institutions. You can work while studying and after graduation, experience a multicultural and inclusive environment, and explore potential pathways to permanent residency, enhancing both your career and life prospects.",
  },
  {
    title: "Post Graduation Oportunities",
    image: PostGraduationOpportunities,
    alt: "Post Graduation Oportunities image",
    description:
      "Some courses enable you to explore post-graduation opportunities in Canada, This includes the Post-Graduation Work Permit (PGWP) to gain valuable work experience. Discover various pathways to transition from being a student to becoming a permanent resident, setting the foundation for a successful future in Canada.",
  },
];
