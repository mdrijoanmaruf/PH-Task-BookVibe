import React from 'react'
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Components/Root/Root';
import PageNotFound from '../Components/PageNotFound/PageNotFound';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import PageToRead from '../Pages/PageToRead';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index:true , Component: Home},
            {path: '/' , Component: Home},
            {path: '/list' , Component: ListedBooks},
            {path: '/read' , Component: PageToRead},
            {path: '*' , Component: PageNotFound}
        ]
    },
]);

export default router;