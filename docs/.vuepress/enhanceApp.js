import VueFacebookPixel from "vue-analytics-facebook-pixel";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.beforeEach((to, from, next) => {
    if (to.path === "/") {
      next(siteData.themeConfig.defaultURL);
    } else {
      next();
    }
  });

  const isClient = typeof window !== "undefined";
  if (isClient && siteData.themeConfig.fbPixelID) {
    Vue.use(VueFacebookPixel);
    Vue.analytics.fbq.init(siteData.themeConfig.fbPixelID);
  }
};
