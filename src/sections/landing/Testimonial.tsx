'use client';

// material-ui
import { useTheme, alpha } from '@mui/material/styles';
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
  const theme = useTheme();
  const cardBg = alpha(theme.palette.common.black, 0.88);
  const stroke = 'rgba(255,255,255,0.10)';
  const subtle = alpha('#fff', 0.82);
  const muted = alpha('#fff', 0.56);

  return (
    <MainCard
      sx={{
        width: { xs: 300, md: 420 },
        my: 0.75,
        mx: 1.5,
        position: 'relative',
        bgcolor: cardBg,
        color: '#fff',
        border: `1px solid ${stroke}`,
        borderRadius: 3,
        boxShadow: '0 10px 30px rgba(0,0,0,.55), inset 0 1px rgba(255,255,255,.05)',
        backdropFilter: 'blur(8px)',
        transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(255,255,255,0.18)',
          boxShadow: '0 16px 48px rgba(0,0,0,.6), inset 0 1px rgba(255,255,255,.06)'
        },
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 12,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0) 20%)'
        }
      }}
    >
      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
        {item.image ? (
          <Avatar
            alt={item.name}
            size="lg"
            src={item.image}
            sx={{
              border: '1px solid rgba(255,255,255,.24)',
              boxShadow: '0 6px 18px rgba(0,0,0,.45)'
            }}
          />
        ) : null}

        <Stack sx={{ gap: 0.75 }}>
          {item.rating ? (
            <Rating
              value={item.rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{
                '& .MuiRating-iconFilled': { color: theme.palette.warning.main },
                '& .MuiRating-iconEmpty': { color: alpha('#fff', 0.24) }
              }}
            />
          ) : null}

          <Typography sx={{ color: subtle, lineHeight: 1.55 }}>{item.text}</Typography>

          <Typography>
            <Typography component="span" variant="caption" sx={{ fontWeight: 700, color: '#fff' }}>
              {item.name}
            </Typography>
            {' · '}
            <Typography component="span" variant="caption" sx={{ color: muted }}>
              {item.designation}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

function KartuDampak({ item }: { item: OutcomeItem }) {
  const stroke = 'gray';
  const subtle = alpha('#fff', 0.9);
  const muted = alpha('#fff', 0.6);

  return (
    <MainCard
      sx={{
        width: { xs: 300, md: 380 },
        my: 0.75,
        mx: 1.5,
        position: 'relative',
        border: `1px solid ${stroke}`,
        bgcolor: 'white',
        color: 'black',
        borderRadius: 3,
        boxShadow: '0 10px 30px rgba(0,0,0,.55), inset 0 1px rgba(255,255,255,.05)',
        backdropFilter: 'blur(8px)',
        transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(255,255,255,0.18)',
          boxShadow: '0 16px 48px rgba(0,0,0,.6), inset 0 1px rgba(255,255,255,.06)'
        },
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 12,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0) 22%)'
        }
      }}
    >
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
              bgcolor: alpha('#fff', 0.06),
              border: '1px solid rgba(255,255,255,.12)'
            }}
            aria-hidden
          >
            <Icon icon={item.icon} width={20} height={20} />
          </Box>

          {item.context ? (
            <Typography className="text-black" variant="overline" sx={{ letterSpacing: 0.6, color: muted, textTransform: 'none' }}>
              {item.context}
            </Typography>
          ) : null}
        </Stack>

        {/* Judul + Dampak */}
        <Typography className="text-black" variant="h6" sx={{ lineHeight: 1.25, color: subtle }}>
          {item.title}
        </Typography>
        <Typography className="text-black">{item.impact}</Typography>
      </Stack>
    </MainCard>
  );
}

// ============================== Komponen Halaman ============================== //
export default function BagianBuktiSosial() {
  const theme = useTheme();

  // Biarkan kosong sebelum ada testimoni asli
  const testimonials: TestiItem[] = [];

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
  const para = alpha('#fff', 0.64);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        // Latar gelap + glow
        backgroundColor: '#0b0b0b',
        backgroundImage: `
          radial-gradient(900px 600px at 10% -10%, rgba(99,102,241,.12), transparent 60%),
          radial-gradient(700px 500px at 100% 10%, rgba(236,72,153,.08), transparent 55%),
          radial-gradient(700px 500px at 0% 100%, rgba(34,197,94,.06), transparent 55%)
        `,
        // Grid halus di atas
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0, rgba(0,0,0,0.95) 60%, rgba(0,0,0,1) 100%)'
        }
      }}
      // className="-mb-44"
    >
      {/* Kepala halaman */}
      <Box sx={{ mt: { md: 8, xs: 0 } }}>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center', mb: 4, pt: 3 }}>
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 24, delay: 0.1 }}
              >
                <Typography variant="h2" sx={{ color: '#fff' }}>
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
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 24, delay: 0.2 }}
              >
                <Typography sx={{ color: para }}>
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
      <Box>
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
    </Box>
  );
}
