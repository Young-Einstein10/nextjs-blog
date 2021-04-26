import React, { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./checkbox.module.scss";

interface ICheckboxProps extends HTMLAttributes<HTMLInputElement> {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export const Checkbox: FC<ICheckboxProps> = ({ children, inputProps }) => {
  const { checkbox } = styles;

  return (
    <label className={`${checkbox} d-flex align-items-center my-3 text-capitalize`}>
      <input type="checkbox" className="mr-3" {...inputProps} />
      {children}
    </label>
  );
};
