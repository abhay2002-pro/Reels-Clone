import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Signup.module.css";
import insta from "../Assets/Instagram.JPG";
import { Button, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function MultiActionAreaCard() {
  const useStyles = makeStyles({
    text1:{
      color: 'grey',
      textAlign: 'centre'
    }
  })
  const classes = useStyles();
  return (
    <div className= {styles.signupWrapper}>
      <div className = {styles.signupCard}>
      <Card variant="outlined">
          <div className= {styles.instaLogo}>
            <img src={insta} alt="Instagram" />
          </div>
          <CardContent>
            <Typography variant="subtitle1" className={classes.text1}>
              Sign up to see photos and videos from friends.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
      </div>
    </div>
  );
}
