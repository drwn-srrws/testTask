import { Typography, styled } from "@mui/material";
import { FC } from "react";
import CustomChip from "../StyledChip/StyledChip";

interface ChipsBlockProps {
  title: string;
  chips: Array<{ name: string; color: string }>;
}

const ChipsBlock: FC<ChipsBlockProps> = ({ title, chips }) => {
  return (
    <>
      <Title variant="body1" color="textColor.main">
        {title}
      </Title>
      {chips.map((item) => (
        <CustomChip $color={item.color} label={item.name}></CustomChip>
      ))}
    </>
  );
};

export default ChipsBlock;

const Title = styled(Typography)({
  margin: "24px 0px 10px 0px",
  fontSize: "14px",
  lineHeight: "17px",
});
