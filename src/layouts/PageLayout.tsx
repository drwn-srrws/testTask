import React, { FC } from "react";
import Navigation from "../components/navigation/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default PageLayout;
