import { useEffect, useState } from 'react';
import './KyotoHeroSection.css';

import heroImage1 from '../../../../assets/images/kyoto/heroImage1.jpg';
import heroImage2 from '../../../../assets/images/kyoto/heroImage2.jpg';
import heroImage3 from '../../../../assets/images/kyoto/heroImage3.jpg';


const KyotoHeroSection: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const images: string[] = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='kyoto-hero'>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`kyoto-hero__image ${imageIndex === idx ? 'kyoto-hero__image--visible' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className='kyoto-hero__title-container'>
        <h1 className='kyoto-hero__title kyoto-hero__title--japanese'>京都</h1>
        <h2 className='kyoto-hero__title kyoto-hero__title--english'>- Kyoto -</h2>
      </div>
      <h1 className='kyoto-hero__scroll-indicator'>↓</h1>
    </section>
  );
};

export default KyotoHeroSection;
