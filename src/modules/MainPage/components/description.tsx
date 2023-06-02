import { Typography, styled } from "@mui/material";
import { NounBedroom } from "../../../components/Icons/nounBedroom";
import HouseOnHand from "../../../components/Icons/houseOnHand";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CustomChip from "../../../components/StyledChip/StyledChip";
import Button from "../../../components/Button/Button";

const Icons = [
  {
    icon: <NounBedroom />,
    text: "4",
  },
  {
    icon: <NounBedroom />,
    text: "3+1",
  },
  {
    icon: <NounBedroom />,
    text: "1",
  },
  {
    icon: <NounBedroom />,
    text: "2",
  },
  {
    icon: <NounBedroom />,
    text: "19.98 x 100.4 ft",
  },
  {
    icon: <NounBedroom />,
    text: "2500-3500 sqft",
  },
  {
    icon: <NounBedroom />,
    text: "Semi-Detached",
  },
];

const Description = () => {
  return (
    <OuterWrapper>
      <Container>
        <LeftWrapper>
          <DescriptionWrapper>
            <OnMarketWrapper>
              <ChipAddDataWrapper>
                <ChipMarket>
                  <Dot></Dot>
                  <Typography variant="body1" color="textColor.light">
                    On Market
                  </Typography>
                </ChipMarket>
                <GreyText>Listed 5 days ago</GreyText>
              </ChipAddDataWrapper>
              <GreyText>MLS: N5846678 </GreyText>
            </OnMarketWrapper>
            <AddressCostWrapper>
              <AdressText>York, Oak Ridges Lake Wilcox</AdressText>
              <AdressCostText>$1,688,000</AdressCostText>{" "}
            </AddressCostWrapper>
            <AdditionalAddress>
              Near Yonge/Stouffville Rd, 22 Sunset Beach Rd
            </AdditionalAddress>
            <DescriptionIconWrapper>
              {Icons.map((item) => (
                <IconWrapper key={item.text}>
                  {item.icon}
                  <IconText>{item.text}</IconText>
                </IconWrapper>
              ))}
            </DescriptionIconWrapper>
            <Button>Take Virtual Tour</Button>
            <Line></Line>
          </DescriptionWrapper>
          <MatchedWishesWrapper>
            <MatchedWishedTitleWrapper>
              <MatchedWishedTitle>Matched Wishes</MatchedWishedTitle>
              <ExpandLessIcon />
            </MatchedWishedTitleWrapper>
            <ParkingsExposureWrapper>
              <ParkingsWrapper>
                <MatchedWishedSubTitle>Parkings</MatchedWishedSubTitle>
                <CustomChip
                  $color="#F1AE0F"
                  label="1+ Garage Parking"
                ></CustomChip>
              </ParkingsWrapper>
              <ExposureWrapper>
                <MatchedWishedSubTitle>Exposure</MatchedWishedSubTitle>
                <CustomChip $color="#F1AE0F" label="East"></CustomChip>
                <CustomChip $color="#F1AE0F" label="West"></CustomChip>
              </ExposureWrapper>
            </ParkingsExposureWrapper>
            <MatchedWishedSubTitle>
              {" "}
              {`< 20 mins Walk to`}
            </MatchedWishedSubTitle>
            <CustomChip $color="#F1AE0F" label="Beach"></CustomChip>
            <CustomChip $color="#F1AE0F" label="Ravine / Woods"></CustomChip>
            <CustomChip $color="#F1AE0F" label="Park"></CustomChip>
            <CustomChip $color="#9499A8" label="Subway Station"></CustomChip>
            <CustomChip $color="#9499A8" label="Bus Station"></CustomChip>
            <CustomChip $color="#9499A8" label="Groceries"></CustomChip>
          </MatchedWishesWrapper>
        </LeftWrapper>
        <PictureWrapper>
          <HouseOnHand />
          <PictureTitle>This home matches 6 of your wishes ✨</PictureTitle>
          <Line></Line>
          <WhatsappTitle>Whatsapp Ambrose</WhatsappTitle>
          <MessageWrapper>
            <StyledImg src="/images/description/whatsapp.png" alt="111" />
            <MessageText>I've a question about this deal</MessageText>
          </MessageWrapper>
          <Button color="secondary">Start Chat</Button>
          <AgentText>
            <strong>Agent:</strong> Ambrose Choy, Landpower Real Estate Ltd.
          </AgentText>
        </PictureWrapper>
      </Container>
    </OuterWrapper>
  );
};

const OuterWrapper = styled("div")({
  padding: "32px 0px 0px 0px",
});
const LeftWrapper = styled("div")({});

const MatchedWishedTitleWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ParkingsWrapper = styled("div")({});

const AgentText = styled("div")({
  fontFamily: "Lato",
  fontSize: "12px",
  lineHeight: " 20p",
  fontWeight: " 400",
  color: "#9499A8",
});

const StyledImg = styled("img")({
  margin: "0px 10px 0px 20px",
});

const WhatsappTitle = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "24px",
  lineHeight: " 28px",
  letterSpacing: "-0.02em",
  color: "#202A44",
}));

const MessageWrapper = styled("div")({
  margin: "16px 0px 11px 0px",
  display: "flex",
  alignItems: "center",
  width: "300px",
  height: "60px",
  background: "#F5F6F9",
  borderRadius: "5px",
});

const MessageText = styled("div")({
  fontFamily: "Abhaya Libre",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  letterSpacing: "-0.02em",
  color: "#202A44",
});

const Line = styled("div")({
  height: "1px",
  background: "#E9EBEF",
  margin: "0px 0px 32px 0px",
});

const PictureTitle = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  margin: "33px 0px 32px 0px",
  fontSize: "32px",
  lineHeight: "38px",
  letterSpacing: "-0.02em",
  color: "#202A44",
}));

const ExposureWrapper = styled("div")({
  margin: "0px 0px 0px 24px",
});

const MatchedWishesWrapper = styled("div")({});

const MatchedWishedTitle = styled("div")({
  fontFamily: "Abhaya Libre",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "28px",
  lineHeight: "33px",
  letterSpacing: "-0.02em",
  color: "#202A44",
});

const ParkingsExposureWrapper = styled("div")({
  display: "flex",
});

const MatchedWishedSubTitle = styled("div")({
  margin: "24px 0px 10px 0px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: " 700",
  fontSize: "14px",
  lineHeight: "17px",
  color: " #202A44",
});

const StartChat = styled(Button)(({ theme }) => ({
  margin: "0px 0px 27px 0px",
  boxSizing: "border-box",
  padding: "11px 16px 12px",
  background: "#54CC61",
  borderRadius: "50px",
  color: "white",
  ...theme.typography.button,

  "&:hover": {
    background: "#43a34d ",
    boxShadow: "0px 2px 4px #43a34d ",
  },
  "&:active": {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    background: "#98e0a0 ", // Можете изменить на нужный вам цвет синего
  },
}));

const Container = styled("div")({
  display: "flex",
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
});

const DescriptionWrapper = styled("div")({});

const OnMarketWrapper = styled("div")({
  margin: "0px 0px 25px 0px",
  display: "flex",
  alignItems: "center",
  maxWidth: "770px",
  justifyContent: "space-between",
});

const ChipAddDataWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

const AddressCostWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  maxWidth: "770px",
  justifyContent: "space-between",
});

const AdditionalAddress = styled("div")({
  margin: "5px 0px 25px 0px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#202A44",
});

const DescriptionIconWrapper = styled("div")({
  display: "flex",
});

const ChipMarket = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 12px 9px",
  margin: "0px 20px 0px 0px",
  gap: "10px",
  width: "130px",
  height: "36px",
  background: "#54CC61",
  borderRadius: "50px",
});

const Dot = styled("div")({
  height: "8px",
  width: "8px",
  background: "white",
  borderRadius: "10px",
});

const Text = styled(Typography)(({ theme }) => ({
  color: "white",
  ...theme.typography.button,
}));

const PictureWrapper = styled("div")({
  maxWidth: "280px",
  width: "100%",
  margin: "60px 0px 0px 70px",
});

const GreyText = styled("div")({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#9499A8",
});
const AdressCostText = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "36px",
  lineHeight: "38px",
  letterSpacing: "-0.02em",
  color: "#202A44",
}));

const AdressText = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "32px",
  lineHeight: "38px",
  letterSpacing: "-0.02em",
  color: "#202A44",
}));

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

const IconText = styled("div")(({ theme }) => ({
  margin: "0px 27px 0px 9px",
  color: "#202A44",
  ...theme.typography.button,
}));

const TourButton = styled(Button)(({ theme }) => ({
  margin: "36px 0px 26px 0px",
  boxSizing: "border-box",
  padding: "11px 16px 12px",
  gap: "1px",
  background: "#F1AE0F",
  borderRadius: "50px",
  color: "white",
  ...theme.typography.button,

  "&:hover": {
    background: "#c08b0c", // Измените на нужный вам цвет при наведении
    boxShadow: "0px 2px 4px #c08b0c",
  },
  "&:active": {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    background: "#F1AE0F", // Можете изменить на нужный вам цвет синего
  },
}));

export default Description;
