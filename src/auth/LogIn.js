import useStyles from "./LogInStyle";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { FormControl } from "@mui/material";

const HomePage = () => {
  // useEffect(() => {
  //   console.log();
  //   if (localStorage.getItem("AppBar"))  ;
    
  // });
  
  
  const [err, setErr] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let userName1 = "BHARATH KUMAR";
  let userpass1 = "Breeze";
  let userName2 = "MANOJ";
  let userpass2 = "Breeze123";
  let admin = "GANESH";
  let adminPass = "Breeze345";
  const navigate = useNavigate();
  const classes = useStyles();
  const changeName = (e) => {
    setUserName(e.target.value);
    localStorage.getItem('userButton')
  };
  const changePass = (e) => {
    setUserPassword(e.target.value);
  };
  localStorage.setItem("userButton", true);
  const sub = (e) => {
    e.preventDefault();

    // if (userName1 === userName && userpass1 === userPassword) {
    //   console.log(true);
    //   localStorage.setItem("userButton1", true);
    //   navigate("/ProfileBharath");
    // } else {
    //   console.log(false);
    //   setErr("*please enter valid name and password");
    //   localStorage.setItem("userButton1", false);
    // }
    // if (userName2 === userName && userpass2 === userPassword) {
    //   console.log(true);
    //   localStorage.setItem("userButton2", true);
    //   navigate("/ProfileManoj");
    // } else {
    //   console.log(false);
    //   setErr("*please enter valid name and password");
    //   localStorage.setItem("userButton2", false);
    // }
   
    localStorage.removeItem('userButton')
    if (admin === userName && adminPass === userPassword) {
      console.log(true);
     
      navigate("/foodOrder");
    } else {
      console.log(false);
      setErr("*please enter valid name and password");
     
    }
  };
  return (
    <Box className={classes.box}>
      {/* <form className="main"> */}
      <FormControl className={classes.main}>
        <Typography className={classes.heading} variant="h6">
          BREEZEWARE
        </Typography>

        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          onChange={changeName}
          sx={{ width: "80%", marginLeft: "5%" }}
          className={classes.inputField}
        />
        <br></br>

        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          sx={{
            width: "80%",
            marginLeft: "5%",
            marginTop: "2%",
            Color: "WHITE",
          }}
          onChange={changePass}
        />

        <Typography className={classes.errMsg}>{err}</Typography>

        <Button
          variant="contained"
          sx={{ marginLeft: "35%", marginBottom: "5%", width: "35%" }}
          onClick={sub}
          className={classes.btn}>
          log in
        </Button>
      </FormControl>
    </Box>
  );
};
export default HomePage;
