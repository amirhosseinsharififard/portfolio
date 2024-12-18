import {Box, Stack, Typography} from "@mui/material";

const WorkExperienceSideBarHomePage = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 5px 20px 0px rgba(11,114,255,.12)",
        borderRadius: "16px",
        padding: "2rem",
      }}>
      <Typography
        variant='h5'
        color='rgb(105, 105, 129)'
        textTransform={"uppercase"}
        fontSize={".75rem"}
        mb={3}>
        work experience
      </Typography>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        textTransform={"capitalize"}
        mb='1rem'
                pb='1rem'
        borderBottom={"1px solid rgba(0,0,0,.1)"}>
        <Box>
          <Typography variant='h6' color='black' fontSize={"18px"}>
            Product Designer
          </Typography>
          <Typography
            variant='caption'
            color='rgb(105, 105, 129)'
            fontSize={"16px"}>
            Pioneer
          </Typography>
        </Box>
        <Typography color='rgb(105, 105, 129)' fontSize={"15px"}>
          2022 - Now
        </Typography>
      </Stack>{" "}
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        textTransform={"capitalize"}
        mb='1rem'
                pb='1rem'
        borderBottom={"1px solid rgba(0,0,0,.1)"}>
        <Box>
          <Typography variant='h6' color='black' fontSize={"18px"}>
            Product Designer
          </Typography>
          <Typography
            variant='caption'
            color='rgb(105, 105, 129)'
            fontSize={"16px"}>
            Pioneer
          </Typography>
        </Box>
        <Typography color='rgb(105, 105, 129)' fontSize={"15px"}>
          2022 - Now
        </Typography>
      </Stack>{" "}
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        textTransform={"capitalize"}
        mb='1rem'
                pb='1rem'
        // borderBottom={"1px solid rgba(0,0,0,.1)"}
      >
        <Box>
          <Typography variant='h6' color='black' fontSize={"18px"}>
            Product Designer
          </Typography>
          <Typography
            variant='caption'
            color='rgb(105, 105, 129)'
            fontSize={"16px"}>
            Pioneer
          </Typography>
        </Box>
        <Typography color='rgb(105, 105, 129)' fontSize={"15px"}>
          2022 - Now
        </Typography>
      </Stack>
    </Box>
  );
};

export default WorkExperienceSideBarHomePage;
