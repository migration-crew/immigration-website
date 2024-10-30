import { create } from "zustand";

type ImmigrationProgram = {
  title: string;
  description: string;
  image: string;
  details: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Immigration = {
  immigrationPrograms: ImmigrationProgram[];
  faqs: FAQ[];
  expandedProgram: string | null;
  expandedFAQ: number | null;
  setExpandedProgram: (title: string | null) => void;
  setExpandedFAQ: (index: number | null) => void;
  toggleProgram: (title: string) => void;
  toggleFAQ: (index: number) => void;
};

export const useImmigration = create<Immigration>((set) => ({
  immigrationPrograms: [
    {
      title: "Express Entry",
      description:
        "Canada's fastest and most popular way to gain permanent residency...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "Express Entry is Canada's fastest and most popular way to gain permanent residency. It is an immigration system designed to streamline applications, with all required documents typically processed within six months or less. By submitting a profile, candidates are ranked based on their qualifications and invited to apply for permanent residency.",
    },
    {
      title: "Provincial Nominee Programs - PNP",
      description:
        "For Canadian provinces and territories to nominate individuals...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Provincial Nominee Program (PNP) allows Canadian provinces and territories to nominate individuals for permanent residency based on their specific economic needs. Each region has its own unique streams targeting students, business people, skilled workers, and semi-skilled workers. By aligning your skills and experience with a province's needs, you can receive a nomination that boosts your chances of obtaining permanent residency.",
    },
    {
      title: "Family Sponsorship",
      description:
        "For Canadian citizens and permanent residents to reunite with their loved ones...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Family Sponsorship Program allows Canadian citizens and permanent residents to reunite with their loved ones by sponsoring them for permanent residency. This program includes options for sponsoring spouses, common-law partners, dependent children, parents, and grandparents. By supporting family reunification, the program helps build stronger, more connected communities in Canada.",
    },
    {
      title: "Caregiver Programs",
      description:
        "For workers who provide support to our children, seniors, and others requiring care...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "Canada values the important work done by caregivers. These are the workers who provide support to our children, seniors, and others requiring care. For this reason, Canada manages a range of programs to assist caregivers with finding work and obtaining permanent residency through programs such as the Interim Pathway for Caregivers, Home Child Care Provider Pilot and Home Support Worker Pilot.",
    },
    {
      title: "Start-Up Visa Program",
      description:
        "For innovative entrepreneurs to establish their businesses in Canada...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Start-Up Visa Program offers an exciting opportunity for innovative entrepreneurs to establish their businesses in Canada and gain permanent residency. This program is designed for individuals with a viable business idea that has the support of a designated organization, such as a venture capital fund, angel investor group, or business incubator. By fostering innovation and entrepreneurship, the Start-Up Visa Program helps drive economic growth and create jobs in Canada.",
    },
    {
      title: "Self-Employed Program",
      description:
        "For individuals with relevant experience in cultural or athletic activities...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Self-Employed Persons Program provides a pathway for individuals with relevant experience in cultural or athletic activities to gain permanent residency in Canada. This program is ideal for those who have demonstrated their ability to be self-employed in fields such as music, writing, visual arts, or professional athletics. By contributing their unique talents, self-employed individuals help enrich Canada’s cultural and athletic landscape.",
    },
    {
      title: "Humanitarian and Compassionate - H&C",
      description:
        "For individuals who would not normally be eligible for permanent residence in Canada...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Humanitarian and Compassionate (H&C) considerations provide a unique pathway for individuals facing exceptional circumstances to obtain permanent residency in Canada. This program is designed to assist those who may not qualify through other immigration streams but have compelling reasons to stay in Canada, such as strong family ties, established roots in the community, or adverse conditions in their home country.",
    },
    {
      title: "Atlantic Immigration Program -AIP",
      description:
        "For skilled foreign workers and international graduates to build a new life...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Atlantic Immigration Program (AIP) offers a great opportunity for skilled foreign workers and international graduates to build a new life in one of Canada's vibrant Atlantic provinces: New Brunswick, Nova Scotia, Newfoundland and Labrador, and Prince Edward Island. This program makes it easier for newcomers to settle and contribute to the growth of these welcoming communities.",
    },
    {
      title: "Northern Immigration Program - RNIP",
      description:
        "For skilled workers to settle in smaller communities across Canada...",
      image: "/placeholder.svg?height=200&width=300",
      details:
        "The Rural and Northern Immigration Pilot Program (RNIP) offers a unique opportunity for skilled workers to settle in smaller communities across Canada. This program aims to support the economic development of rural and northern regions by attracting newcomers who can fill local labor market gaps. Participating communities, including those in Ontario, Western Canada, and the three territories, provide a welcoming environment for newcomers looking to build a new life.",
    },
  ],
  faqs: [
    {
      question: "What is a Canada Immigration Visa?",
      answer:
        "A Canada Immigration (Permanent Resident) Visa is an official document issued by the Canadian government that allows a foreign national to live and work permanently in Canada. It grants the holder most of the rights and responsibilities of Canadian citizens, except for the right to vote in elections.",
    },
    {
      question:
        "What is the difference between a Work Permit and Canada Immigration?",
      answer:
        "A Work Permit is a temporary document that allows a foreign national to work in Canada for a specific period and often for a specific employer. Canada Immigration, on the other hand, refers to the process of becoming a permanent resident, which allows you to live and work anywhere in Canada indefinitely.",
    },
    {
      question:
        "Can I apply for Permanent Residence status and Temporary status at the same time?",
      answer:
        "Yes, you can apply for both permanent residence and temporary status simultaneously. This is often referred to as 'dual intent'. For example, you can apply for a work permit or study permit while your permanent residence application is in process.",
    },
    {
      question: "How long does the immigration process take?",
      answer:
        "The processing time for immigration applications can vary greatly depending on the program you're applying under, the completeness of your application, and current processing volumes. It can range from a few months to several years. You can check current processing times on the official Government of Canada website.",
    },
    {
      question: "Do I need a job offer to immigrate to Canada?",
      answer:
        "It depends on the immigration program you're applying under. Some programs, like certain streams of Express Entry, don't require a job offer. Others, like many Provincial Nominee Programs, do require a valid job offer. Having a job offer can often increase your chances of being selected, even in programs where it's not mandatory.",
    },
    {
      question:
        "What is the minimum language requirement for Canadian immigration?",
      answer:
        "The minimum language requirement varies depending on the immigration program. For most skilled worker programs, you need to demonstrate language proficiency equivalent to Canadian Language Benchmark (CLB) 7, which is considered 'adequate intermediate proficiency'. This can be demonstrated through approved language tests like IELTS or CELPIP for English, or TEF for French.",
    },
  ],
  expandedProgram: null,
  expandedFAQ: null,
  setExpandedProgram: (title) => set({ expandedProgram: title }),
  setExpandedFAQ: (index) => set({ expandedFAQ: index }),
  toggleProgram: (title) =>
    set((state) => ({
      expandedProgram: state.expandedProgram === title ? null : title,
    })),
  toggleFAQ: (index) =>
    set((state) => ({
      expandedFAQ: state.expandedFAQ === index ? null : index,
    })),
}));
