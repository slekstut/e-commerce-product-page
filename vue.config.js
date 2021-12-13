module.exports = {
    publicPath: '/e-commerce-product-page/',
    css: {
        loaderOptions: {
            sass: {
                data: `
            @import "@/assets/styles/_variables.scss";
          `
            }
        }
    },
};