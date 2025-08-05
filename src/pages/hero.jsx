export default function Hero() {
  return (
    <div
      className="container flex min-h-screen w-full items-center justify-center"
      id="hero"
    >
      <div className="dark-text space-y-8 text-center">
        <div className="space-y-2 text-center">
          <h1 className="font-titan-one text-3xl md:text-4xl lg:text-5xl">
            Hey! 👋
          </h1>
          <h1 className="font-titan-one text-5xl md:text-6xl lg:text-7xl">
            I AM <span className="dark-title">ARDI SAPUTRA</span>
          </h1>
          <p className="font-nanum-pen-script text-2xl md:text-3xl lg:text-4xl">
            Full Stack Engineer
          </p>
        </div>
        <p className="font-jakarta-sans text-sm md:text-base lg:text-lg">
          Dedicated Full Stack Engineer with strong practical experience in
          Front-End and Back-End development, complemented by a sharp attention
          to UI/UX design.
        </p>
        <button className="hover:transform-y font-jakarta-sans dark-button rounded-xl px-6 py-2 text-xs font-semibold md:px-8 md:py-3 md:text-base lg:px-10 lg:py-4 lg:text-lg">
          PROJECTS
        </button>
      </div>
    </div>
  );
}
