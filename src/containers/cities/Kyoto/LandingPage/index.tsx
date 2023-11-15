import { useTranslation } from 'react-i18next';

import BigHeader from "@/components/headers/BigHeader"
import KyotoHeroSection from "@/components/sections/HeroSection";
import KyotoFeatureSection from "@/components/sections/FeatureSection";
import KyotoGallerySection from "@/components/sections/GallerySection";
import KyotoOptionsSection from "./OptionsSection";

import kyotoHeroImage1 from '@/assets/images/kyoto/heroImage1.jpg';
import kyotoHeroImage2 from '@/assets/images/kyoto/heroImage2.jpg';
import kyotoHeroImage3 from '@/assets/images/kyoto/heroImage3.jpg';
import kyotoFeatureImage from '@/assets/images/kyoto/featureImage1.jpg';
import kyotoGalleryImage1 from "@/assets/images/kyoto/galleryImage1.jpg";
import kyotoGalleryImage2 from "@/assets/images/kyoto/galleryImage2.jpg";
import kyotoGalleryImage3 from "@/assets/images/kyoto/galleryImage3.jpg";
import kyotoGalleryImage4 from "@/assets/images/kyoto/galleryImage4.jpg";
import kyotoGalleryImage5 from "@/assets/images/kyoto/galleryImage5.jpg";
import kyotoGalleryImage6 from "@/assets/images/kyoto/galleryImage6.jpg";
import kyotoGalleryImage7 from "@/assets/images/kyoto/galleryImage7.jpg";
import kyotoGalleryImage8 from "@/assets/images/kyoto/galleryImage8.jpg";
import kyotoGalleryVideo from "@/assets/images/kyoto/galleryVideo1.mp4";

const KyotoLandingPage: React.FC = () => {
    const { t, ready } = useTranslation();

    if (ready) {
        return (
            <>
                <div className="Kyoto">
                    <BigHeader navigateTo='/kyoto/majorcategories'/>
                    <KyotoHeroSection
                        heroCityNameJp={t('kyotoHeroTitleJP')}
                        heroCityNameEn={t('kyotoHeroTitleEN')}
                        heroBackgroundImages={[kyotoHeroImage1, kyotoHeroImage2, kyotoHeroImage3]}
                    />
                    <KyotoFeatureSection
                        featureImage={kyotoFeatureImage}
                        featureImageAlt=""
                        featureTitle={t('kyotoFeatureTitle')}
                        featureDescription={t('kyotoFeatureDescription')}
                    />
                    <KyotoGallerySection
                        galleryTitle={t('kyotoGalleryTitle')}
                        galleryVideo={kyotoGalleryVideo}
                        galleryImages={[
                            kyotoGalleryImage1,
                            kyotoGalleryImage2,
                            kyotoGalleryImage3,
                            kyotoGalleryImage4,
                            kyotoGalleryImage5,
                            kyotoGalleryImage6,
                            kyotoGalleryImage7,
                            kyotoGalleryImage8
                        ]}
                        galleryImageTitles={[
                            "法隆寺",
                            "水吐き",
                            "かっこいい神社",
                            "着物",
                            "道綺麗",
                            "坊主",
                            "清水寺",
                            "紅葉"
                        ]}
                    />
                    <KyotoOptionsSection />
                </div>
            </>
        );
    }
};

export default KyotoLandingPage;
