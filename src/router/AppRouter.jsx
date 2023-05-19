import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage, SearchPage, SeriePage } from "../pages"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/serie/:id" element={<SeriePage />} />

            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}