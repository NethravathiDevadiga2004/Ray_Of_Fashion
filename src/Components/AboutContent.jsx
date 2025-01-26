import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xruNekI2xbvUO9TPxl6CU_CsgCfUJwt_Tg&s"}
            alt="picture"
            style={{ width: "55%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              "Effortless Shopping, Endless Choices"
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             "Your One-Stop Shop for Everything You Need!"
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify", font:"icon"}}
            >
             "Transform the way you shop with our easy-to-use platform, designed to bring you the latest trends, everyday essentials, and everything in between, all at your fingertips."


            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
