import {Box, Stack, Typography} from "@mui/material";
import FigmaImage from "../../assets/figma.webp";

const i = [0, 2, 3, 4];
const TechnologiesSideBarHomePage = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 5px 20px 0px rgba(11,114,255,.12)",
        borderRadius: "16px",
        padding: "1rem",
      }}>
      <Typography textTransform={"uppercase"} fontWeight={"bold"} mb='1rem' color='rgb(105, 105, 12' fontSize={12}>
        Technologies
      </Typography>
      {i.map((item) => (
        <Stack
          key={item}
          m="auto"
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"center"}
          width={"90%"}
          mb={"1rem"}>
          <img
            src={FigmaImage}
            alt='none'
            style={{borderRadius: "10px", width: "48px", height: "48px"}}
          />
          <Box display={"flex"} flexDirection={"column"} ml={2}>
            <Typography
              variant='h6'
              textTransform={"capitalize"}
              fontWeight={"bold"}
              fontSize={18}>
              Figma
            </Typography>
            <Typography
              variant='body1'
              color='rgb(105, 105, 129)'
              fontSize={14}>
              Collaborate and design interfaces in real-time.
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default TechnologiesSideBarHomePage;
