// material-ui
import Divider from '@mui/material/Divider';

// project-imports
import Hero from 'sections/landing/Hero';
import Combo from 'sections/landing/Combo';
import AboutUs from 'sections/landing/AboutUs';
import Testimonial from 'sections/landing/Testimonial';
import Subscribe from 'sections/landing/Subscribe';
import SimpleLayout from 'layout/SimpleLayout';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  return (
    <div className="bg-black">
      <SimpleLayout>
        <Hero />
        <AboutUs />
        {/* <Apps /> */}
        <Combo />
        <Testimonial />
        <Subscribe />
        <Divider sx={{ borderColor: 'secondary.light' }} />
      </SimpleLayout>
      {/* <SmoothCursor /> */}
    </div>
  );
}
