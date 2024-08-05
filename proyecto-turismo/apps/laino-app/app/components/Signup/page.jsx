"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function SignUp() {
  const [firstName, setFirstName] = React.useState(false);
  const [firstNameHelperText, setfirstNameHelperText] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailHelperText, setEmailHelperText] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHelperText, setPasswordHelperText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstname = data.get("firstName");

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);
      setEmailHelperText("Por favor ingresa un correo electrónico válido.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }

    if (password.trim() === "") {
      setPasswordError(true);
      setPasswordHelperText("La contraseña no puede estar vacía.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }
    if (firstname.trim() === "") {
      setFirstName(true);
      setfirstNameHelperText("La nombre no puede estar vacía.");
      isValid = false;
    } else {
      setFirstName(false);
      setfirstNameHelperText("");
    }

    if (!isValid) return;
  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={firstName}
                helperText={firstNameHelperText}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailError}
                helperText={emailHelperText}
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
                error={passwordError}
                helperText={passwordHelperText}
              />
            </Grid>
          </Grid>
          <Link href="/">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Link>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/components/Signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
