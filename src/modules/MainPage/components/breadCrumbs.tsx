import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/system";

export default function BreadCrumbs() {
  const breadcrumbs = [
    <StyledLink key="1">Ontario</StyledLink>,
    <StyledLink key="2">Toronto</StyledLink>,
    <StyledTypography key="3">22 Sunset Beach Rd</StyledTypography>,
  ];

  return (
    <StyledStack spacing={2}>
      <StyledBreadcrumbs
        separator={<NavigateNextIcon fontSize="medium" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </StyledBreadcrumbs>
    </StyledStack>
  );
}
const StyledLink = styled(Link)({
  textDecoration: "none",
  fontFamily: "Lato",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#202A44",
});
const StyledTypography = styled(Typography)({
  fontFamily: "Lato",
  fontWeight: "400",
  fontSize: "16px",
  color: "#9499A8",
});

const StyledStack = styled(Stack)({
  margin: "25px 0px",
});

const StyledBreadcrumbs = styled(Breadcrumbs)({
  "& .MuiBreadcrumbs-separator": {
    marginLeft: "4px",
    marginRight: "1px",
  },
});
