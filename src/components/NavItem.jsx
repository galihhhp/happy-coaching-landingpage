import { useNavigate } from "react-router-dom";

const NavItem = () => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Extra Salespage",
      path: "/extra-salespage",
    },
  ];

  return (
    <>
      {menu.map((item, index) => {
        return (
          <button
            onClick={() => navigate(item.path)}
            key={index}
            className="px-2 py-1 hover:text-tosca">
            {item.name}
          </button>
        );
      })}
    </>
  );
};

export default NavItem;
