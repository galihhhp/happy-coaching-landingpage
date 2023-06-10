const Layout = ({ children }) => {
  const menu = ["Home", "Services", "About Us", "Extra Salespage"];
  const footerPages = [
    "Home",
    "Services",
    "About Us",
    "Extra Salespage",
    "Free guide",
  ];
  const footerContact = [
    "+123 456 789",
    "hello@happydigital.id",
    "Instagram",
    "LinkedIn",
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-white h-20 sticky top-0 z-50 flex justify-center px-4 md:px-0">
        <div className="container flex justify-between">
          <div className="flex gap-2 w-56 items-center">
            <img src="/happy-coaching.svg" alt="" />
            <h1 className="font-bold text-lg">Happy Coaching</h1>
          </div>
          <div className="hidden lg:flex gap-2 items-center text-sm">
            {menu.map((item, index) => {
              return (
                <button key={index} className="px-2 py-1 hover:text-tosca">
                  {item}
                </button>
              );
            })}
            <button className="bg-tosca rounded-lg text-white p-2">
              Get your free guide now
            </button>
          </div>
        </div>
      </nav>
      {children}
      <footer className="w-full">
        <div className="w-full bg-light-yellow py-4 md:py-10 px-4 md:px-0">
          <div className="container flex md:flex-row flex-col gap-4 w-full justify-between">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="font-bold text-[20px] md:text-[30px] text-purple">
                Get notified when I publish new articles
              </h1>
              <p className="text-[12px] md:text-[20px]">
                Stay up to date with the latest news, announcements, and
                articles.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-neutral-300 lg:w-96 rounded-lg p-2"
              />
              <button className="bg-tosca rounded-lg text-white p-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 py-10 gap-10">
          <div className="flex flex-col gap-8">
            <div className="flex gap-2 w-56 items-center">
              <img src="/happy-coaching.svg" alt="" />
              <h1 className="font-bold text-lg">Happy Coaching</h1>
            </div>
            <p className="text-neutral-300">
              Design amazing digital experiences that create more happy in the
              world
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Pages</h1>
            {footerPages.map((item, index) => {
              return (
                <a
                  key={index}
                  className="text-neutral-400 hover:text-neutral-500"
                  href="">
                  {item}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Contact</h1>
            {footerContact.map((item, index) => {
              return (
                <a
                  key={index}
                  className="text-neutral-400 hover:text-neutral-500"
                  href="">
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
