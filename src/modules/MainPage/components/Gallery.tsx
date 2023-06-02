import { styled } from "@mui/material";
import Button from "../../../components/Button/Button";
const pictures = [
  "/images/Gallery/Rectangle22.png",
  "/images/Gallery/Rectangle23.png",
  "/images/Gallery/Rectangle23.png",
  "/images/Gallery/Rectangle23.png",
  "/images/Gallery/Rectangle26.png",
  "/images/Gallery/Rectangle27.png",
  "/images/Gallery/Rectangle23.png",
  "/images/Gallery/Rectangle23.png",
  "/images/Gallery/Rectangle23.png",
  "/images/Gallery/Rectangle31.png",
];
const Gallery = () => {
  return (
    <OuterWrapper>
      <Container>
        <PicturesWrapper>
          {pictures.map((picture, index) => (
            <StyledImg src={picture} alt="/" key={index} />
          ))}
          <ButtonView color="transparent">View All Photos (33)</ButtonView>
        </PicturesWrapper>
      </Container>
    </OuterWrapper>
  );
};
const OuterWrapper = styled("div")({});

const Container = styled("div")({
  maxWidth: "1170px",
  width: "100%",
  margin: "0 auto",
});
const PicturesWrapper = styled("div")({
  position: "relative",
  maxWidth: "1170px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px 10px",
});
const StyledImg = styled("img")({
  width: "226px",
  height: "226px",
});
const ButtonView = styled(Button)({
  position: "absolute",
  bottom: "20px",
  right: "36px",
  fontSize: "14px",
  lineHeight: "17px",
});

export default Gallery;
