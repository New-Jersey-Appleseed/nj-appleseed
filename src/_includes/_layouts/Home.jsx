export default function Home({ title, organizations, comp }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4TSH7HP4C8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-4TSH7HP4C8");
          `,
          }}
        />
      </head>
      <body>
        <comp.Header />
        <comp.MainHero />
        <comp.OurPurpose />
        <comp.ExploreManual />
        <comp.AboutUs organizations={organizations} />
        <comp.Footer />
      </body>
    </html>
  );
}
