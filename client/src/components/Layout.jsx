import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import i18n from "../config/i18n_config";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import useThemeStore from "../zustand/useTheme";

const Layout = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className={`page_container ${theme}`}>
      <Header changeLanguage={changeLanguage} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
