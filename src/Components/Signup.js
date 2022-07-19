import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Signup.module.css";
import insta from "../Assets/Instagram.JPG";
import { Button, CardActions, Alert, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";

export default function Signup() {
  const useStyles = makeStyles({
    text1: {
      color: "grey",
      textAlign: "center",
    },
    card2: {
      height: "5vh",
      marginTop: "2%",
    },
  });
  const classes = useStyles();
  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupCard}>
        <Card variant="outlined">
          <div className={styles.instaLogo}>
            <img src={insta} alt="Instagram" />
          </div>
          <CardContent>
            <Typography variant="subtitle1" className={classes.text1}>
              Sign up to see photos and videos from friends.
            </Typography>
            {true && <Alert severity="error">Check it out</Alert>}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <Button
              size="small"
              color="secondary"
              fullWidth={true}
              variant="outlined"
              margin="dense"
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload Profile Image
              <input type="file" accept="image/" hidden />
            </Button>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              fullWidth={true}
              variant="contained"
            >
              Share
            </Button>
          </CardActions>
          <CardContent>
            <Typography className={classes.text1} varaint="subtitle1">
              By signing up, you agree to the Terms, Conditions and Cookies
              policy.
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.card2}>
          <Typography className={classes.text1} variant="subtitle1">
            Having an account ? <Link to="/login" style={{textDecoration : "none"}}>Login</Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}
