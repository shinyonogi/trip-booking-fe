import { motion, Variants } from 'framer-motion';
import { InViewHookResponse, useInView } from 'react-intersection-observer';
import { useCallback } from 'react';

import ButtonPrimary from '@/components/buttons/ButtonPrimary';

import './FeatureSection.css';


interface VariantDefinition extends Variants {
    hidden: { opacity: number; x?: number };
    visible: {
        opacity: number;
        x?: number;
        transition: {
        opacity?: { duration: number };
        x?: { duration: number };
        };
    };
}

type FeatureSectionProps = {
    featureImage: string;
    featureImageAlt: string;
    featureTitle: string;
    featureDescription: string;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({featureImage, featureImageAlt, featureTitle, featureDescription}) => {
    const [refLeft, inViewLeft]: InViewHookResponse = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const [refRight, inViewRight]: InViewHookResponse = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const variantsLeft: VariantDefinition = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            opacity: { duration: 1 },
          },
        }
    };

      const variantsRight: VariantDefinition = {
        hidden: { opacity: 0, x: 100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            opacity: { duration: 1 },
            x: { duration: 1 },
          },
        }
    };

    const smoothScrollBy = useCallback((height: number, duration: number) => {
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        const animateScroll = () => {
          const now = 'now' in window.performance ? performance.now() : new Date().getTime();
          const timeFraction = Math.min(1, (now - startTime) / duration);
          const easeInOutQuad = timeFraction < 0.5
            ? 2 * timeFraction * timeFraction
            : -1 + (4 - 2 * timeFraction) * timeFraction;
          const scrollY = start + height * easeInOutQuad;

          window.scrollTo(0, scrollY);

          if (timeFraction < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }, []);

    const scrollByFourWindowHeights = () => {
    smoothScrollBy(window.innerHeight * 4.5, 3000);
    };

    return (
        <>
            <section className='feature'>
                <motion.div
                    className='feature__left'
                    ref={refLeft}
                    initial="hidden"
                    animate={inViewLeft ? "visible" : "hidden"}
                    variants={variantsLeft}
                >
                    <img
                        className='feature__left-img'
                        src={featureImage}
                        alt={featureImageAlt}
                    />
                </motion.div>
                <motion.div
                    className='feature__right'
                    ref={refRight}
                    initial="hidden"
                    animate={inViewRight ? "visible" : "hidden"}
                    variants={variantsRight}
                >
                    <div className='feature__right__content'>
                        <h2 className='feature__right-title'><span>"</span>{featureTitle}<span>"</span></h2>
                        <p className='feature__right-description'>{featureDescription}</p>
                        <div className='feature__right--button__wrapper'>
                            <ButtonPrimary label='DISCOVER OPTIONS' onClick={scrollByFourWindowHeights}/>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default FeatureSection;
