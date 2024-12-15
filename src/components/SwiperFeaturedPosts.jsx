/* eslint-disable react/prop-types */
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Swiper.css";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function SwiperFeaturedPosts({data}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        {data &&
          data.map((item, index) => (
            <SwiperSlide style={{position: "relative"}} key={item.id}>
              <Link style={{height: "100%", width: "100%"}}>
                <Box
                  position='absolute'
                  bgcolor='rgba(0, 0, 0, 0.2)' // رنگ مشکی با شفافیت 20%
                  width='100%'
                  height='100%'
                  top={0}
                  left={0}
                  zIndex={1} // مطمئن شو که Overlay زیر سایر محتواها نیست
                />
                <Stack
                  position='absolute'
                  top={0}
                  left={0}
                  zIndex={1}
                  width='100%'
                  height='100%'>
                  <Link
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      left: "1.5rem",
                      textDecoration: "none",
                      backgroundColor: "rgba(255,255,255,.22)",
                      padding: "0.3rem .7rem",
                      borderRadius: "12px",
                      color: "white",
                      textTransform: "uppercase",
                      fontSize: ".6rem",
                    }}>
                    business
                  </Link>

                  <Box
                    sx={{position: "absolute", bottom: "1rem", color: "white"}}>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Typography
                        fontWeight={"900"}
                        textTransform={"capitalize"}
                        mr={3}
                        sx={{
                          color: "rgba(255,255,255,100%)",
                          "&:hover": {
                            color: "rgba(255,255,255,.7)",
                          },
                        }}>
                        ethan <br />
                        caldwell
                      </Typography>
                      <Typography color='rgba(255,255,255,.7)'>
                        on august 5,2024
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,100%)",
                        "&:hover": {
                          color: "rgba(255,255,255,.7)",
                        },
                      }}>
                      Business Travel Trends to Expect in 2024: Tech and
                      Efficiency
                    </Typography>
                  </Box>
                </Stack>

                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
