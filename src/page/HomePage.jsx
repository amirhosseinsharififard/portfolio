import ExpelorTrendingTopics from "../components/ExpelorTrendingTopics";
import FirstSectionHomePage from "../components/FirstSectionHomePage";
import {Grid} from "@mui/material";

const HomePage = () => {
  return (
    <Grid container>
      <FirstSectionHomePage />
      <ExpelorTrendingTopics />
    </Grid>
  );
};

export default HomePage;
