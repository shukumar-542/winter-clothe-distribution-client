import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ClothesDetails from "../pages/ClothesDetails";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardWinterClothes from "../pages/Dashboard/DashboardWinterClothes";
import PostCloth from "../pages/Dashboard/PostCloth";
import AllWinterClothes from "../pages/All_winter_clothes/AllWinterClothes";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'winter-clothes',
                element: <AllWinterClothes />
            },
            {
                path: 'details/:id',
                element: <ClothesDetails />
            },
            {
                path: '/leaderBoard',
                element: <LeaderBoard />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'winter-clothes',
                element: <DashboardWinterClothes />
            },
            {
                path: 'create-winter-clothes',
                element: <PostCloth />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
    
    
  
])

export default router