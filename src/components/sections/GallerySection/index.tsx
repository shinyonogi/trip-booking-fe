import { motion, Variants } from "framer-motion";
import { InViewHookResponse, useInView } from "react-intersection-observer";

import "./GallerySection.css";


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

type GallerySectionProps = {
    galleryTitle: string;
    galleryVideo: string;
    galleryImages: string[];
};


const GallerySection: React.FC<GallerySectionProps> = ({galleryTitle, galleryVideo, galleryImages}) => {
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

    const variantsMedia: VariantDefinition = {
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

    const refAndInViewMedia = {threshold: 0.1, triggerOnce: false};

    const [refSection, inViewSection]: InViewHookResponse = useInView({
        threshold: 0.05,
        triggerOnce: false
    });

    const [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8] = [...galleryImages];

    const [refVideo, inViewVideo]: InViewHookResponse = useInView(refAndInViewMedia);
    const [refImagesRow1First, inViewImagesRow1First]: InViewHookResponse = useInView(refAndInViewMedia);
    const [refImageRow1Second, inViewImageRow1Second]: InViewHookResponse = useInView(refAndInViewMedia);
    const [refImageRow1Third, inViewImageRow1Third]: InViewHookResponse = useInView(refAndInViewMedia);
    const [refImageRow2, inViewImageRow2]: InViewHookResponse = useInView(refAndInViewMedia);
    const [refImagesRow3, inViewImagesRow3]: InViewHookResponse = useInView(refAndInViewMedia);

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
                    {galleryTitle}
                </motion.h1>
                <div className="kyoto-gallery__media__container">
                    <motion.video
                        className="kyoto-gallery__video"
                        ref={refVideo}
                        initial='hidden'
                        animate={inViewVideo ? 'visible' : 'hidden'}
                        variants={variantsMedia}
                        autoPlay loop muted
                    >
                        <source src={galleryVideo} type="video/mp4"/>
                    </motion.video>
                    <div className="kyoto-gallery__images-row-1">
                        <div className="kyoto-gallery__images-column-1">
                            <motion.div
                                className="kyoto-gallery__images-column-1__image-1 kyoto-gallery__image"
                                ref={refImagesRow1First}
                                initial='hidden'
                                animate={inViewImagesRow1First ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                            >
                                <img src={galleryImage1} alt=""/>
                                <h3 className="kyoto-gallery__image__title">法隆寺</h3>
                            </motion.div>
                            <motion.img
                                className="kyoto-gallery__images-column-1__image-2"
                                ref={refImageRow1Second}
                                initial='hidden'
                                animate={inViewImageRow1Second ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                                src={galleryImage2}
                                alt=""
                            />
                        </div>
                        <div className="kyoto-gallery__images-column-2">
                            <motion.img
                                className="kyoto-gallery__images-column-2__image-1"
                                ref={refImagesRow1First}
                                initial='hidden'
                                animate={inViewImagesRow1First ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                                src={galleryImage3}
                                alt=""
                            />
                            <motion.img
                                className="kyoto-gallery__images-column-2__image-2"
                                ref={refImageRow1Third}
                                initial='hidden'
                                animate={inViewImageRow1Third ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                                src={galleryImage4}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="kyoto-gallery__images-row-2">
                        <motion.img
                            className="kyoto-gallery__images-row-2__image-1"
                            ref={refImageRow2}
                            initial='hidden'
                            animate={inViewImageRow2 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                            src={galleryImage6}
                            alt=""
                        />
                    </div>
                    <div className="kyoto-gallery__images-row-3">
                        <motion.img
                            className="kyoto-gallery__images-row-3__image-1"
                            ref={refImagesRow3}
                            initial='hidden'
                            animate={inViewImagesRow3 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                            src={galleryImage5}
                            alt=""
                        />
                        <motion.img
                            className="kyoto-gallery__images-row-3__image-2"
                            ref={refImagesRow3}
                            initial='hidden'
                            animate={inViewImagesRow3 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                            src={galleryImage7}
                            alt=""/>
                        <motion.img
                            className="kyoto-gallery__images-row-3__image-3"
                            ref={refImagesRow3}
                            initial='hidden'
                            animate={inViewImagesRow3 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                            src={galleryImage8}
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default GallerySection;
