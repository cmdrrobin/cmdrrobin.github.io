import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "Over",
    archives: "Archief",
    search: "Zoeken",
  },
  post: {
    publishedAt: "Gepubliceerd op",
    updatedAt: "Bijgewerkt",
    sharePostIntro: "Deel dit bericht:",
    sharePostOn: "Deel dit bericht op {{platform}}",
    sharePostViaEmail: "Deel dit bericht via email",
    tagLabel: "Tags",
    backToTop: "Terug naar boven",
    goBack: "Ga terug",
    editPage: "Bericht bijwerken",
    previousPost: "Voorgaande bericht",
    nextPost: "Volgend bericht",
  },
  pagination: {
    prev: "Vorige",
    next: "Volgende",
    page: "Pagina",
  },
  home: {
    socialLinks: "Sociale Links",
    featured: "Uitgelicht",
    recentPosts: "Recente Berichten",
    allPosts: "Alle berichten",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Alle rechten voorbehouden.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Alle artikelen met de tag",

    tagsTitle: "Tags",
    tagsDesc: "Alle tags die in berichten worden gebruikt.",

    postsTitle: "Posts",
    postsDesc: "Alle artikelen die ik heb geplaatst.",

    archivesTitle: "Archives",
    archivesDesc: "Alle artikelen die ik heb gearchiveerd.",

    searchTitle: "Search",
    searchDesc: "Zoek in elk artikel ...",
  },
  a11y: {
    skipToContent: "Ga direct naar de inhoud",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    toggleTheme: "Thema wisselen",
    searchPlaceholder: "Zoek berichten...",
    noResults: "Geen resultaten gevonden",
    goToPreviousPage: "Ga naar de vorige pagina",
    goToNextPage: "Ga naar de volgende pagina",
  },
  notFound: {
    title: "404 Niet Gevonden",
    message: "Pagina Niet Gevonden",
    goHome: "Ga terug naar home",
  },
} satisfies UIStrings;
