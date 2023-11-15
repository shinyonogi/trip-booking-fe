import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import MajorCoursePage from "./MajorCoursePage";

const Kyoto = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/majorcourse" element={<MajorCoursePage />} />
            </Routes>
        </>
    );
};

export default Kyoto;
