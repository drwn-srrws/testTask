import { styled } from "@mui/material/styles";
import { FC } from "react";

import {
  Button as MuiButton,
  ButtonProps as MUIButtonProps,
  Theme,
} from "@mui/material";

export interface CustomButtonProps {
  variant?: "contained" | "text";
  color?: "primary" | "secondary" | "transparent";
}

export type ButtonProps = Omit<MUIButtonProps, "variant" | "color"> &
  CustomButtonProps;

const Button: FC<ButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  ...props
}) => {
  const ButtonStyled = styled((props: MUIButtonProps) => (
    <MuiButton {...props} />
  ))(({ theme }) => ({
    ...getCustomColor(theme)[color],
    ...getCustomVariant(theme)[variant],
    textTransform: "none",
    display: "flex",
    flexDirection: "row",
    padding: "11px 16px 12px",
    gap: "10px",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "19.2px",
  }));

  return (
    <ButtonStyled
      {...props}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      {children}
    </ButtonStyled>
  );
};

const getCustomVariant = (theme: Theme) => ({
  contained: {
    color: "white",
    borderRadius: "50px",
    "&:disabled": {
      opacity: 0.3,
      cursor: "not-allowed !important",
      pointerEvents: "none",
    },
  },

  text: {
    color: theme.palette.textColor.main,
    background: "transparent",

    "&:hover": {
      backgroundColor: "transarent",
    },
  },
});

const getCustomColor = (theme: Theme) => ({
  primary: {
    border: "none",
    backgroundColor: theme.palette.button.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.button.primary.main,
    },
  },
  secondary: {
    border: "none",
    backgroundColor: theme.palette.button.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.button.secondary.main,
    },
  },
  transparent: {
    border: "none",
    backdropFilter: "blur(7.5px)",
    backgroundColor: theme.palette.button.transparent.main,
  },
});

export default Button;
