import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import CategoryPage from '../pages/home/CategoryPage';
import Search from '../pages/search/Search';
import Wishlist from '../pages/shop/Wishlist';
import ContactUs from '../pages/contactus/ContactUs';
import AboutUs from '../pages/aboutus/AboutUs';
import SingleBook from '../pages/shop/SingleBook/SingleBook';
import Account from '../pages/account/Account';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: "/categories/:categoryName", element: <CategoryPage /> },
      { path: "/search", element: <Search /> },
      { path: "/wishlist", element: <Wishlist />},
      { path: "/contactus", element: <ContactUs />},
      { path: "/aboutus", element: <AboutUs />},
      { path: "/book/:isbn", element: <SingleBook />},
      { path: "/account", element: <Account />},
    ],
  },
]);

export default router;