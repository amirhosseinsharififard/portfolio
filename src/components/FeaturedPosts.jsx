import {Box, Typography} from "@mui/material";
import SwiperFeaturedPosts from "./SwiperFeaturedPosts";

import image from "../../assets/demo-image-0028-1248x702.webp";
import image1 from "../../assets/demo-image-0028-1248x702.webp";
import image2 from "../../assets/demo-image-0028-1248x702.webp";

const data = [
  {id: 0, img: image},
  {id: 1, img: image1},
  {id: 2, img: image2},
];

const FeaturedPosts = () => {
  return (
    <Box m={'2rem 0'}>
      <Typography variant="h2" component={"h2"} color="rgb(105, 105, 129)" fontSize={'12px'} mb={"1rem"}> featured post</Typography>
      <SwiperFeaturedPosts data={data} />
    </Box>
  );
};

export default FeaturedPosts;
