import PageLayout from "../../layouts/PageLayout";
import Description from "./components/Description";
import Gallery from "./components/Gallery";

const MainPage = () => {
  return (
    <PageLayout>
      <Gallery />
      <Description />
    </PageLayout>
  );
};
export default MainPage;
