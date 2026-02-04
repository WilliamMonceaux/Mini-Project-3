import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        px: 2, 
        mt: 'auto',
        backgroundColor: '#1976d2', 
        color: 'white' 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ fontSize: '1.4rem', fontWeight: 750}}>
          © 2026 MartWal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export { Footer };