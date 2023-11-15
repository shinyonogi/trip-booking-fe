import  { Variants, motion } from 'framer-motion';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import majorCategoryImage1 from '@/assets/images/kyoto/majorCategoryImage1.jpg';
import majorCategoryImage2 from '@/assets/images/kyoto/majorCategoryImage2.jpg';

import SmallHeader from "@/components/headers/SmallHeader";
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

import './Categories.css';

import { BookingComponentProps } from '..';

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

const MajorCategories: React.FC<BookingComponentProps> = ({addToBooking, apiEndpoint}) => {
    const [majorCategories, setMajorCategories] = useState<MajorCategoriesProps[]>([]);
    const [onElementHover, setOnElementHover] = useState<boolean>(false);

    useEffect(() => {
        axios.get<MajorCategoriesProps[]>(`/api/${apiEndpoint}`)
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
                return majorCategoryImage1;
            case 2:
                return majorCategoryImage2;
            default:
                return majorCategoryImage2;
        }
    };

    const handleClicked = (majorCategoryId: number) => {
        addToBooking({
            majorCategoryId: majorCategoryId,
            courseCategoryId: undefined
        });
        navigate("/kyoto/courses");
    }

    const navigate: NavigateFunction = useNavigate();

    const variants: VariantDefinition = {
        hidden: { opacity: 0},
        visible: {
          opacity: 1,
          transition: {
            opacity: { duration: 1 },
          },
        }
    };

    if (majorCategories.length !== 0) {
        return (
            <>
                <div>
                    <SmallHeader navigateTo='/kyoto'/>
                    <div className="category">
                        <div className={`category__title ${onElementHover ? 'category__title--hidden': ''}`}>
                            <h1>コースを選択して下さい</h1>
                        </div>
                        <motion.div
                            className='category__content'
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            {majorCategories.map((majorCategory) => {
                                return (
                                    <div
                                        className='category__content--element__wrapper'
                                        key={majorCategory.id}
                                        onMouseEnter={() => {setOnElementHover(true)}}
                                        onMouseLeave={() => {setOnElementHover(false)}}
                                    >
                                        <div className='category__content--element'>
                                            <img className='category__content--element__background' src={determineBackgroundImage(majorCategory.id)}/>
                                            <h2 className='category__content--element--title'>{majorCategory.name}</h2>
                                            <p className='category__content--element--description'>{majorCategory.description}</p>
                                            <div className='category__content--element--button__wrapper'>
                                                <ButtonPrimary label="選択" onClick={() => {handleClicked(majorCategory.id)}}/>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </>
        );
    }
}

export default MajorCategories;
