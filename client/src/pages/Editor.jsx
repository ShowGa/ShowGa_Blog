import React from "react";
import { useTranslation } from "react-i18next";

const Editor = () => {
  const { t } = useTranslation();

  return <div>{t("test1")}</div>;
};

export default Editor;
