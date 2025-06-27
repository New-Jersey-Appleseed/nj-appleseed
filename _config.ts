import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import sitemap from "lume/plugins/sitemap.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume({
  src: "./src",
  dest: "./output",
  server: {
    open: true,
    page404: "./404.html",
  },
  location: new URL("https://endmedicaldebtnj.com"),
  watcher: {
    debounce: 10,
  },
});

site.use(
  favicon({
    input: "assets/favicon.png",
  }),
);

site.use(jsx());
site.use(
  tailwindcss({
    extensions: [".html", ".js", ".njk", ".jsx"],
    options: {
      content: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.jsx"],
      theme: {
        extend: {
          colors: {
            primary: "#AA0000",
            green: "#599144",
            "dark-green": "#367800",
            "text-color": "#333333",
            negative: "#ffffff",
            "background-grey": "#EBEBEB",
            "footer-grey": "#B2B2B2",
          },
        },
      },
      plugins: [typography],
    },
  }),
);
site.use(postcss());
site.ignore("index.html");
site.copy("styles.css");
site.copy("assets");
site.copy("js");
site.use(
  sitemap({
    filename: "sitemap.xml",
    query: "indexable=true",
  }),
);

export default site;
