import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();

  // Check if the current location has a state with an error
  const error = location.state && location.state.error;

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <span>
        <i>{error ? error.message : "Unknown error"}</i>
      </span>
    </div>
  );
}
