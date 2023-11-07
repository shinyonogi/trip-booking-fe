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
    galleryImageTitles: string[];
};


const GallerySection: React.FC<GallerySectionProps> = ({galleryTitle, galleryVideo, galleryImages, galleryImageTitles}) => {
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
    const [galleryImageTitle1, galleryImageTitle2, galleryImageTitle3, galleryImageTitle4, galleryImageTitle5, galleryImageTitle6, galleryImageTitle7, galleryImageTitle8] = [...galleryImageTitles];

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
                    <motion.div
                        className="kyoto-gallery__video"
                        ref={refVideo}
                        initial='hidden'
                        animate={inViewVideo ? 'visible' : 'hidden'}
                        variants={variantsMedia}
                    >
                        <video autoPlay loop muted>
                            <source src={galleryVideo} type="video/mp4"/>
                        </video>
                        <h3 className="kyoto-gallery__image__title">京都じゃねえ</h3>
                    </motion.div>
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
                                <h3 className="kyoto-gallery__image__title">{galleryImageTitle1}</h3>
                            </motion.div>
                            <motion.div
                                className="kyoto-gallery__images-column-1__image-2 kyoto-gallery__image"
                                ref={refImageRow1Second}
                                initial='hidden'
                                animate={inViewImageRow1Second ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                            >
                                <img src={galleryImage2} alt=""/>
                                <h3 className="kyoto-gallery__image__title">{galleryImageTitle2}</h3>
                            </motion.div>
                        </div>
                        <div className="kyoto-gallery__images-column-2">
                            <motion.div
                                className="kyoto-gallery__images-column-2__image-1 kyoto-gallery__image"
                                ref={refImagesRow1First}
                                initial='hidden'
                                animate={inViewImagesRow1First ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                            >
                                <img src={galleryImage3} alt=""/>
                                <h3 className="kyoto-gallery__image__title">{galleryImageTitle3}</h3>
                            </motion.div>
                            <motion.div
                                className="kyoto-gallery__images-column-2__image-2 kyoto-gallery__image"
                                ref={refImageRow1Third}
                                initial='hidden'
                                animate={inViewImageRow1Third ? 'visible' : 'hidden'}
                                variants={variantsMedia}
                            >
                                <img src={galleryImage4} alt=""/>
                                <h3 className="kyoto-gallery__image__title">{galleryImageTitle4}</h3>
                            </motion.div>
                        </div>
                    </div>
                    <div className="kyoto-gallery__images-row-2">
                        <motion.div
                            className="kyoto-gallery__images-row-2__image-1 kyoto-gallery__image"
                            ref={refImageRow2}
                            initial='hidden'
                            animate={inViewImageRow2 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                        >
                            <img src={galleryImage6} alt=""/>
                            <h3 className="kyoto-gallery__image__title">{galleryImageTitle5}</h3>
                        </motion.div>
                    </div>
                    <div className="kyoto-gallery__images-row-3">
                        <motion.div
                            className="kyoto-gallery__images-row-3__image-1 kyoto-gallery__image"
                            ref={refImagesRow3}
                            initial='hidden'
                            animate={inViewImagesRow3 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                        >
                            <img src={galleryImage5} alt=""/>
                            <h3 className="kyoto-gallery__image__title">{galleryImageTitle6}</h3>
                        </motion.div>
                        <motion.div
                            className="kyoto-gallery__images-row-3__image-2 kyoto-gallery__image"
                            ref={refImagesRow3}
                            initial='hidden'
                            animate={inViewImagesRow3 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                        >
                            <img src={galleryImage7} alt=""/>
                            <h3 className="kyoto-gallery__image__title">{galleryImageTitle7}</h3>
                        </motion.div>
                        <motion.div
                            className="kyoto-gallery__images-row-3__image-3 kyoto-gallery__image"
                            ref={refImagesRow3}
                            initial='hidden'
                            animate={inViewImagesRow3 ? 'visible' : 'hidden'}
                            variants={variantsMedia}
                        >
                            <img src={galleryImage8} alt=""/>
                            <h3 className="kyoto-gallery__image__title">{galleryImageTitle8}</h3>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GallerySection;
