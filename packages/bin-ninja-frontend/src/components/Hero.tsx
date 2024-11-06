import { Box, Typography, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Bin Ninja
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Let us handle your bins! For just $5 a month, we'll take care of
          bringing your bins in and out on collection day.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;