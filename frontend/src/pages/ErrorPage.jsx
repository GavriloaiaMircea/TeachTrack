import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const handleGoBack = () => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <Container className="text-center mt-5">
      <div className="error-container">
        <h1 className="display-1 text-danger">Oops!</h1>
        <p className="lead">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </p>
        <p className="text-muted">
          {error?.statusText || error?.message || "Something went wrong."}
        </p>
        <Button variant="primary" onClick={handleGoBack}>
          Go Back Home
        </Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
