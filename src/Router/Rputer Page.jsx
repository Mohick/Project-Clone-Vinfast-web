import { lazy } from "react";
import { Route,Routes } from "react-router-dom";


 const MainPage = lazy(()=> import("../Main Page/Main Page Views.jsx"))
function RouterPage() {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    );
}


export default RouterPage;