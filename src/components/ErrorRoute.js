import { useRouteError } from "react-router-dom";
const ErrorRoute = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOPS!</h1>
      <h2>Some thing went wrong</h2>
      {error.data}
    </div>
  );
};
export default ErrorRoute;
