import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://nieuweavonturenvan.nl",
    title: "Nieuwe Avonturen Van",
    description: "Mijn persoonlijk website",
    author: "Robin Gruyters",
    profile: "https://github.com/cmdrrobin",
    ogImage: "banner.jpg",
    lang: "nl",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      // url: "https://github.com/cmdrrobin/cmdrrobin.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/cmdrrobin" },
    { name: "x",        url: "https://x.com/rgruyters" },
    { name: "linkedin", url: "https://www.linkedin.com/in/rgruyters/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
