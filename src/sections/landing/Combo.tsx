'use client';

// material-ui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

// third-party
import { motion } from 'framer-motion';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import { useIspValue } from 'hooks/useIspValue';

// icons
import { Icon } from '@iconify/react';
import { ExportSquare } from '@wandersonalwes/iconsax-react';

// dummy thumbnails (pakai gambar placeholder yang sudah ada)
const dummyThumb = '/assets/images/landing/feature-components.png';

// ==============================|| LANDING - DEMO AUTOMASI ||============================== //

type DemoItem = {
  icon: string; // Iconify name, ex: 'mdi:invoice-text-outline'
  title: string; // Nama automasi
  description: string; // Deskripsi singkat manfaat
  preview: string; // URL/route demo
  label?: string; // Label tombol
  secondary?: { url: string; label: string };
  thumb?: string; // Thumbnail (dummy default)
};

const Demos: DemoItem[] = [
  {
    icon: 'mdi:invoice-text-outline',
    title: 'Invoice Otomatis',
    description: 'Buat & kirim invoice otomatis dari order masuk. Konsisten, cepat, mudah ditelusuri.',
    preview: '/demo/invoice-otomatis',
    label: 'Lihat Demo',
    secondary: { url: '/docs/arsitektur/invoice', label: 'Arsitektur' },
    thumb: dummyThumb
  },
  {
    icon: 'mdi:robot-happy-outline',
    title: 'Bot CS 24/7',
    description: 'Jawab pertanyaan berulang otomatis via WhatsApp/Telegram. Agent fokus ke eskalasi.',
    preview: '/demo/bot-cs',
    label: 'Lihat Demo',
    secondary: { url: '/docs/arsitektur/bot-cs', label: 'Arsitektur' },
    thumb: dummyThumb
  },
  {
    icon: 'mdi:file-sign',
    title: 'e-DO & Tanda Tangan Digital',
    description: 'Terbitkan DO dengan QR & TTD digital. Validasi cepat, proses kurir lebih simpel.',
    preview: '/demo/e-do-ttd',
    label: 'Lihat Demo',
    secondary: { url: '/docs/arsitektur/e-do', label: 'Arsitektur' },
    thumb: dummyThumb
  },
  {
    icon: 'mdi:cogs',
    title: 'Orkestrasi Workflow Operasional',
    description: 'Atur tugas berulang lintas tim dengan notifikasi, SLA, dan eskalasi jelas.',
    preview: '/demo/workflow-operasional',
    label: 'Lihat Demo',
    secondary: { url: '/docs/arsitektur/workflow', label: 'Arsitektur' },
    thumb: dummyThumb
  },
  {
    icon: 'mdi:chart-timeline-variant',
    title: 'Monitoring KPI Real-time',
    description: 'KPI operasional live dalam satu dashboard. Rapat & keputusan lebih terarah.',
    preview: '/demo/monitoring-kpi',
    label: 'Lihat Demo',
    secondary: { url: '/docs/arsitektur/monitoring', label: 'Arsitektur' },
    thumb: dummyThumb
  },
  {
    icon: 'mdi:share-variant-outline',
    title: 'Omnichannel Posting & Reporting',
    description: 'Konten & laporan otomatis lintas platform dengan standar brand konsisten.',
    preview: '/demo/omnichannel',
    label: 'Lihat Demo',
    secondary: { url: '/docs/arsitektur/omnichannel', label: 'Arsitektur' },
    thumb: dummyThumb
  }
];

export default function ComboPage() {
  const ispValueAvailable = useIspValue();

  const normalizeHref = (url: string) => {
    if (!ispValueAvailable) return url;
    const isExternal = /^https?:\/\//i.test(url);
    if (isExternal) return url;
    return url.includes('?') ? `${url}&isp=1` : `${url}?isp=1`;
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid size={12}>
          <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center', mb: 3, pt: 3 }}>
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <Typography variant="h2" className="text-white">
                  Demo Automasi
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <Typography className="text-gray-400">
                  Lihat contoh alur kerja otomatis yang siap dipakai. Setiap demo menampilkan proses end-to-end, integrasi, dan output yang
                  relevan untuk operasional harianmu.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12}>
          <Grid container spacing={3}>
            {Demos.map((demo, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <Box sx={{ height: '100%', '& > div': { height: '100%' } }}>
                  <FadeInWhenVisible>
                    <MainCard sx={{ height: '100%' }}>
                      <Grid container spacing={3}>
                        {/* Header: Icon + Title */}
                        <Grid size={12}>
                          <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center' }}>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: '14px',
                                display: 'grid',
                                placeItems: 'center',
                                bgcolor: 'action.hover',
                                flexShrink: 0
                              }}
                              aria-hidden
                            >
                              <Icon icon={demo.icon} width={24} height={24} />
                            </Box>
                            <Typography variant="h5">{demo.title}</Typography>
                          </Stack>
                        </Grid>

                        {/* Dummy Thumbnail */}
                        <Grid size={12}>
                          <CardMedia
                            component="img"
                            image={demo.thumb || dummyThumb}
                            alt={`${demo.title} thumbnail`}
                            sx={{ width: '100%', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}
                          />
                        </Grid>

                        {/* Description */}
                        <Grid size={12}>
                          <Typography sx={{ color: 'text.secondary' }}>{demo.description}</Typography>
                        </Grid>

                        {/* Actions */}
                        <Grid size={12}>
                          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 1 }}>
                            <Button
                              variant="contained"
                              color="primary"
                              size="large"
                              startIcon={<ExportSquare />}
                              component={Link}
                              href={normalizeHref(demo.preview)}
                              target={/^https?:\/\//i.test(demo.preview) ? '_blank' : undefined}
                              sx={(theme) => ({
                                fontWeight: 500,
                                bgcolor: 'primary.main',
                                color: 'white',
                                ...theme.applyStyles?.('light', { '&:hover': { color: 'primary.lighter' } })
                              })}
                            >
                              {demo.label ?? 'Buka Demo'}
                            </Button>

                            {demo.secondary ? (
                              <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                                component={Link}
                                href={normalizeHref(demo.secondary.url)}
                                target={/^https?:\/\//i.test(demo.secondary.url) ? '_blank' : undefined}
                                sx={{ fontWeight: 500 }}
                              >
                                {demo.secondary.label}
                              </Button>
                            ) : null}
                          </Stack>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </FadeInWhenVisible>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
