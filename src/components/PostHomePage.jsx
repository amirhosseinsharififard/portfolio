/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import {Box, Button, Stack, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const StyledButton = styled(Button)({
  background: "linear-gradient(180deg, #9895ff 0%, #514dcc 100%)",
  textTransform: "none",
  fontWeight: "700",
  letterSpacing: "1px",
  width: "50%",
  height: "20%",
  position: "absolute",
  bottom: 0,
});
const PostHomePage = ({data}) => {
  const {id, writer, date, title, description, image, category, timeForRead} =
    data;

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      borderBottom={"1px solid rgba(0,0,0,.2)"}
      mt={4}
      mb={4}
      pb={4}>
      <Stack position={"relative"} width={"100%"}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px",
          }}
        />

        <Typography
          variant="subtitle2"
          component="subtitle2"
          position={"absolute"}
          bgcolor={"white"}
          p='0rem .5rem .3rem'
          m={'auto'}
          borderRadius={2}
          top='1rem'
          textTransform={"uppercase"}
          left='1rem'>
          {category}
        </Typography>
      </Stack>

      <Stack ml={"1rem"} position={"relative"}>
        <Typography color='#696981'>
          <Link style={{color: "#5955d1", textDecoration: "none"}}>
            {writer}
          </Link>
          on {date}
        </Typography>
        <Link style={{textDecoration: "none"}}>
          <Typography
            component={"h5"}
            variant='h5'
            fontWeight='bold'
            sx={{
              color: "#29294b",
              "&:hover": {
                color: "#5955d1",
                fontSize:"24px"
              },
            }}>
            {title}
          </Typography>
        </Link>
        <Typography color='#696981' fontSize={"16px"}>
          {description}
        </Typography>
        <StyledButton>Discover More</StyledButton>
      </Stack>
    </Box>
  );
};

export default PostHomePage;
