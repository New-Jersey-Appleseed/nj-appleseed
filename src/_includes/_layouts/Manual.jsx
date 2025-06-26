export default function Manual({ title, comp, search }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <script src="/js/scroll.js" />
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
      <body className="bg-gray-100 min-h-screen">
        <comp.Header />
        <comp.ManualHero />
        <comp.ManualSectionDropdown search={search} />
        <comp.Footer />
      </body>
    </html>
  );
}
