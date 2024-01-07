import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignIn/SignUp/SignUp';
import ShopCategorys from '../Pages/ShopCategorys/ShopCategorys';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/men',
                element: <ShopCategorys category='men'></ShopCategorys>
            },
            {
                path: '/men/shirt',
                element: <ShopCategorys category='men' productCategory='shirt'></ShopCategorys>
            },
            {
                path: '/women',
                element: <ShopCategorys category='women'></ShopCategorys>
            },
            {
                path: '/accessories',
                element: <ShopCategorys category='accessories'></ShopCategorys>
            }
        ]
    }
])

export default router;