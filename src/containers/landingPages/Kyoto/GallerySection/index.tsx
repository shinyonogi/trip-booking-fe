import { motion, Variants } from "framer-motion";
import { InViewHookResponse, useInView } from "react-intersection-observer";

import "./KyotoGallerySection.css";

interface VariantDefinition extends Variants {
    hidden: { opacity: number; y?: number };
    visible: {
        opacity: number;
        y?: number;
        transition: {
            opacity?: { duration: number };
            y?: { duration: number };
        };
    };
}

const KyotoGallery: React.FC = () => {
    const [ref, inView]: InViewHookResponse = useInView({
        threshold: 0.05,
        triggerOnce: false
    });

    const variants: VariantDefinition = {
        hidden: { opacity: 0, y: 100},
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 2 },
            y: { duration: 1}
          },
        }
    };

    return (
        <>
            <section
                className={`kyoto-gallery ${inView ? 'kyoto-gallery--scrolled' : ''}`}
                ref={ref}
            >
                <motion.h1
                    className="kyoto-gallery__title"
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                >"Life's Most Enchanting Moments Await"</motion.h1>
            </section>
        </>
    )
};

export default KyotoGallery;
