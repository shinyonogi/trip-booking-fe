import BigHeader from "@/components/headers/BigHeader"

import KyotoHeroSection from "./HeroSection";
import KyotoFeatureSection from "./FeatureSection";
import KyotoGallerySection from "./GallerySection";
import KyotoOptionsSection from "./OptionsSection";

const Kyoto: React.FC = () => {
    return (
        <>
            <div className="Kyoto">
                <BigHeader />
                <KyotoHeroSection />
                <KyotoFeatureSection />
                <KyotoGallerySection />
                <KyotoOptionsSection />
            </div>
        </>
    );
};

export default Kyoto;
