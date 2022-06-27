import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { toLastStep } from "../../redux/stepper/stepperActions";
import ListItemIcon from "@mui/material/ListItemIcon";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";

function CoursePreviw() {
  const dispatch = useDispatch();
  const { lessons } = useSelector((state) => state.lessons);
  const {
    courseName,
    instructorName,
    instructorImg,
    courseDuration,
    courcePrice,
  } = useSelector((state) => state.course);
  const theme = useTheme();
  console.log("instructorImg", instructorImg);
  return (
    <Box sx={{ width: " 60% ", mx: "auto" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: " 40% " }}
          image={
            instructorImg
              ? URL.createObjectURL(instructorImg)
              : "https://th.bing.com/th/id/OIP.BkoXurD30qD41Q4pDKvDAAHaGH?w=237&h=196&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          }
          alt="Live from space album cover"
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {courseName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ mb:2,textDecoration:'underline'}}
            >
              By {instructorName}
            </Typography>
            <Typography
              sx={{ display: "flex" }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <OndemandVideoIcon sx={{ mx: 2 }} />
              {courseDuration}
              hrs
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ display: "flex" }}
            >
              <MonetizationOnIcon sx={{ mx: 2 }}/>
              {courcePrice} 
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Box sx={{ my: 2 }}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            mx: "auto",
          }}
        >
          {lessons?.map(({ name, level }) => {
            const labelId = `checkbox-list-label-${name}`;

            return (
              <ListItem
              sx={{boxShadow:'0px 0px 2px #888888'}}
                key={name}
                secondaryAction={
                  <IconButton>
                    <Typography>{level}</Typography>
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SlowMotionVideoIcon />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Button
        sx={{ backgroundColor: "white", color: "black", m: 1 }}
        variant="contained"
        onClick={() => dispatch(toLastStep())}
      >
        Back
      </Button>
    </Box>
  );
}

export default CoursePreviw;
