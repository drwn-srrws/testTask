import { Typography, styled } from "@mui/material";
import { NounBedroom } from "../../../components/Icons/nounBedroom";
import HouseOnHand from "../../../components/Icons/houseOnHand";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "../../../components/Button/Button";
import ChipsBlock from "../../../components/ChipsBlock/ChipsBlock";

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

const ParkingsChips = [{ name: "1+ Garage Parking", color: "#F1AE0F" }];

const ExposureChips = [
  { name: "East", color: "#F1AE0F" },
  { name: "West", color: "#F1AE0F" },
];

const WalkToChips = [
  { name: "Beach", color: "#F1AE0F" },
  { name: "Ravine / Woods", color: "#F1AE0F" },
  { name: "Park", color: "#F1AE0F" },
  { name: "Subway Station", color: "#9499A8" },
  { name: "Bus Station", color: "#9499A8" },
  { name: "Groceries", color: "#9499A8" },
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
                <Typography
                  variant="additionalInformation"
                  color="textColor.lightgray"
                >
                  Listed 5 days ago
                </Typography>
              </ChipAddDataWrapper>
              <Typography
                variant="additionalInformation"
                color="textColor.lightgray"
              >
                MLS: N5846678{" "}
              </Typography>
            </OnMarketWrapper>
            <AddressCostWrapper>
              <Typography variant="pageTitle" color="textColor.main">
                York, Oak Ridges Lake Wilcox
              </Typography>
              <Typography variant="homePrice" color="textColor.main">
                $1,688,000
              </Typography>{" "}
            </AddressCostWrapper>
            <AdditionalAddress>
              Near Yonge/Stouffville Rd, 22 Sunset Beach Rd
            </AdditionalAddress>
            <DescriptionIconWrapper>
              {Icons.map((item) => (
                <IconWrapper key={item.text}>
                  {item.icon}
                  <IconText variant="body1" color="textColor.main">
                    {item.text}
                  </IconText>
                </IconWrapper>
              ))}
            </DescriptionIconWrapper>
            <Button style={{ margin: "36px 0px 26px 0px" }}>
              Take Virtual Tour
            </Button>
            <Line></Line>
          </DescriptionWrapper>
          <MatchedWishesWrapper>
            <MatchedWishedTitleWrapper>
              <MatchedWishedTitle variant="pageTitle" color="textColor.main">
                Matched Wishes
              </MatchedWishedTitle>
              <ExpandLessIcon />
            </MatchedWishedTitleWrapper>
            <ParkingsExposureWrapper>
              <ParkingsWrapper>
                <ChipsBlock title="Parkings" chips={ParkingsChips} />
              </ParkingsWrapper>
              <ExposureWrapper>
                <ChipsBlock title="Exposure" chips={ExposureChips} />
              </ExposureWrapper>
            </ParkingsExposureWrapper>
            <ChipsBlock title="< 20 mins Walk to" chips={WalkToChips} />
          </MatchedWishesWrapper>
        </LeftWrapper>
        <PictureWrapper>
          <PictureContainer>
            <HouseOnHand />
            <PictureTitle variant="pageTitle" color="textColor.main">
              This home matches 6 of your wishes ✨
            </PictureTitle>
            <Line></Line>
            <WhatsappTitle variant="pageTitle" color="textColor.main">
              Whatsapp Ambrose
            </WhatsappTitle>
            <MessageWrapper>
              <StyledImg src="/images/description/whatsapp.png" alt="111" />
              <Typography
                variant="additionalInformation"
                color="textColor.mainText"
              >
                I've a question about this deal
              </Typography>
            </MessageWrapper>
            <StartChatWrapper>
              <Button color="secondary">Start Chat</Button>
            </StartChatWrapper>
            <AgentText
              variant="additionalInformation"
              color="textColor.lightgray"
            >
              <strong>Agent:</strong> Ambrose Choy, Landpower Real Estate Ltd.
            </AgentText>
          </PictureContainer>
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

const AgentText = styled(Typography)({
  fontSize: "12px",
  lineHeight: "20px",
});

const StyledImg = styled("img")({
  margin: "0px 10px 0px 20px",
});

const WhatsappTitle = styled(Typography)({
  fontSize: "24px",
  lineHeight: " 28px",
});

const MessageWrapper = styled("div")({
  margin: "16px 0px 11px 0px",
  display: "flex",
  alignItems: "center",
  width: "300px",
  height: "60px",
  background: "#F5F6F9",
  borderRadius: "5px",
});

const Line = styled("div")({
  height: "1px",
  background: "#E9EBEF",
  margin: "0px 0px 32px 0px",
});

const PictureTitle = styled(Typography)({
  margin: "33px 0px 32px 0px",
});

const ExposureWrapper = styled("div")({
  margin: "0px 0px 0px 24px",
});

const MatchedWishesWrapper = styled("div")({});

const MatchedWishedTitle = styled(Typography)({
  fontSize: "28px",
  lineHeight: "33px",
});

const ParkingsExposureWrapper = styled("div")({
  display: "flex",
});

const Container = styled("div")({
  display: "flex",
  maxWidth: "1170px",
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

const PictureWrapper = styled("div")({
  width: "370px",
  height: "600px",
  margin: "0px 0px 0px 30px",
  background: "#FFFFFF",
  boxShadow: "0px 10px 120px -30px rgba(32, 42, 68, 0.1)",
  borderRadius: "20px",
});

const PictureContainer = styled("div")({
  margin: "60px 0px 0px 30px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "280px",
  width: "100%",
});

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

const IconText = styled(Typography)({
  margin: "0px 27px 0px 9px",
});
const StartChatWrapper = styled("div")({
  margin: "0px 0px 27px 0px",
});
export default Description;
