import React from "react";

function Layout({ children }) {
  return (
    <div>
      <headers>headers</headers>
      {children}
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
