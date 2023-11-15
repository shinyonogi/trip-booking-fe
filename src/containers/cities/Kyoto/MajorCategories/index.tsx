import  { Variants, motion } from 'framer-motion';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import majorCategoryImage1 from '@/assets/images/kyoto/majorCategoryImage1.jpg';
import majorCategoryImage2 from '@/assets/images/kyoto/majorCategoryImage2.jpg';

import SmallHeader from "@/components/headers/SmallHeader";

import './MajorCategories.css';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

interface MajorCategoriesProps {
    "id": number;
    "name": string;
    "description": string;
}

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
    const [majorCategories, setMajorCategories] = useState<MajorCategoriesProps[]>([]);

    useEffect(() => {
        axios.get<MajorCategoriesProps[]>('/api/majorcategories')
        .then((response) => {
            setMajorCategories(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    //Just for development purposes -> will be removed later
    const determineBackgroundImage = (id: number) => {
        switch (id) {
            case 1:
                return majorCategoryImage2;
            case 2:
                return majorCategoryImage1;
            default:
                return majorCategoryImage2;
        }
    };

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

    if (majorCategories.length !== 0) {
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
                            {majorCategories.map((majorCategory) => {
                                return (
                                    <>
                                        <div className='major-category__content--element__wrapper'>
                                            <div className='major-category__content--element'>
                                                <img className='major-category__content--element__background' src={determineBackgroundImage(majorCategory.id)}/>
                                                <h2>{majorCategory.name}</h2>
                                                <p>{majorCategory.description}</p>
                                                <div className='major-category__content--element--button__wrapper'>
                                                    <ButtonPrimary label="選択" onClick={() => {navigate(-1)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </>
        );
    }
}

export default MajorCoursePage;
