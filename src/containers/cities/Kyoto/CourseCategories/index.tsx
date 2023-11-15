import { NavigateFunction, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";

import { BookingComponentProps } from "..";

import SmallHeader from "@/components/headers/SmallHeader";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";

import courseCategoryImage1 from '@/assets/images/kyoto/courseCategoryImage1.jpg';
import courseCategoryImage2 from '@/assets/images/kyoto/courseCategoryImage2.jpg';

import '../MajorCategories/Categories.css';

interface CourseCategoriesProps {
    "id": number;
    "name": string;
    "majorCategoryId": number;
}

const CourseCategories: React.FC<BookingComponentProps> = ({bookingInfo, addToBooking, apiEndpoint}) => {
    const [courseCategories, setCourseCategories] = useState<CourseCategoriesProps[]>([]);
    const [onElementHover, setOnElementHover] = useState<boolean>(false);

    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const majorCategoryId = bookingInfo?.majorCategoryId;
        if (majorCategoryId) {
            axios.get<CourseCategoriesProps[]>(`/api/${apiEndpoint}/${majorCategoryId}`)
            .then((response) => {
                setCourseCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, []);

    const handleClicked = (courseCategoryId: number) => {
        if (bookingInfo) {
            addToBooking({
                ...bookingInfo,
                courseCategoryId: courseCategoryId
            });
            navigate('/kyoto/booking');
        }
    };

    const determineBackgroundImage = (id: number) => {
        switch (id) {
            case 1:
                return courseCategoryImage1;
            case 2:
                return courseCategoryImage2;
            default:
                return courseCategoryImage1;
        }
    };

    return (
        <>
            <SmallHeader navigateTo='/kyoto'/>
            <div className='category'>
                <div className={`category__title ${onElementHover ? 'category__title--hidden': ''}`}>
                    <h1>コースを選択して下さい</h1>
                </div>
                <div className="category__content">
                    {courseCategories.map((courseCategory) => {
                        return (
                            <div
                                className="category__content--element__wrapper"
                                style={{width: `${100 / courseCategories.length}%`}}
                                key={courseCategory.id}
                                onMouseEnter={() => {setOnElementHover(true)}}
                                onMouseLeave={() => {setOnElementHover(false)}}
                            >
                                <div className="category__content--element">
                                    <img className='category__content--element__background' src={determineBackgroundImage(courseCategory.id)}/>
                                    <h2 className='category__content--element--title-2'>{courseCategory.name}</h2>
                                    <div className='category__content--element--button__wrapper'>
                                        <ButtonPrimary label="選択" onClick={() => {handleClicked(courseCategory.id)}}/>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default CourseCategories;
