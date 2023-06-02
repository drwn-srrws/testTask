import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { TextField, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { CircularProgress } from "@mui/material";
import { RootState } from "../../redux/store/store";
import PopupLayout from "../../layouts/PopupLayout";

interface LoginModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LoginModal: FC<LoginModalProps> = ({ open, setOpen }) => {
  const [login, setLogin] = useState({ login: "", password: "" });
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(loginUser({ password: login.password, login: login.login }));
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const { isLoading } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    !open && setLogin({ login: "", password: "" });
  }, [open]);

  return (
    <PopupLayout open={open} setOpen={setOpen}>
      <Container>
        <TitleWrapper>
          <Typography variant="pageTitle" color="textColor.main">
            Sign in
          </Typography>
        </TitleWrapper>
        <TextFieldName variant="body1" color="textColor.main">
          Email or username
        </TextFieldName>
        <StyledTextField
          placeholder="Enter your email here"
          name="login"
          onChange={handleFieldChange}
        />
        <TextFieldName variant="body1" color="textColor.main">
          Password
        </TextFieldName>
        <StyledTextField
          placeholder="Enter your password here"
          name="password"
          onChange={handleFieldChange}
        />
        {isLoading ? (
          <CircularProgressWrapper>
            <StyledCircularProgress />
          </CircularProgressWrapper>
        ) : (
          <StyledButton onClick={handleLoginClick}>Log In</StyledButton>
        )}
      </Container>
    </PopupLayout>
  );
};

const TextFieldName = styled(Typography)({
  fontSize: "14px",
  lineHeight: "17px",
  marginBottom: "10px",
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
  color: "rgba(32, 42, 68, 0.29)",

  "& .MuiInputBase-input": {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#191C25",
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
}));

const TitleWrapper = styled("div")({
  margin: "45px 0px 39px 0px",
});

const StyledCircularProgress = styled(CircularProgress)({
  marginTop: "50px",
});

const CircularProgressWrapper = styled("div")({
  margin: "0 auto",
});

const StyledButton = styled(Button)({
  marginTop: "53px",
});
export default LoginModal;
