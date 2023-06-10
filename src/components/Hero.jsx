const Hero = ({
  title = "Live life at the full potential",
  subtitle = "Proven strategies backed by science for success.",
  description = "I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?",
  children,
  bg = "bg-hero-home",
  titleClass = "",
  containerClass = "",
}) => {
  return (
    <div
      className={`h-[calc(100vh-5rem)] bg-light-yellow px-4 md:px-0 ${containerClass}`}>
      <div className="container h-full flex">
        <div className="flex flex-col justify-center gap-4 h-full w-full md:w-1/2 md:pr-16 lg:pr-32">
          <p className="text-neutral-400 text-sm">{subtitle}</p>
          <h1
            className={`text-[56px] lg:text-[72px] leading-[60px] lg:leading-[80px] text-purple font-extrabold ${titleClass}`}>
            {title}
          </h1>
          <p>{description}</p>
          <button className="bg-tosca rounded-lg text-white p-2">
            Get your free guide now
          </button>
        </div>
        <div className="w-1/2 hidden md:flex py-16 justify-center items-center">
          {/* <img src="/pexels-andrea-piacquadio-3978564 1.png" alt="" /> */}
          <div
            className={`${bg} relative w-full h-full bg-no-repeat bg-contain`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
