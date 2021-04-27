import React, { FC, HTMLAttributes } from "react";
import { Button as BootstrapBtn } from "react-bootstrap";
import styles from "./button.module.scss";

export const Button: FC<{
  className?: string;
  [key: string]: any;
}> = ({ children, className, ...rest }) => {
  const { customBtn } = styles;

  return (
    <BootstrapBtn variant="light" className={`${customBtn} ${className}`} {...rest}>
      {children}
    </BootstrapBtn>
  );
};
