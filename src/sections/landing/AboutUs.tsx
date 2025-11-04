'use client';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import { ThemeMode } from 'config';

// icons
import { Call } from '@wandersonalwes/iconsax-react';

// assets
const figmaLight = '/assets/images/landing/figma-light.png';
const figmaDark = '/assets/images/landing/figma-dark.png';

// =============================|| LANDING - FIGMA PAGE ||============================= //

export default function AboutUs() {
  const theme = useTheme();

  const FigmaImg = theme.palette.mode === ThemeMode.DARK ? figmaDark : figmaLight;

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid size={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
            <Grid size={{ sm: 10, md: 6 }}>
              <Grid container spacing={1} justifyContent="center">
                <Grid size={12}>
                  <Typography className="text-white" variant="h2" sx={{ mb: 2 }}>
                    Tentang Kami
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography variant="body1" className="text-gray-400">
                    Kami membantu bisnis mengubah proses manual menjadi alur kerja otomatis berbasis AI. Hasilnya: biaya turun, kecepatan
                    naik, keputusan lebih akurat. Fokus kami pada solusi nyata—dari integrasi sistem, bot operasional, hingga dashboard
                    realtime—agar timmu bisa fokus bertumbuh.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 9 }}>
          <Box sx={{ position: 'relative', mb: 3 }}>
            <CardMedia component="img" src={FigmaImg} sx={{ width: 1, m: '0 auto' }} />
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={1.5}>
            <Grid sx={{ textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center' }} size={{ xs: 12 }}>
              <Button
                component={Link}
                target="_blank"
                href="https://wa.me/0895611861777?text=Halo,%20saya%20ingin%20bertanya%20terkait%20automation,%20apakah%20bisa?"
                size="large"
                color="primary"
                variant="contained"
                startIcon={<Call />}
              >
                Hubungi Kami
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
