Result.jsx

import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h2>Result Page</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Result;