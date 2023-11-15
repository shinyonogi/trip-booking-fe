import  { Variants, motion } from 'framer-motion';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import majorCategoryImage1 from '@/assets/images/kyoto/majorCategoryImage1.jpg';
import majorCategoryImage2 from '@/assets/images/kyoto/majorCategoryImage2.jpg';

import SmallHeader from "@/components/headers/SmallHeader";

import './MajorCategories.css';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

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

const MajorCoursePage = () => {
    const navigate: NavigateFunction = useNavigate();

    const variants: VariantDefinition = {
        hidden: { opacity: 0, y: window.innerHeight },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            y: { duration: 1 },
            opacity: { duration: 0.5 },
          },
        }
    };

    return (
        <>
            <div>
                <SmallHeader navigateTo='/kyoto'/>
                <div className="major-category">
                    <div className="major-category__title">
                        <h1>コースを選択して下さい</h1>
                    </div>
                    <motion.div
                        className='major-category__content'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                    >
                        <div className='major-category__content--element__wrapper'>
                            <div className='major-category__content--element'>
                                <img className='major-category__content--element__background' src={majorCategoryImage2}/>
                                <h2>おすすめコース</h2>
                                <p>- 王道の京都観光はこちら -</p>
                                <div className='major-category__content--element--button__wrapper'>
                                    <ButtonPrimary label="選択" onClick={() => {navigate(-1)}}/>
                                </div>
                            </div>
                        </div>
                        <div className='major-category__content--element__wrapper'>
                            <div className='major-category__content--element'>
                                <img className='major-category__content--element__background' src={majorCategoryImage1}/>
                                <h2>ラグジャリーコース</h2>
                                <p>- ワンランク上の体験を -</p>
                                <div className='major-category__content--element--button__wrapper'>
                                    <ButtonPrimary label="選択" onClick={() => {navigate(-1)}}/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default MajorCoursePage;
