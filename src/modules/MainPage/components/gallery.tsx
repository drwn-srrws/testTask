import CustomSeparator from "./breadCrumbs";
import { Button, Link, styled } from "@mui/material";
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
        <CustomSeparator />
        <PicturesWrapper>
          {pictures.map((picture, index) =>
            index !== pictures.length - 1 ? (
              <StyledImg src={picture} alt="/" key={index} />
            ) : (
              <PictureButtonViewWrapper key={index}>
                <StyledImg src={picture} alt="/" key={index} />
                <ButtonView>View All Photos (33)</ButtonView>
              </PictureButtonViewWrapper>
            )
          )}
        </PicturesWrapper>
      </Container>
    </OuterWrapper>
  );
};
const OuterWrapper = styled("div")({});

const Container = styled("div")({
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
});
const PicturesWrapper = styled("div")({
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
});
const StyledImg = styled("img")({
  width: "226px",
  height: "226px",
  margin: "0px 10px 6px 0px",
});
const ButtonView = styled(Button)({
  position: "absolute",
  bottom: "20px",
  right: "36px",
  width: "158px",
  height: "36px",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "50px",
  backdropFilter: "blur(7.5px)",
  fontFamily: "Lato",
  //fontStyle: "normal",
  //fontWeight: " 700",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#FFFFFF",
  textTransform: "none",
});

const PictureButtonViewWrapper = styled("div")({
  position: "relative",
  width: "226px",
  height: "226px",
});
export default Gallery;