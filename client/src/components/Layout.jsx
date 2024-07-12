import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import i18n from "../config/i18n_config";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <p>{t("test")}</p>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
