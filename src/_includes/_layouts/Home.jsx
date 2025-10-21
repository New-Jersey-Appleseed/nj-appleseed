export default function Home({ title, organizations, purpose, comp }) {
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
        <comp.OurPurpose purpose={purpose} />
        <comp.ExploreManual />
        <comp.AboutUs organizations={organizations} />
        {/* Affiliate link for vot-er */}
        <div className="flex justify-center pb-16">
          <a
            href="https://vote.health/emdnj"
            className="bg-primary hover:bg-secondary transition-colors duration-300 text-white text-md md:text-xl font-bold py-3 px-10 rounded-md"
          >
            Protect Your Care - Register to Vote
          </a>
        </div>
        <comp.Footer />
      </body>
    </html>
  );
}
