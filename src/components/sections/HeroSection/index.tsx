import { useEffect, useState } from 'react';

import './HeroSection.css';

type HeroSectionProps = {
  heroCityNameJp: string,
  heroCityNameEn: string,
  heroBackgroundImages: string[]
};

const HeroSection: React.FC<HeroSectionProps> = ({heroCityNameJp, heroCityNameEn, heroBackgroundImages}) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollIndicatorBounce, setScrollIndicatorBounce] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollIndicatorBounce((prev) => !prev);
    }, 1000);

    return () => {clearInterval(intervalId)};
  });

  useEffect(() => {
    const handleScroll = () => {
        const offset: number = window.scrollY;
        const windowHeight: number = window.innerHeight;
        setIsScrolled(offset > windowHeight * 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => { window.removeEventListener('scroll', handleScroll);
  }}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroBackgroundImages.length);
    }, 5000);

    return () => {clearInterval(interval)};
  }, [heroBackgroundImages.length]);

  return (
    <section className='hero'>
      {heroBackgroundImages.map((img, idx) => (
        <div
          key={idx}
          className={`hero__image ${imageIndex === idx ? 'hero__image--visible' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className='hero__title-container'>
        <h1 className='hero__title hero__title--japanese'>{heroCityNameJp}</h1>
        <h2 className='hero__title hero__title--english'>- {heroCityNameEn} -</h2>
      </div>
      <h1 className={
        `hero__scroll-indicator
        ${scrollIndicatorBounce ? 'hero__scroll-indicator--bouncing': ''}
        ${isScrolled ? 'hero__scroll-indicator--scrolled' : ''}`
      }>
        ↓
      </h1>
    </section>
  );
};

export default HeroSection;
