'use client';

// material-ui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// pihak ketiga
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// impor proyek
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';

// aset (opsional untuk mode testimoni)
import Avatar from 'components/@extended/Avatar';
const Avatar1 = '/assets/images/users/avatar-6.png';
const Avatar2 = '/assets/images/users/avatar-1.png';

// iconify
import { Icon } from '@iconify/react';

// ================================ Tipe Data ================================ //
type TestiItem = {
  image?: string;
  text: string;
  name: string;
  designation: string;
  rating?: number;
};

type OutcomeItem = {
  title: string; // nama automasi (contoh: "Invoice Otomatis")
  impact: string; // dampak utama (tanpa angka/persen)
  context?: string; // opsional: industri/lingkup singkat
  icon: string; // nama ikon Iconify (contoh: 'mdi:invoice-text-outline')
};

// ============================ Komponen Kecil =========================== //
function KartuTestimoni({ item }: { item: TestiItem }) {
  return (
    <MainCard sx={{ width: { xs: 300, md: 420 }, my: 0.75, mx: 1.5 }}>
      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
        {item.image ? <Avatar alt={item.name} size="lg" src={item.image} /> : null}
        <Stack sx={{ gap: 0.5 }}>
          {item.rating ? <Rating value={item.rating} precision={0.5} readOnly size="small" /> : null}
          <Typography sx={{ color: 'text.primary' }}>{item.text}</Typography>
          <Typography>
            <Typography component="span" variant="caption" sx={{ fontWeight: 600 }}>
              {item.name}
            </Typography>
            {' · '}
            <Typography component="span" variant="caption" sx={{ color: 'text.secondary' }}>
              {item.designation}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

function KartuDampak({ item }: { item: OutcomeItem }) {
  return (
    <MainCard sx={{ width: { xs: 300, md: 380 }, my: 0.75, mx: 1.5, borderStyle: 'solid', borderColor: 'divider' }}>
      <Stack sx={{ gap: 1 }}>
        {/* Ikon + konteks */}
        <Stack direction="row" alignItems="center" sx={{ gap: 1 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'action.hover'
            }}
            aria-hidden
          >
            <Icon icon={item.icon} width={20} height={20} />
          </Box>
          {item.context ? (
            <Typography variant="overline" sx={{ letterSpacing: 0.6, color: 'text.secondary' }}>
              {item.context}
            </Typography>
          ) : null}
        </Stack>

        {/* Judul + Dampak */}
        <Typography variant="h6" sx={{ lineHeight: 1.25 }}>
          {item.title}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{item.impact}</Typography>
      </Stack>
    </MainCard>
  );
}

// ============================== Komponen Halaman ============================== //
export default function BagianBuktiSosial() {
  const theme = useTheme();

  // Biarkan kosong sebelum ada testimoni asli
  const testimonials: TestiItem[] = [
    // Contoh jika nanti sudah ada:
    // {
    //   image: Avatar1,
    //   text: '“Proses dari pesanan sampai pengiriman jadi mulus setelah otomasi diterapkan.”',
    //   name: 'Andra',
    //   designation: 'Pemilik Toko Daring',
    //   rating: 5
    // },
    // {
    //   image: Avatar2,
    //   text: '“Integrasi kanal layanan rapi, tim bisa fokus ke prioritas yang lebih penting.”',
    //   name: 'Nadia',
    //   designation: 'Kepala Operasional',
    //   rating: 4.5
    // }
  ];

  // Sorotan dampak — tanpa angka/persen + ikon Iconify
  const outcomes: OutcomeItem[] = [
    {
      title: 'Invoice Otomatis',
      impact: 'Dokumen penagihan terbentuk rapi, cepat diproses, dan mudah ditelusuri.',
      context: 'Logistik · Banyak cabang',
      icon: 'mdi:invoice-text-outline'
    },
    {
      title: 'Bot Layanan Pelanggan',
      impact: 'Pertanyaan berulang dijawab otomatis; agen fokus pada kasus prioritas.',
      context: 'Niaga Daring · Lalu lintas pesan tinggi',
      icon: 'mdi:robot-happy-outline'
    },
    {
      title: 'Orkestrasi Alur Kerja',
      impact: 'Tugas berulang tertata dengan pengingat, batas waktu, dan eskalasi yang jelas.',
      context: 'Distribusi · Operasi harian',
      icon: 'mdi:cogs'
    },
    {
      title: 'Pemantauan KPI Langsung',
      impact: 'Kinerja harian tersaji dalam satu dasbor sehingga rapat dan keputusan lebih terarah.',
      context: 'Aplikasi berlangganan · Tim lintas fungsi',
      icon: 'mdi:chart-timeline-variant'
    },
    {
      title: 'e-DO & Tanda Tangan Digital',
      impact: 'Penerbitan dan validasi dokumen rapi; proses kurir dan verifikasi lapangan lebih sederhana.',
      context: 'Transportasi · Dokumen operasional',
      icon: 'mdi:file-sign'
    },
    {
      title: 'Unggah Konten Lintas Kanal',
      impact: 'Konten dan pelaporan otomatis di banyak kanal dengan standar merek yang konsisten.',
      context: 'Pemasaran · Banyak platform',
      icon: 'mdi:share-variant-outline'
    }
  ];

  const adaTestimoni = testimonials.length > 0;

  return (
    <>
      {/* Kepala halaman */}
      <Box sx={{ mt: { md: 15, xs: 2.5 } }}>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center', mb: 4, pt: 3 }}>
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <Typography variant="h2" className="text-white">
                  {adaTestimoni ? (
                    <>
                      Suara Pengguna{' '}
                      <Typography variant="h2" component="span" sx={{ color: 'primary.main' }}>
                        dan Keberhasilan
                      </Typography>
                    </>
                  ) : (
                    <>
                      Sorotan{' '}
                      <Typography variant="h2" component="span" sx={{ color: 'primary.main' }}>
                        Dampak
                      </Typography>
                    </>
                  )}
                </Typography>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.35 }}
              >
                <Typography className="text-gray-400">
                  {adaTestimoni
                    ? 'Ringkasan pengalaman pengguna setelah penerapan otomasi pada berbagai konteks operasi.'
                    : 'Perubahan yang biasanya terjadi setelah otomasi: apa yang berubah dan mengapa berdampak pada operasional.'}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Isi */}
      <Box sx={{ mb: { md: 10, xs: 2.5 } }}>
        <Grid container spacing={4}>
          {adaTestimoni ? (
            <>
              <Grid sx={{ direction: theme.direction }} size={12}>
                <FadeInWhenVisible>
                  <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'} gradient={false} speed={35}>
                    {testimonials.map((item, idx) => (
                      <KartuTestimoni key={`t-baris1-${idx}`} item={item} />
                    ))}
                  </Marquee>
                </FadeInWhenVisible>
              </Grid>
              <Grid sx={{ direction: theme.direction }} size={12}>
                <FadeInWhenVisible>
                  <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'} gradient={false} speed={35}>
                    {testimonials
                      .slice()
                      .reverse()
                      .map((item, idx) => (
                        <KartuTestimoni key={`t-baris2-${idx}`} item={item} />
                      ))}
                  </Marquee>
                </FadeInWhenVisible>
              </Grid>
            </>
          ) : (
            <>
              <Grid sx={{ direction: theme.direction }} size={12}>
                <FadeInWhenVisible>
                  <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'} gradient={false} speed={35}>
                    {outcomes.map((item, idx) => (
                      <KartuDampak key={`o-baris1-${idx}`} item={item} />
                    ))}
                  </Marquee>
                </FadeInWhenVisible>
              </Grid>
              <Grid sx={{ direction: theme.direction }} size={12}>
                <FadeInWhenVisible>
                  <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'} gradient={false} speed={35}>
                    {outcomes
                      .slice()
                      .reverse()
                      .map((item, idx) => (
                        <KartuDampak key={`o-baris2-${idx}`} item={item} />
                      ))}
                  </Marquee>
                </FadeInWhenVisible>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
}
