import { useState } from "react";

import "./cardWrapper.css";

type CardProps = {
  children: string | JSX.Element | JSX.Element[];
  onClosed?: () => void;
};

const CardWrapper = ({ children, onClosed }: CardProps) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  if (isClosed) return null;

  function onClose() {
    setIsClosed(true);
    if (onClosed) onClosed();
  }

  return (
    <div className="card">
      <span className="card-close" onClick={onClose}>
        X
      </span>
      {children}
    </div>
  );
};

export default CardWrapper;
