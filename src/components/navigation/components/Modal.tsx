import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC, useState } from "react";
import { TextField, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions/userActions";
import { CircularProgress } from "@mui/material";
import { RootState } from "../../../redux/store/store";

interface BasicModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const BasicModal: FC<BasicModalProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [login, setLogin] = useState({ login: "", password: "" });
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(loginUser({ password: login.password, login: login.login }));
  };
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <StyledBox>
          <Container>
            <TitleWrapper>
              <Title>Sign in</Title>
            </TitleWrapper>
            <TextFieldName>Email or username</TextFieldName>
            <StyledTextField
              placeholder="Enter your email here"
              onChange={(e) => {
                setLogin({ ...login, login: e.target.value });
              }}
            />
            <TextFieldName>Password</TextFieldName>
            <StyledTextField
              placeholder="Enter your password here"
              onChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
            />
            {isLoading ? (
              <CircularProgressWrapper>
                <StyledCircularProgress />
              </CircularProgressWrapper>
            ) : (
              <StyledButton onClick={handleLoginClick}>Log In</StyledButton>
            )}
          </Container>
        </StyledBox>
      </Modal>
    </div>
  );
};

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "32px",
  lineHeight: "38px",
  letterSpacing: "-0.02em",
}));
const TextFieldName = styled(Typography)({
  fontFamily: "Lato",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "17px",
  marginBottom: "10px",
});

const StyledBox = styled(Box)({
  borderRadius: "30px",
  width: "435px",
  height: "471px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  outline: "none",
});
const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
  width: "100%",
  margin: "0 auto",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "348px",
  marginBottom: "25px",

  "& .MuiInputBase-input": {
    ...theme.typography.button,
    fontWeight: "400",
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
}));

const TitleWrapper = styled("div")({
  margin: "45px 0px 39px 0px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "11px 16px 12px",
  gap: "10px",
  width: "349px",
  height: "46px",
  background: "#F1AE0F",
  borderRadius: "50px",
  color: "white",
  ...theme.typography.button,
}));
const StyledCircularProgress = styled(CircularProgress)({
  marginTop: "50px",
});

const CircularProgressWrapper = styled("div")({
  margin: "0 auto",
});
export default BasicModal;
