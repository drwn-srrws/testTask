import PageLayout from "../../layouts/PageLayout";
import Description from "./components/description";
import Gallery from "./components/gallery";

const MainPage = () => {
  return (
    <PageLayout>
      <Gallery />
      <Description />
    </PageLayout>
  );
};
export default MainPage;
