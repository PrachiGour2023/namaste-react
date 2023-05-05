import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Restaurant from "./components/restaurant/Restaurant";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Restaurant />
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
