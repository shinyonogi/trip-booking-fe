import { motion, Variants } from 'framer-motion';
import { InViewHookResponse, useInView } from 'react-intersection-observer';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import './KyotoFeatureSection.css';

import ButtonPrimary from '../../../../components/buttons/ButtonPrimary';

import featureImage1 from '../../../../assets/images/kyoto/featureImage1.jpg';

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

const KyotoFeatureSection: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

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

    return (
        <>
            <section className='kyoto-feature'>
                <motion.div
                    className='kyoto-feature__left'
                    ref={refLeft}
                    initial="hidden"
                    animate={inViewLeft ? "visible" : "hidden"}
                    variants={variantsLeft}
                >
                    <img
                        className='kyoto-feature__left-img'
                        alt='Woman in traditional Japanese dress with umbrella walks in a traditional-looking Japanese street.'
                        src={featureImage1}
                    />
                </motion.div>
                <motion.div
                    className='kyoto-feature__right'
                    ref={refRight}
                    initial="hidden"
                    animate={inViewRight ? "visible" : "hidden"}
                    variants={variantsRight}
                >
                    <h2 className='kyoto-feature__right-title'>A City with Timeless Elegance</h2>
                    <p className='kyoto-feature__right-description'>Kyoto, a former capital with over a millennium of heritage, embodies Japan's deep-rooted traditions and history. Blending ancient temples with modern rhythms and scenic geisha districts, it offers a captivating voyage through time.</p>
                    <div className='kyoto_feature__right--button__wrapper'>
                        <ButtonPrimary label='DISCOVER OPTIONS' onClick={() => navigate('/')}/>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default KyotoFeatureSection;
