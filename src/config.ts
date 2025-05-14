export const SITE = {
  website: "https://iqbal167.github.io", // replace this with your deployed domain
  author: "Muhammad Iqbal Ali",
  profile: "https://iqbal167.github.io",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Muhammad Iqbal Ali",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/iqbal167/iqbal167.github.io/edit/main/src/content/posts/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
