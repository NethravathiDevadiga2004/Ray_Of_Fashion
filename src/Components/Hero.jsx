import { Box, Typography } from "@mui/material";
import React from "react";
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNLwb06Bdt1jJKRbe1rYbJUncb7ujyVWJAA&s)",
          
        backgroundRepeat:"no-repeat",
      backgroundSize:"cover"}}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom
        >
         RAY_OF_FASHION
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "white" }}
        >
         "Explore the world of shopping at your Fingertips" 
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "white" }}
        >
         Your ultimate destination for all your shopping needs, offering a seamless experience with a vast collection of products, unbeatable prices, and fast delivery to your doorstep
        </Typography>
      </Box>
    </Box>
  );
}
