import { Button, Link, Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { logout } from "../../redux/actions/userActions";
import BasicModal from "../Popups/LoginModal";

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
              <StyledLink sx={styles.link}>{item.text}</StyledLink>
              {item.hasDropdown && <ExpandMoreIcon sx={styles.moreIcon} />}
            </LinkMenuWrapper>
          ))}
        </LinksWrapper>
        <AuthorizationWrapper>
          {isAuthorized ? (
            <StyledLink onClick={() => dispatch(logout())}>Log Out</StyledLink>
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

const AuthorizationWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  minWidth: "155px",
});

const StyledLink = styled(Typography)(({ theme }) => ({
  color: "#202A44",
  textDecoration: "none",
  cursor: "pointer",
  ...theme.typography.button, // Применение стилей шрифта
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  margin: "0px 0px 0px 18px",
  boxSizing: "border-box",
  padding: "11px 16px 12px",
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
