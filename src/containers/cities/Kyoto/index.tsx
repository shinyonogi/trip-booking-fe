import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";

const Kyoto = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    );
};

export default Kyoto;
