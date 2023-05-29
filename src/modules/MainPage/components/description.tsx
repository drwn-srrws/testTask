import { Button, styled } from "@mui/material";
import { NounBedroom } from "../svg/nounBedroom";
import CustomChip from "../../../components/styledChip/StyledChip";
import HouseOnHand from "../svg/houseOnHand";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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
                  <Text>On Market</Text>
                </ChipMarket>
                <GreyText>Listed 5 days ago</GreyText>
              </ChipAddDataWrapper>
              <GreyText>MLS: N5846678 </GreyText>
            </OnMarketWrapper>
            <AddressCostWrapper>
              <AdressCostText>York, Oak Ridges Lake Wilcox</AdressCostText>
              <AdressCostText>$1,688,000</AdressCostText>{" "}
            </AddressCostWrapper>
            <AdditionalAddress>
              Near Yonge/Stouffville Rd, 22 Sunset Beach Rd
            </AdditionalAddress>
            <DescriptionIconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>4</IconText>
              </IconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>3+1</IconText>
              </IconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>1</IconText>
              </IconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>2</IconText>
              </IconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>19.98 x 100.4 ft</IconText>
              </IconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>2500-3500 sqft</IconText>
              </IconWrapper>
              <IconWrapper>
                <NounBedroom /> <IconText>Semi-Detached</IconText>
              </IconWrapper>
            </DescriptionIconWrapper>
            <TourButton>Take Virtual Tour</TourButton>
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
          <StartChat>Start Chat</StartChat>
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
  justifyContent:"space-between"
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

const WhatsappTitle = styled("div")({
  fontFamily: "Abhaya Libre",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: " 28px",
  letterSpacing: "-0.02em",
  color: "#202A44",
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

const PictureTitle = styled("div")({
  margin: "33px 0px 32px 0px",
  fontFamily: "Abhaya Libre",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "38px",
  letterSpacing: "-0.02em",
  color: "#202A44",
});

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

const StartChat = styled(Button)({
  margin: "0px 0px 27px 0px",
  boxSizing: "border-box",
  padding: "11px 16px 12px",
  background: "#54CC61",
  borderRadius: "50px",
  color: "white",
  textDecoration: "none",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  textTransform: "none",
});

const Container = styled("div")({
  display: "flex",
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
});

export default Description;

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
  padding: "11px 16px 9px",
  margin: "0px 20px 0px 0px",
  gap: "10px",
  width: "128px",
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

const Text = styled("div")({
  color: "white",
});

const PictureWrapper = styled("div")({
  maxWidth: "300px",
  width: "100%",
  margin: "70px 0px 0px 60px",
});

const GreyText = styled("div")({
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#9499A8",
});
const AdressCostText = styled("div")({
  fontFamily: "Abhaya Libre",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "32px",
  lineHeight: "38px",
  /* identical to box height */

  letterSpacing: "-0.02em",
  color: "#202A44",
});

const IconWrapper = styled("div")({
  display: "flex",
});

const IconText = styled("div")({
  margin: "0px 27px 0px 8px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#202A44",
});

const TourButton = styled(Button)({
  margin: "36px 0px 26px 0px",
  boxSizing: "border-box",
  width: "152px",
  height: "42px",
  padding: "11px 16px 12px",
  gap: "1px",
  background: "#F1AE0F",
  borderRadius: "50px",
  color: "white",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  textTransform: "none",
});
