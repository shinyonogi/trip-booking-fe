import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import LandingPage from "./LandingPage";
import MajorCategoryPage from "./MajorCategories";
import CourseCategoryPage from "./CourseCategories";

export interface BookingInfoProps {
    "majorCategoryId": number;
    "courseCategoryId": number | undefined;
}

export interface BookingComponentProps {
    bookingInfo?: BookingInfoProps | undefined;
    addToBooking: React.Dispatch<React.SetStateAction<BookingInfoProps | undefined>>;
    apiEndpoint: string;
}

const Kyoto = () => {
    const [bookingInfo, setBookingInfo] = useState<BookingInfoProps | undefined>(undefined);

    return (
        <>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route
                    path="majorcategories"
                    element={<MajorCategoryPage bookingInfo={bookingInfo} addToBooking={setBookingInfo} apiEndpoint='majorcategories'/>}
                />
                <Route
                    path="courses"
                    element={<CourseCategoryPage bookingInfo={bookingInfo} addToBooking={setBookingInfo} apiEndpoint="coursecategories"/>}
                />
            </Routes>
        </>
    );
};

export default Kyoto;
