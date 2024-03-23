import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Oops!!</h2>
      <Link to="/" className="btn">
        Go back
      </Link>
    </div>
  );
};

export default Error;
