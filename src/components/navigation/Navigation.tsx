import { Link, Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { logout } from "../../redux/actions/userActions";
import BasicModal from "../Popups/LoginModal";
import Button from "../Button/Button";

const NAV_LINKS = [
  {
    text: `Buy & Invest`,
  },
  { text: `Discover Homes` },
  { text: `Learn`, hasDropdown: true },
  { text: `Company`, hasDropdown: true },
];

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const isAuthorized = useSelector(
    (state: RootState) => state.user.isAuthorized
  );
  const dispatch = useDispatch();
  useEffect(() => {
    isAuthorized && setModalOpen(false);
  }, [isAuthorized]);
  return (
    <OuterWrapper>
      <Container>
        <Link>
          <img src="/images/Navigation/logo.png" alt="/" />
        </Link>
        <LinksWrapper>
          {NAV_LINKS.map((item) => (
            <LinkMenuWrapper key={item.text}>
              <StyledLink variant="body1" color="textColor.main">
                {item.text}
              </StyledLink>
              {item.hasDropdown && <StyledExpandMoreIcon />}
            </LinkMenuWrapper>
          ))}
        </LinksWrapper>
        <AuthorizationWrapper>
          {isAuthorized ? (
            <Button variant="text" onClick={() => dispatch(logout())}>
              Log Out
            </Button>
          ) : (
            <>
              <Button variant="text" onClick={handleModalOpen}>
                Log In
              </Button>
              <Button>Register</Button>{" "}
            </>
          )}
        </AuthorizationWrapper>
      </Container>
      <BasicModal open={modalOpen} setOpen={setModalOpen} />
    </OuterWrapper>
  );
};

export default Navigation;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  width: "30px",
  height: "20px",
  margin: "3px 0px 0px 0px",
  "& path": {
    fill: theme.palette.primary.main,
  },
  cursor: "pointer",
}));

const OuterWrapper = styled("div")({
  height: "64px",
  display: "flex",
  alignItems: "center",
  boxShadow: "0px 0px 20px 0px rgba(32, 42, 68, 0.1)",
});

const LinksWrapper = styled("div")({
  display: "flex",
});

const AuthorizationWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  minWidth: "155px",
});

const StyledLink = styled(Typography)({
  textDecoration: "none",
  cursor: "pointer",
  margin: "0px 0px 0px 35px",
});

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1340px",
  width: "100%",
  margin: "0 auto",
});
const LinkMenuWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
