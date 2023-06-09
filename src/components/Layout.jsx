const Layout = ({ children }) => {
  const menu = ["Home", "Services", "About Us", "Extra Salespage"];

  return (
    <div className="min-h-screen">
      <nav className="bg-white h-20 sticky top-0 flex justify-center">
        <div className="container flex justify-between">
          <div className="flex gap-2 w-56 items-center">
            <img src="/happy-coaching.svg" alt="" />
            <h1 className="font-bold text-lg">Happy Coaching</h1>
          </div>
          <div className="flex gap-2 items-center text-sm">
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
    </div>
  );
};

export default Layout;
