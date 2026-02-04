import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { useUserContext } from "../Context/UserContext";
import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
}));

export default function SignUpForm() {
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  const { handleUpdateUser } = useUserContext();

  const validateInputs = () => {
    const password = document.getElementById("password");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    let isValid = true;

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!email.value || email.value.length < 1) {
      setEmailError(true);
      setEmailErrorMessage("Email is required.");
      isValid = false;
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameError || passwordError) return;
    const data = new FormData(event.currentTarget);
    const userName = data.get("name");
    handleUpdateUser({ name: userName });
    console.log({
      name: data.get("name"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <CssBaseline />
      <Stack
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 4 },
        }}
      >
        <Card variant="outlined">
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name" sx={{fontSize: '1.2rem;'}}>Username</FormLabel>
              <TextField
                id="name"
                name="name"
                required
                fullWidth
                size="small"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1.3rem",
                    padding: "10px",
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.1rem",
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email" sx={{fontSize: '1.2rem;'}}>Email</FormLabel>
              <TextField
                id="email"
                name="email"
                required
                fullWidth
                size="small"
                placeholder="JonSnow@gmail.com"
                error={emailError}
                helperText={emailErrorMessage}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1.3rem",
                    padding: "10px",
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.1rem",
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" sx={{ fontSize: '1.2rem'}}>Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                size="small"
                placeholder="••••••"
                type="password"
                id="password"
                error={passwordError}
                helperText={passwordErrorMessage}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1.3rem",
                    padding: "10px",
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "1.1rem",
                  },
                }}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              sx={{ fontSize: "1.2rem", bgcolor: "black" }}
            >
              Sign up
            </Button>
          </Box>
        </Card>
      </Stack>
    </Box>
  );
}