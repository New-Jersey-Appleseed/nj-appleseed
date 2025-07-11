export default function Videos({ title, comp, videos }) {
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
      <body className="bg-gray-100 min-h-screen">
        <comp.Header />
        <comp.GenericHero
          title="Videos"
          description="Watch these helpful videos to learn more about medical debt and how to manage it."
          image={{
            src: "/assets/vector/videos_hero.svg",
            alt: "Videos",
          }}
        />
        <comp.AddVideo videos={videos} />
        <comp.Footer />
      </body>
    </html>
  );
}
