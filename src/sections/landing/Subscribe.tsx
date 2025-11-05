// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// project-imports
import FadeInWhenVisible from './Animation';
import { Link } from '@mui/material';
import Lamp from '@/components/ui/lamp';

// ==============================|| LANDING - SUBSCRIBE ||============================== //

export default function SubscribePage() {
  return (
    <Box sx={{ bgcolor: 'black' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 10, xs: 2.5 } }}>
          <Grid size={{ xs: 12 }}>
            <FadeInWhenVisible>
              <Grid container spacing={2} justifyContent="center">
                <Grid size={12}>
                  <Lamp />
                </Grid>
              </Grid>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
