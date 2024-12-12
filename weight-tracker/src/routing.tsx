import { Route, Routes } from "react-router";

import Main from "./pages/Main/main";
import Login from "./pages/Login/login";

const Routing = () => {
    return (
        <div className="router">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )

}

export default Routing;