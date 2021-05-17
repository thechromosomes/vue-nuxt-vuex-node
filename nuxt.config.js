import { CreateLog } from "./server-middleware/globalErrorMiddleware";

export default {
    server: {
        port: 12000, // default: 3000

        // configure local area network
        //host: "0",
    },
    head: {
        title: "Tumi",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Tumi " },
            {
                hid: "og:Tumi",
                property: "og:Tumi",
                content: "Tumi",
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "/icon.png",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        script: [{ src: "https://checkout.razorpay.com/v1/checkout.js" }],
    },

    css: [
        "~/assets/css/bootstrap.min.css",
        "~/assets/css/slick.css",
        "~/assets/css/slick-theme.css",
        "~/assets/css/style.css",
        "~/assets/css/responsive.css",
        "element-ui/lib/theme-chalk/index.css"
    ],

    plugins: [
        { src: "@/plugins/globalErrorHandler" },
        { src: "@plugins/fetchCookies", mode: "client" },
        { src: "@/plugins/tokenAndCms.js" },
        { src: "@/plugins/custom.js", mode: "client" },
        "@/plugins/element-ui",
        "@/plugins/loading-placeHolder",
        "@/plugins/axios",
        "@/plugins/vue-cookies",
        { src: "@plugins/thirdPartyModules", ssr: true },
        { src: "@plugins/toast", mode: "client" },
        { src: "@/plugins/vue-ripple-dir.js", mode: "client" },
        { src: "@/plugins/pagination", mode: "client" },
        { src: "@/plugins/googleMaps", mode: "client" },
    ],

    // Auto import components
    components: true,

    //  Customize the progress bar color
    loading: {
        color: "black",
        height: "5px",
        continuous: true,
    },

    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module'
    ],

    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/pwa",
        // detect device context
        "@nuxtjs/device",
        "@nuxtjs/gtm", [
            "nuxt-fontawesome",
            {
                imports: [{
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: ["fas"],
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: ["fab"],
                    },
                ],
            },
        ],
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    manifest: {
        name: "Tumi",
        lang: "en",
        title: "Steve Madden",
        description: "Steve Madden",
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
        short_name: "SM",
        ogImage: `icon.png`,
        icons: [{
                src: `/icon.png`,
                size: "144x144",
                type: "image/png",
            },
            {
                src: `/icon.png`,
                size: "128x128",
                type: "image/png",
            },
            {
                src: `/icon.png`,
                size: "152x152",
                type: "image/png",
            },
            {
                src: `/icon.png`,
                size: "180x180",
                type: "image/png",
            },
            {
                src: `/icon.png`,
                size: "192x192",
                type: "image/png",
            },
            {
                src: `/icon.png`,
                size: "256x256",
                type: "image/png",
            },
        ],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
        extractCSS: {
          allChunks: true,
        },
    },

    // google tag manger
    gtm: {
        id: "GTM-MTLQ39Z",
        enabled: false,
        debug: false,
        loadScript: false,
    },

    // a server middleware that runs only server site
    serverMiddleware: ["~/server-middleware/globalErrorMiddleware"],

    // error handler hook
    hooks: {
        render: {
            errorMiddleware(app) {
                app.use(async(error, req, res, next) => {
                    if (error) {
                        let finalError = await error;
                        console.log("final error", finalError)
                            // CreateLog.error({
                            //   error: `>>> ${finalError}`,
                            //   metaInformation: req.rawHeaders,
                            //   type: "error middleware",
                            //   from: req.url,
                            // });
                        res.redirect("/404");
                    } else {
                        res.redirect("/404");
                    }
                });
            },
        },
    },
};