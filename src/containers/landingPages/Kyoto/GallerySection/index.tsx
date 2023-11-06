import { motion, Variants } from "framer-motion";
import { InViewHookResponse, useInView } from "react-intersection-observer";

import galleryImage1 from "@/assets/images/kyoto/galleryImage1.jpg";
import galleryImage2 from "@/assets/images/kyoto/galleryImage2.jpg";
import galleryImage3 from "@/assets/images/kyoto/galleryImage3.jpg";
import galleryImage4 from "@/assets/images/kyoto/galleryImage4.jpg";
import galleryImage5 from "@/assets/images/kyoto/galleryImage5.jpg";
import galleryImage6 from "@/assets/images/kyoto/galleryImage6.jpg";
import galleryImage7 from "@/assets/images/kyoto/galleryImage7.jpg";
import galleryImage8 from "@/assets/images/kyoto/galleryImage8.jpg";

import galleryVideo1 from "@/assets/images/kyoto/galleryVideo1.mp4";

import "./KyotoGallerySection.css";

interface VariantDefinition extends Variants {
    hidden: { opacity: number; y?: number, x?: number };
    visible: {
        opacity: number;
        y?: number;
        x?: number;
        transition: {
            opacity?: { duration: number };
            y?: { duration: number };
            x?: { duration: number };
        };
    };
}

const KyotoGallery: React.FC = () => {
    const [refSection, inViewSection]: InViewHookResponse = useInView({
        threshold: 0.05,
        triggerOnce: false
    });

    const [refVideo, inViewVideo]: InViewHookResponse = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const variantsSection: VariantDefinition = {
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

    const variantsVideo: VariantDefinition = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 2 },
            y: { duration: 1 }
          },
        }
    };

    return (
        <>
            <section
                className={`kyoto-gallery ${inViewSection ? 'kyoto-gallery--scrolled' : ''}`}
                ref={refSection}
            >
                <motion.h1
                    className="kyoto-gallery__title"
                    ref={refSection}
                    initial='hidden'
                    animate={inViewSection ? 'visible' : 'hidden'}
                    variants={variantsSection}
                >
                    "Life's Most Enchanting Moments Await"
                </motion.h1>
                <div className="kyoto-gallery__media__container">
                    <motion.video
                        className="kyoto-gallery__video"
                        ref={refVideo}
                        initial='hidden'
                        animate={inViewVideo ? 'visible' : 'hidden'}
                        variants={variantsVideo}
                        autoPlay loop muted
                    >
                        <source src={galleryVideo1} type="video/mp4"/>
                    </motion.video>
                    <div className="kyoto-gallery__images-row-1">
                        <div className="kyoto-gallery__images-column-1">
                            <img className="kyoto-gallery__images-column-1__image-1" src={galleryImage1} alt=""/>
                            <img className="kyoto-gallery__images-column-1__image-2" src={galleryImage2} alt=""/>
                        </div>
                        <div className="kyoto-gallery__images-column-2">
                            <img className="kyoto-gallery__images-column-2__image-1" src={galleryImage3} alt=""/>
                            <img className="kyoto-gallery__images-column-2__image-2" src={galleryImage4} alt=""/>
                        </div>
                    </div>
                    <div className="kyoto-gallery__images-row-2">
                        <img className="kyoto-gallery__images-row-2__image-1" src={galleryImage6} alt=""/>
                    </div>
                    <div className="kyoto-gallery__images-row-3">
                        <img className="kyoto-gallery__images-row-3__image-1" src={galleryImage5} alt=""/>
                        <img className="kyoto-gallery__images-row-3__image-2" src={galleryImage7} alt=""/>
                        <img className="kyoto-gallery__images-row-3__image-3" src={galleryImage8} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
};

export default KyotoGallery;
