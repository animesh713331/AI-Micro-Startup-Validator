import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>AI Micro Startup Validator</h1>
      <p>Validate your startup idea using AI</p>

      <button onClick={() => navigate("/submit")}>
        Validate Idea 🚀
      </button>
    </div>
  );
};

export default Home;