import { HeroSlider } from '../components/HeroSlider';
import { CategoriesGrid } from '../components/CategoriesGrid';
import { Benefits } from '../components/Benefits';
import { ContactZone } from '../components/ContactZone';
import { DeliveryInfo } from '../components/DeliveryInfo';

export function Home() {
  return (
    <>
      <HeroSlider />
      <CategoriesGrid />
      <Benefits />
      <ContactZone />
      <DeliveryInfo />
    </>
  );
}