import * as React from "react";
import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./Login.module.css";
import insta from "../Assets/Instagram.JPG";
import { Button, CardActions, Alert, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg from "../Assets/insta.png";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      setError("");
      setLoading(true);
      let res = await login(email, password);
      setLoading(false);
      history.push("/");
    } catch (err) {
      setError(err);
      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
    }
  };
  const useStyles = makeStyles({
    text1: {
      color: "grey",
      textAlign: "center",
    },
    text2: {
      textAlign: "center",
    },
    card2: {
      height: "5vh",
      marginTop: "2%",
    },
  });
  const classes = useStyles();
  return (
    <div className={styles.loginWrapper}>
      <div
        className={styles.imgCar}
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className={styles.car}>
          <CarouselProvider
            naturalSlideWidth={238}
            naturalSlideHeight={423}
            visibleSlides={1}
            totalSlides={5}
            hasMasterSpinner
            isPlaying={true}
            infinite={true}
            dragonEnabled={true}
            touchEnabled={true}
          >
            <Slider>
              <Slide index={0}>
                <Image src={img1}></Image>
              </Slide>
              <Slide index={1}>
                <Image src={img2}></Image>
              </Slide>
              <Slide index={2}>
                <Image src={img3}></Image>
              </Slide>
              <Slide index={3}>
                <Image src={img4}></Image>
              </Slide>
              <Slide index={4}>
                <Image src={img5}></Image>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      <div className={styles.loginCard}>
        <Card variant="outlined">
          <div className={styles.instaLogo}>
            <img src={insta} alt="Instagram" />
          </div>
          <CardContent>
            {error!=="" && <Alert severity="error">{error}</Alert>}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography
              className={classes.text2}
              color="primary"
              variant="subtitle1"
            >
              Forgot Password?
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              fullWidth={true}
              variant="contained"
              onClick={handleClick}
              disabled={loading}
            >
              Log in
            </Button>
          </CardActions>
        </Card>
        <Card variant="outlined" className={classes.card2}>
          <Typography className={classes.text1} variant="subtitle1">
            Don't have an account ?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign up
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}
