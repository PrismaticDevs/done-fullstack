import { useEffect } from "react";
import { Typography, Container, Box, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import EmailComponent from "../components/Email";

const email = "matthewbrignola@gmail.com";
const phone = 7193515828;

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <Container sx={{ marginTop: "6em" }}>
        <Typography sx={{ fontSize: "2.5em", textAlign: "center" }}>
          Contact
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "2em" }}>
              GitHub <GitHubIcon />
            </Typography>
            <Link
              href="https://github.com/PrismaticDevs"
              sx={{
                textDecoration: "none",
                fontFamily: "roboto",
                cursor: "pointer",
              }}
              target="_blank"
            >
              PrismaticDevs
            </Link>
          </Box>
          <Box sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "2em" }}>
              Email <EmailIcon />
            </Typography>
            <Link
              sx={{
                fontFamily: "roboto",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = `mailto:${email}`;
              }}
            >
              matthewbrignola@gmail.com
            </Link>
          </Box>
          <Box sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "2em" }}>
              LinkedIn <LinkedInIcon />
            </Typography>
            <Link
              sx={{
                fontFamily: "roboto",
                textDecoration: "none",
                cursor: "pointer",
              }}
              href="https://www.linkedin.com/in/matthewbrignola"
              target="_blank"
            >
              linkedin.com/in/matthewbrignola
            </Link>
          </Box>
          <Box sx={{ m: 3 }}>
            <Typography sx={{ fontSize: "2em" }}>
              Phone <PhoneIcon />
            </Typography>
            <Link
              sx={{
                fontFamily: "roboto",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = `tel:${phone}`;
              }}
            >
              (719) 351-5828
            </Link>
          </Box>
        </Box>
        <EmailComponent />
      </Container>
    </>
  );
};

export default Contact;
