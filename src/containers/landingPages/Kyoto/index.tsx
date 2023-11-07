import BigHeader from "@/components/headers/BigHeader"
import KyotoHeroSection from "@/components/sections/HeroSection";
import KyotoFeatureSection from "@/components/sections/FeatureSection";
import KyotoGallerySection from "./GallerySection";
import KyotoOptionsSection from "./OptionsSection";

import heroImage1 from '@/assets/images/kyoto/heroImage1.jpg';
import heroImage2 from '@/assets/images/kyoto/heroImage2.jpg';
import heroImage3 from '@/assets/images/kyoto/heroImage3.jpg';
import featureImage from '@/assets/images/kyoto/featureImage1.jpg';

const Kyoto: React.FC = () => {
    return (
        <>
            <div className="Kyoto">
                <BigHeader />
                <KyotoHeroSection
                    cityNameJp='京都'
                    cityNameEn='Kyoto'
                    images={[heroImage1, heroImage2, heroImage3]}
                />
                <KyotoFeatureSection
                    featureImage={featureImage}
                    featureTitle='"A City with Timeless Elegance"'
                    featureDescription="Kyoto, a former capital with over a millennium of heritage, embodies Japan's deep-rooted traditions and history. Blending ancient temples with modern rhythms and scenic geisha districts, it offers a captivating voyage through time."
                />
                <KyotoGallerySection />
                <KyotoOptionsSection />
            </div>
        </>
    );
};

export default Kyoto;
