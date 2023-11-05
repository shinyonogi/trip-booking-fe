import BigHeader from "@/components/headers/BigHeader"
import KyotoHeroSection from "./HeroSection";
import KyotoFeatureSection from "./FeatureSection";
import KyotoGallerySection from "./GallerySection";

const Kyoto: React.FC = () => {
    return (
        <>
            <div className="Kyoto">
                <BigHeader />
                <KyotoHeroSection />
                <KyotoFeatureSection />
                <KyotoGallerySection />
            </div>
        </>
    );
};

export default Kyoto;
