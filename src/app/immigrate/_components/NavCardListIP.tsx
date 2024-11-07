import atlanticIP from "@/public/atlanticIP.jpg";
import caregiver from "@/public/caregiver.jpg";
import expressEntry from "@/public/expressEntry.jpg";
import familySP from "@/public/familySP.jpg";
import humanitarian from "@/public/humanitarian.jpg";
import PNP from "@/public/PNP.png";
import RNIP from "@/public/rnip.jpg";
import selfEmployed from "@/public/selfEmployed.jpg";
import startUp from "@/public/startUp.png";
import { StaticImageData } from "next/image";
import { forwardRef } from "react";
import { NavCardItemIP } from "./NavCardItemIP";

interface Props {
  refs: {
    workPermitRef: React.RefObject<HTMLDivElement>;
    openWorkPermitRef: React.RefObject<HTMLDivElement>;
    pgwpRef: React.RefObject<HTMLDivElement>;
    lmiaRef: React.RefObject<HTMLDivElement>;
    sowpRef: React.RefObject<HTMLDivElement>;
  };
}

type navCardItemsType = {
  ref: string;
  id: string;
  title: string;
  alt: string;
  description: string;
  image: StaticImageData;
  buttonLink?: string;
};

const navCardItems: navCardItemsType[] = [
  {
    ref: "expressEntryRef",
    id: "express-entry",
    title: "Express Entry",
    alt: "Express Entry",
    description:
      "Express Entry is Canada's fastest and most popular way to gain permanent residency. It is an immigration system designed to streamline applications, with all required documents typically processed within six months or less. By submitting a profile, candidates are ranked based on their qualifications and invited to apply for permanent residency.",
    image: expressEntry,
    buttonLink: "/immigrate/express-entry",
  },
  {
    ref: "pnpRef",
    id: "pnp",
    title: "Provincial Nominee Programs - PNP",
    alt: "Provincial Nominee Programs - PNP",
    description:
      "The Provincial Nominee Program (PNP) allows Canadian provinces and territories to nominate individuals for permanent residency based on their specific economic needs. Each region has its own unique streams targeting students, business people, skilled workers, and semi-skilled workers. By aligning your skills and experience with a province's needs, you can receive a nomination that boosts your chances of obtaining permanent residency.",
    image: PNP,
    buttonLink: "/immigrate/pnp",
  },
  {
    ref: "familyRef",
    id: "family",
    title: "Family Sponsorship",
    alt: "Family Sponsorship",
    description:
      "The Family Sponsorship Program allows Canadian citizens and permanent residents to reunite with their loved ones by sponsoring them for permanent residency. This program includes options for sponsoring spouses, common-law partners, dependent children, parents, and grandparents. By supporting family reunification, the program helps build stronger, more connected communities in Canada.",
    image: familySP,
    buttonLink: "/immigrate/family",
  },
  {
    ref: "caregiverRef",
    id: "caregiver",
    title: "Caregiver Programs",
    alt: "Caregiver Programs",
    description:
      "Canada values the important work done by caregivers. These are the workers who provide support to our children, seniors, and others requiring care. For this reason, Canada manages a range of programs to assist caregivers with finding work and obtaining permanent residency through programs such as the Interim Pathway for Caregivers, Home Child Care Provider Pilot and Home Support Worker Pilot.",
    image: caregiver,
    buttonLink: "/immigrate/caregiver",
  },
  {
    ref: "start-upRef",
    id: "start-up",
    title: "Start-Up Visa Program",
    alt: "Start-Up Visa Program",
    description:
      "The Start-Up Visa Program offers an exciting opportunity for innovative entrepreneurs to establish their businesses in Canada and gain permanent residency. This program is designed for individuals with a viable business idea that has the support of a designated organization, such as a venture capital fund, angel investor group, or business incubator. By fostering innovation and entrepreneurship, the Start-Up Visa Program helps drive economic growth and create jobs in Canada.",
    image: startUp,
    buttonLink: "/immigrate/start-up",
  },
  {
    ref: "self-employedRef",
    id: "self-employed",
    title: "Self-Employed Program",
    alt: "Self-Employed Program",
    description:
      "The Self-Employed Persons Program provides a pathway for individuals with relevant experience in cultural or athletic activities to gain permanent residency in Canada. This program is ideal for those who have demonstrated their ability to be self-employed in fields such as music, writing, visual arts, or professional athletics. By contributing their unique talents, self-employed individuals help enrich Canada’s cultural and athletic landscape.",
    image: selfEmployed,
    buttonLink: "/immigrate/self-employed",
  },
  {
    ref: "humanitarianRef",
    id: "humanitarian",
    title: "Humanitarian and Compassionate - H&C",
    alt: "Humanitarian and Compassionate - H&C",
    description:
      "The Humanitarian and Compassionate (H&C) considerations provide a unique pathway for individuals facing exceptional circumstances to obtain permanent residency in Canada. This program is designed to assist those who may not qualify through other immigration streams but have compelling reasons to stay in Canada, such as strong family ties, established roots in the community, or adverse conditions in their home country.",
    image: humanitarian,
    buttonLink: "/immigrate/humanitarian",
  },
  {
    ref: "atlanticRef",
    id: "atlantic",
    title: "Atlantic Immigration Program -AIP",
    alt: "Atlantic Immigration Program -AIP",
    description:
      "The Atlantic Immigration Program (AIP) offers a great opportunity for skilled foreign workers and international graduates to build a new life in one of Canada's vibrant Atlantic provinces: New Brunswick, Nova Scotia, Newfoundland and Labrador, and Prince Edward Island. This program makes it easier for newcomers to settle and contribute to the growth of these welcoming communities.",
    image: atlanticIP,
    buttonLink: "/immigrate/atlantic",
  },
  {
    ref: "rnipRef",
    id: "rnip",
    title: "Northern Immigration Program - RNIP",
    alt: "Northern Immigration Program - RNIP",
    description:
      "The Start-Up Visa Program offers an exciting opportunity for innovative entrepreneurs to establish their businesses in Canada and gain permanent residency. This program is designed for individuals with a viable business idea that has the support of a designated organization, such as a venture capital fund, angel investor group, or business incubator. By fostering innovation and entrepreneurship, the Start-Up Visa Program helps drive economic growth and create jobs in Canada.",
    image: RNIP,
    buttonLink: "/immigrate/rnip",
  },
];

export const NavCardListIP = forwardRef<HTMLDivElement, Props>(
  function NavCardListIP({ refs }: Props, ref) {
    return (
      <div
        className="flex flex-col xl:grid xl:grid-cols-3 gap-4 flex-shrink-0"
        ref={ref}
      >
        {navCardItems.map((item, index) => (
          <NavCardItemIP
            key={item.id}
            ref={refs[item.ref as keyof typeof refs]}
            id={item.id}
            title={item.title}
            alt={item.alt}
            description={item.description}
            image={item.image}
            isLast={index === navCardItems.length - 1}
            buttonLink={item.buttonLink}
          />
        ))}
      </div>
    );
  }
);
