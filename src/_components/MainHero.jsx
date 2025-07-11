export default function MainHero() {
  return (
    <header
      className="w-full h-80 md:h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/main_hero.png)" }}
    >
      <div
        className="flex flex-col justify-center items-start h-full w-full px-4 py-10 md:px-10 text-white max-w-lg md:max-w-3xl
        bg-gradient-to-r from-footer-grey from-1% via-black/30 via-87% to-transparent"
      >
        <p className="relative z-10 md:text-5xl text-3xl md:leading-snug font-black max-w-full align-middle">
          Empowering individuals to address the challenge of{" "}
          <span className="inline-block relative align-baseline">
            Medical Debt.
            <img
              src="/assets/vector/underline.svg"
              alt="Underline"
              className="w-full max-w-[200px] sm:max-w-[320px] block -mt-1"
              style={{ marginLeft: 0 }}
            />
          </span>
        </p>
        <a
          href="/manual"
          className="relative z-10 bg-primary hover:bg-secondary transition-colors duration-300 text-md md:text-xl font-bold py-3 px-10 mt-6 rounded-md"
        >
          Read The Manual
        </a>
      </div>
    </header>
  );
}
