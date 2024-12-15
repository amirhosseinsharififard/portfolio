import {Avatar, Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const AboutSideBar = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 5px 20px 0px rgba(11,114,255,.12)",
        borderRadius: "16px",
        padding: "2rem",
      }}>
      <Typography sx={{fontWeight: "bold", color: "#696981"}}>ABOUT</Typography>
      <Stack display={"flex "} flexDirection={"row"} alignItems={"center"}>
        <Link  style={{textDecoration:"none"}}>
          <Avatar
            alt='Amir Hossein Sharifi Fard'
            src='/static/images/avatar/1.jpg'
          />
        </Link>
        <Box sx={{ml:'1rem'}}>
          <Link style={{textDecoration:"none" ,color:"black"}}>
            <Typography variant={'h6'} component={'h6'} sx={{fontWeight:"900",fontSize:"18px" }}>Amir Hossein Sharifi Fard</Typography>
          </Link>
          <Typography variant="body2" component={'body2'} color="#696981" fontWeight={"500"}>Reflective Blogger</Typography>
        </Box>
      </Stack>
      <Typography component={'body'} variant="body" color="#696981" mt={3} mb={2}>
        Ethan Caldwell shares thoughtful insights and reflections on life,
        culture, and personal growth. His work explores the intersections of
        creativity and experience, offering readers unique perspectives.
      </Typography>
      <Typography> (icon Location) Paris, France</Typography>

      {/* //TODO add socials */}
      <Box mt={2}>
        <Link>X</Link>
        <Link>F</Link>
        <Link>Insta</Link>
        <Link>in</Link>
      </Box>
    </Box>
  );
};

export default AboutSideBar;
