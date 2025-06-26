export default function OurPurpose({ purpose }) {
  return (
    <section className="flex flex-col md:flex-row md:justify-between px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="flex flex-col max-w-xl">
        <h1 className="text-4xl font-bold text-green">OUR PURPOSE</h1>
        <article className="py-[24px] text-black text-xl">{purpose}</article>
      </div>

      <div className="flex items-center justify-center min-h-64 px-4">
        <img
          src="/assets/ourpurpose.png"
          alt="Our Purpose Image"
          className="h-48 w-48 sm:h-64 sm:w-auto object-contain"
        />
      </div>
    </section>
  );
}
