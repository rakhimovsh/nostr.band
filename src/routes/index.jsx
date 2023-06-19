import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Profiles from "../pages/Profiles/Profiles"


const Router = () => {
    return (
        <Routes>
            <Route path="/*" element={<MainLayout />}>
                <Route index element={<Profiles />} />
            </Route>
        </Routes>
    )

}

export default Router