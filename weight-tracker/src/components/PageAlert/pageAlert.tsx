import "./pageAlert.css";

const ErrorAlert = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <span className="page-alert">
      <span className="heading">Error</span>
      <span className="message">{message}</span>
    </span>
  );
};

export { ErrorAlert };
