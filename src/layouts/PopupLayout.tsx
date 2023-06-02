import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC, useState } from "react";
import { styled } from "@mui/material";

interface PopupLayoutProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
}

const PopupLayout: FC<PopupLayoutProps> = ({ open, setOpen, children }) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <StyledBox>{children}</StyledBox>
      </Modal>
    </div>
  );
};

const StyledBox = styled(Box)({
  borderRadius: "30px",
  width: "435px",
  height: "471px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  outline: "none",
});

export default PopupLayout;
