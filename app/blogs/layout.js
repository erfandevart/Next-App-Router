import React from "react";

export const metadata = {
  title: "erfandevart",
  description: "Generated by create next app",
};

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
