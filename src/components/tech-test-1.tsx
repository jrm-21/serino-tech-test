import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom/client";

interface props {
  children: ReactNode;
  headerText: string;
}

const MyComponent = ({ children, headerText }: props) => {
  const [clicks, clickState] = useState(0);
  return (
    <div
      className="my-component"
      onMouseDown={clicks === 0 ? () => clickState(clicks + 1) : () => null}
    >
      <h2>My Component {clicks}</h2>
      <h3>{headerText}</h3>
      {children}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyComponent
      headerText={"Hello World!"}
      children={<p>Sample Children</p>}
    />
  </React.StrictMode>
);
