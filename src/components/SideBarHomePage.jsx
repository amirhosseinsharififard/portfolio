import AboutSideBar from "./AboutSideBar";
import CreatingSideBarHomePage from "./CreatingSideBarHomePage";
import FeaturedPosts from "./FeaturedPosts";
import TechnologiesSideBarHomePage from "./TechnologiesSideBarHomePage";
import WorkExperienceSideBarHomePage from "./WorkExperienceSideBarHomePage";

const SideBarHomePage = () => {
  return (
    <>
      <AboutSideBar />
      <FeaturedPosts />
      <WorkExperienceSideBarHomePage />
      <TechnologiesSideBarHomePage />
      <CreatingSideBarHomePage />
    </>
  );
};

export default SideBarHomePage;
