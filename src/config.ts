export const SITE = {
  website: "https://nieuweavonturenvan.nl", // replace this with your deployed domain
  author: "Robin Gruyters",
  profile: "https://github.com/cmdrrobin",
  desc: "Mijn persoonlijk website",
  title: "Nieuwe Avonturen Van",
  ogImage: "banner.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/cmdrrobin/cmdrrobin.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "nl", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Amsterdam", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
