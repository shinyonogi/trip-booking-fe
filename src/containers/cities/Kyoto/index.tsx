import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import MajorCategoryPage from "./MajorCategories";

const Kyoto = () => {
    return (
        <>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="majorcategories" element={<MajorCategoryPage />} />
            </Routes>
        </>
    );
};

export default Kyoto;
