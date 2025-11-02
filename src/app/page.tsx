// material-ui
import Divider from '@mui/material/Divider';

// project-imports
import Hero from 'sections/landing/Hero';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import AboutUs from 'sections/landing/AboutUs';
import Apps from 'sections/landing/Apps';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import Subscribe from 'sections/landing/Subscribe';
import SimpleLayout from 'layout/SimpleLayout';

// ==============================|| LANDING PAGE ||============================== //

export default function Landing() {
  return (
    <div className="bg-black">
      <SimpleLayout>
        <Hero />
        <AboutUs />
        <Apps />
        <Combo />
        <Testimonial />
        <Subscribe />
        <Divider sx={{ borderColor: 'secondary.light' }} />
      </SimpleLayout>
    </div>
  );
}
