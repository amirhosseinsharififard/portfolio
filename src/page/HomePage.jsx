import ExpelorTrendingTopics from "../components/ExpelorTrendingTopics";
import FirstSectionHomePage from "../components/FirstSectionHomePage";
import {Grid} from "@mui/material";
import PostHomePage from "../components/PostHomePage";
import imageDemo from "../../assets/demo-image-0038-1248x702.webp";
import SideBarHomePage from "../components/SideBarHomePage";
// TODO dataye makhsose dorost konm
const Data = [
  {
    id: 1,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 2,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 3,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 4,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 5,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 6,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 7,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 8,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },

  {
    id: 9,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 10,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 11,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
  {
    id: 12,
    writer: "Ethan Caldwell",
    date: "September 24, 2024",
    title: "Key Sports Trends for 2024: From AI to Virtual Reality",
    description:
      "Dive into the key sports trends like AI and virtual reality set to redefine the sports industry in 2024.",
    image: imageDemo,
    category: "sprot",
    timeForRead: "4 min",
  },
];

const HomePage = () => {
  return (
    <>
      {/* <FirstSectionHomePage />
      <ExpelorTrendingTopics /> */}
      <Grid container display={'flex'} spacing={2}>
        <Grid item md={8} xs={12} >
          {/* TODO Dark mode ro toye proje eemal konam  */}
          {Data.map((item) => (
            <PostHomePage key={item.id} data={item} />
          ))}
        </Grid>
        <Grid item md={4} sx={{display: {xs: "none", md: "block",maxWidth:"90%" }}}>
          <SideBarHomePage />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
