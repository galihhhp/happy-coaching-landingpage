import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center text-dark bg-red-400 h-screen">
      <h1>Home</h1>
      <button
        onClick={() => navigate("/login")}
        className="bg-fadded-red text-light rounded-lg p-2">
        Login
      </button>
    </div>
  );
};

export default Home;
