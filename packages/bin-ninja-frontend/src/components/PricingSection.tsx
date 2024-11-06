import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const PricingSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Monthly Plan
              </Typography>
              <Typography variant="h3" color="primary">
                $5/month
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                • Weekly bin service
                • Best value
                • Automatic payments
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                Weekly Plan
              </Typography>
              <Typography variant="h3" color="primary">
                $6/week
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                • Weekly bin service
                • Flexible payments
                • Pay as you go
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingSection;