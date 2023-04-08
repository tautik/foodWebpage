import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h2>Hello User</h2>
      <h3>
        It seems theres some sort of error {error.status} that is{" "}
        {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
