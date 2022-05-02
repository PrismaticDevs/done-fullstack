import { Button, Typography, Container, Box } from "@mui/material";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <Container sx={{ marginTop: "6em" }}>
      <Typography sx={{ fontSize: "2.5em", textAlign: "center" }}>
        About
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">Hi</Button>
      </Box>
    </Container>
  );
};

export default About;
