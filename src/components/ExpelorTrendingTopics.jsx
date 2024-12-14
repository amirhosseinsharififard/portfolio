import {Box, Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import styles from "../css/ExpelorTrendingTopics.module.css";

const ExpelorTrendingTopics = () => {
  const trendingButtons = [
    "technology",
    "travel",
    "sport",
    "business",
    "management",
    "trends",
    "startps",
    "news",
  ];
  return (
    <Grid container>
      <Typography sx={{m:"4rem auto 0"}}>Explore Trending Topics</Typography>
      <Box mt={5}>
        <Grid container>
          {trendingButtons.map((item) => (
            // TODO Icon be in ha bayad ezafe konam
            <Grid item xs={2} key={item} mb={6}>
              <Link className={styles.link}>icon {item}</Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default ExpelorTrendingTopics;
