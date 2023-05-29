import { ToastContainer } from "react-toastify";
import "./styles/global.css";
import MainPage from "./modules/MainPage/MainPage";
const App = () => {
  return (
    <>
      <MainPage />
      <ToastContainer />
    </>
  );
};

export default App;
