import { InViewHookResponse, useInView } from "react-intersection-observer";

import "./KyotoGallerySection.css";

const KyotoGallery: React.FC = () => {
    const [ref, inView]: InViewHookResponse = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    return (
        <>
            <section
                className={`kyoto-gallery ${inView ? 'kyoto-gallery--scrolled' : ''}`}
                ref={ref}
            >
                <h1 className="kyoto-gallery__title">"Life's Most Enchanting Moments Await"</h1>
            </section>
        </>
    )
};

export default KyotoGallery;
