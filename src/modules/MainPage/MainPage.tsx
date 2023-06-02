import styled from "@emotion/styled";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import PageLayout from "../../layouts/PageLayout";
import Description from "./components/Description";
import Gallery from "./components/Gallery";

const breadCrumbs = [
  { itemId: "1", name: "Ontario" },
  { itemId: "2", name: "Toronto" },
  { itemId: "3", name: "22 Sunset Beach Rd" },
];

const MainPage = () => {
  return (
    <PageLayout>
      <Container>
        <BreadCrumbs breadcrumb={breadCrumbs} />
        <Gallery />
        <Description />
      </Container>
    </PageLayout>
  );
};
export default MainPage;

const Container = styled("div")({
  maxWidth: "1170px",
  margin: " 0 auto",
});
