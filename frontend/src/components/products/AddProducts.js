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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from "../../redux/actions/productActions";

const theme = createTheme();

export default function AddProducts() {
  const dispatch = useDispatch();
  const [name,setName] = useState("");
    const [price, setprice] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [Type, setType] = useState("");
    const [qte,setQte] = useState(0);
   // console.log(image.name)
   

  const handleSubmit = (event) => {
    
    event.preventDefault();
    const data = new FormData();
    data.append("name",name)
    data.append("price",price)
    data.append("description",description)
    data.append("file",image)
    data.append("Type",Type)
    data.append("qte",qte)
    
    console.log(image)
    dispatch(addProducts(data))
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
          <Typography component="h1" variant="h5">
            Add a product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              type="String"
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange= {(e)=>setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="price"
              name="price"
              type="Number"
              autoComplete="price"
              autoFocus
              onChange= {(e)=>setprice(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="qte"
              label="qte"
              name="qte"
              type="Number"
              autoComplete="qte"
              autoFocus
              onChange= {(e)=>setQte(e.target.value)}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="String"
              id="description"
              label="description"
              name="description"
              autoComplete="description"
              autoFocus
              onChange= {(e)=>setDescription(e.target.value)}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="String"
              id="Type"
              label="Type"
              name="Type"
              autoComplete="Type"
              autoFocus
              onChange= {(e)=>setType(e.target.value)}
            />
            <Button variant="contained" component="label">
              Upload image
              <input type="file" id="file" name="file" hidden  onChange= {(e)=>setImage(e.target.files[0])} />
             
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD A PRODUCT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
