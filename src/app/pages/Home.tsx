import { HeroSlider } from '../components/HeroSlider';
import { PromoSection } from '../components/PromoSection';
import { Benefits } from '../components/Benefits';
import { ContactZone } from '../components/ContactZone';
import { DeliveryInfo } from '../components/DeliveryInfo';

export function Home() {
  return (
    <>
      <HeroSlider />
      <PromoSection />
      <Benefits />
      <ContactZone />
      <DeliveryInfo />
    </>
  );
}