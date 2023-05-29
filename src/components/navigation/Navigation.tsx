import { Button, Link, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState, useEffect } from "react";
import BasicModal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { LOGOUT } from "../../redux/actions/userActions";

const NAV_LINKS = [
  {
    text: `Buy & Invest`,
  },
  { text: `Discover Homes` },
  { text: `Learn`, moreIcon: true },
  { text: `Company`, moreIcon: true },
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
              <StyledLink sx={styles.link}>{item.text}</StyledLink>
              {item.moreIcon && <ExpandMoreIcon sx={styles.moreIcon} />}
            </LinkMenuWrapper>
          ))}
        </LinksWrapper>
        <AuthorizationWrapper>
          {isAuthorized ? (
            <StyledLink onClick={() => dispatch({ type: LOGOUT })}>
              Log Out
            </StyledLink>
          ) : (
            <>
              <StyledLink onClick={handleModalOpen}>Log In</StyledLink>
              <RegisterButton>Register</RegisterButton>{" "}
            </>
          )}
        </AuthorizationWrapper>
      </Container>
      <BasicModal open={modalOpen} setOpen={setModalOpen} />
    </OuterWrapper>
  );
};

export default Navigation;

const styles = {
  link: {
    margin: "0px 0px 0px 35px",
  },
  moreIcon: {
    width: "30px",
    height: "20px",
    margin: "3px 0px 0px 0px",
    "& path": {
      fill: "#202A44",
    },
    cursor: "pointer",
  },
};

const OuterWrapper = styled("div")({
  height: "64px",
  display: "flex",
  alignItems: "center",
  boxShadow: "0px 0px 20px 0px rgba(32, 42, 68, 0.1)",
});

const LinksWrapper = styled("div")({
  display: "flex",
});

const AuthorizationWrapper = styled("div")({});

const StyledLink = styled(Link)({
  fontFamily: "Lato",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#202A44",
  textDecoration: "none",
  cursor: "pointer",
});

const RegisterButton = styled(Button)({
  margin: "0px 0px 0px 18px",
  boxSizing: "border-box",
  padding: "11px 16px 12px",
  background: "#F1AE0F",
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
