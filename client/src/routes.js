import Auth from "./pages/Auth"
import Galery from "./pages/Galery"
import Car from "./pages/Car"
import CarOwner from "./pages/CarOwner"

export const publicRoutes = [
    {
        path: '/login',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Auth
    },
    {
        path: '/car',
        Component: Car
    
    },
     {
        path: '/carOwner',
        Component: CarOwner
    
    },
    
]

export const authRoutes = [
     {
        path: '/login',
        Component: Auth
    },
    {
        path: '/registration',
        Component: Auth
    },
    {
        path: '/car',
        Component: Car
    
    },
     {
        path: '/carOwner',
        Component: CarOwner
    
    },
    
    {
        path: '/galery',
        Component: Galery
    
    },
    // car carOwner
]