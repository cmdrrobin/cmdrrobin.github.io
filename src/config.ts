import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://nieuweavonturenvan.nl",
  author: "Robin Gruyters",
  desc: "Mijn persoonlijk blog site",
  title: "Nieuwe Avonturen Van",
  ogImage: "banner.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "nl", // html lang code. Set this empty and default will be "en"
  langTag: ["nl-NL"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/rgruyters",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linked.in/in/rgruyters",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/rgruyters",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@commandantkeen",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
];
