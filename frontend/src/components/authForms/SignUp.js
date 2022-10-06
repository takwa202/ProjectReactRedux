import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "./../../redux/actions/userAction";
import {useNavigate} from 'react-router-dom'
const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [sexe, setSexe] = useState("none");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("fullname", fullname);
    data.append("email", email);
    data.append("password", password);
    data.append("file", image);
    data.append("sexe", sexe);
    // console.log({
    //   fullname:fullname,
    //   email:email,
    //   password:password,  
    //   file:image,
    //   sexe:sexe,
    //  })
    //console.log(image);
    dispatch(
      signUp(data,navigate)
    );
  };
  const updateselectv = (e) => {
    setSexe(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="full Name"
                  autoFocus
                  onChange={(e) => setFullname(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={3} style={{ marginTop: "-23px" }}>
                <InputLabel id="demo-simple-select-label">gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  label="sexe"
                  // onChange={handleChange}
                  onChange={updateselectv}
                >
                  <MenuItem value="none">none</MenuItem>
                  <MenuItem value="women">women</MenuItem>
                  <MenuItem value="man">man</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Button variant="contained" component="label">
                Upload image
                <input
                  type="file"
                  id="file"
                  name="file"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Button>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
               
          
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signein"  variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
