// pages/index.js
import Slider from '../components/CardSlider';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">My Slider</h1>
      <Slider />
    </div>
  );
}