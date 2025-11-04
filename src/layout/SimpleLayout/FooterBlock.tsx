// material-ui
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// pihak ketiga
import { motion } from 'framer-motion';

// impor proyek
import Logo from 'components/logo';

// ikon sosial
import { Dribbble, Youtube } from '@wandersonalwes/iconsax-react';
import GithubIcon from '../../../public/assets/third-party/github';

// gaya tautan footer
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

type ShowProps = {
  isFull?: boolean;
};

// ==============================|| FOOTER HALAMAN ||============================== //

export default function FooterBlock({ isFull }: ShowProps) {
  const linkSX = {
    color: 'text.secondary',
    fontWeight: 400,
    opacity: '0.8',
    cursor: 'pointer',
    '&:hover': { opacity: 1 }
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 5 : 10, pb: 10, bgcolor: 'white', borderColor: 'divider' }}>
        <Container>
          <Grid container spacing={2}>
            {/* Kolom Kiri: Logo + Deskripsi Singkat */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
              >
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <Logo to="/" />
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, maxWidth: 360 }}>
                      Kami membantu tim mengubah proses manual menjadi otomasi berbasis AI—lebih rapi, cepat, dan mudah diukur. Fokus pada
                      hasil; biarkan pekerjaan berulang ditangani sistem.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>

            {/* Kolom Kanan: Navigasi */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                {/* Perusahaan */}
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Perusahaan</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.0 } }}>
                      <FooterLink href="/tentang-kami" underline="none">
                        Tentang Kami
                      </FooterLink>
                      <FooterLink href="/portofolio" underline="none">
                        Portofolio
                      </FooterLink>
                      <FooterLink href="/tim" underline="none">
                        Tim
                      </FooterLink>
                      <FooterLink href="/kontak" underline="none">
                        Kontak
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>

                {/* Layanan */}
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Layanan</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.0 } }}>
                      <FooterLink href="/demo/invoice-otomatis" underline="none">
                        Invoice Otomatis
                      </FooterLink>
                      <FooterLink href="/demo/bot-cs" underline="none">
                        Bot Layanan Pelanggan
                      </FooterLink>
                      <FooterLink href="/demo/e-do-ttd" underline="none">
                        e-DO & Tanda Tangan
                      </FooterLink>
                      <FooterLink href="/demo/workflow-operasional" underline="none">
                        Orkestrasi Workflow
                      </FooterLink>
                      <FooterLink href="/demo/monitoring-kpi" underline="none">
                        Monitoring KPI
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>

                {/* Bantuan */}
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Bantuan</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.0 } }}>
                      <FooterLink href="/dokumen" underline="none">
                        Dokumentasi
                      </FooterLink>
                      <FooterLink href="/peta-jalan" underline="none">
                        Peta Jalan
                      </FooterLink>
                      <FooterLink href="/minta-fitur" underline="none">
                        Ajukan Fitur
                      </FooterLink>
                      <FooterLink href="/pusat-bantuan" underline="none">
                        Pusat Bantuan
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>

                {/* Kebijakan */}
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Kebijakan</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.0 } }}>
                      <FooterLink href="/kebijakan-privasi" underline="none">
                        Kebijakan Privasi
                      </FooterLink>
                      <FooterLink href="/syarat-layanan" underline="none">
                        Syarat Layanan
                      </FooterLink>
                      <FooterLink href="/status" underline="none">
                        Status Sistem
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bar Bawah */}
      <Box sx={{ py: 2.4, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'white' }}>
        <Container>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography>
                © Dibangun dengan sepenuh hati oleh Tim{' '}
                <Link href="/" underline="none">
                  MusyanA.I
                </Link>
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                <Grid>
                  <Tooltip title="GitHub">
                    <Link href="https://github.com/" underline="none" target="_blank" sx={linkSX}>
                      <GithubIcon size={20} />
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip title="Dribbble">
                    <Link href="https://dribbble.com/" underline="none" target="_blank" sx={linkSX}>
                      <Dribbble variant="Bold" size={20} />
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip title="YouTube">
                    <Link href="https://www.youtube.com/" underline="none" target="_blank" sx={linkSX}>
                      <Youtube variant="Bold" size={20} />
                    </Link>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
