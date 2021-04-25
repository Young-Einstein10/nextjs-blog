import React from "react";
import styles from "./loader.module.scss";

export const Loader = () => {
  const { loader, spinner } = styles;

  return (
    <div className={loader}>
      <div className={spinner}></div>
    </div>
  );
};
