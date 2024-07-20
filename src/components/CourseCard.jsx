import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ course, buttonText }) {
  const navigate=useNavigate()
  return (
    <Card>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          sx={{ width: 120, padding: 2 }}
          image={course?.img_url}
          alt={course?.title}
        />
        <CardContent>
          <Typography component="div" variant="h6" flexWrap={true}>
            {course?.title}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              background: "#68B3C8",
              ":hover": {
                background: "#3d91a9",
              },
            }}
            onClick={() =>
              navigate(
                `/dashboard/course-categories/course-preview/${course?.id}`
              )
            }
          >
            {buttonText ? buttonText : "More"}
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CourseCard;
