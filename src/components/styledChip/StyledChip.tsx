import React, { FC } from "react";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/system";

interface StyledChipProps {
  $color: string;
  label: string;
}

const StyledChip = styled(Chip)<StyledChipProps>(({ $color }) => ({
  backgroundColor: $color,
  padding: "7px 0px 8px",
  margin: "0px 5px 0px 0px",
  borderRadius: "5px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#FFFFFF",
}));

const CustomChip: FC<StyledChipProps> = ({ $color, label }) => {
  return <StyledChip $color={$color} label={label} />;
};

export default CustomChip;
