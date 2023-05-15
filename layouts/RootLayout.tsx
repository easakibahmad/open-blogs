import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default RootLayout;
