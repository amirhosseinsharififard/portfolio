import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";



const i=[0,2,1,3]
const CreatingSideBarHomePage = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 5px 20px 0px rgba(11,114,255,.12)",
        borderRadius: "16px",
        padding: "1rem",
      }}>
      <Typography textTransform={"uppercase"} fontWeight={"bold"} mb='1rem' color="rgb(105, 105, 12" fontSize={12}>
        Creating
      </Typography>

   {i.map(item=>   <Box display={"flex"} flexDirection={"column"} alignContent={"center"} key={item} mb={2} width='99%'>
        <Link 
        style={{textDecoration:"none"}}>
          <Typography
            variant='h6'
            textTransform={"capitalize"}
            fontWeight={"bold"}
            color="rgb(89, 85, 209)"
            fontSize={18}>
            Heartfelt Reflections
          </Typography>
        </Link>
        <Typography variant='body1' color='rgb(105, 105, 129)' fontSize={14}>
          A deep dive into emotional experiences and personal growth, sharing
          valuable insights on life's most meaningful moments.
        </Typography>
      </Box>)}
    </Box>
  );
};

export default CreatingSideBarHomePage;
