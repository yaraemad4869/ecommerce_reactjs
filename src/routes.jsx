import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";
import Faq from "./pages/FAQ/Faq";
import ContactUs from "./pages/ContactUs/ContactUs";
import Products from "./pages/Products/Products";
import Featured from "./pages/Featured/Featured";
import TopRated from "./pages/TopRated/TopRated";
import Popular from "./pages/Popular/Popular";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error h1={"Can't Show Products"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/login",
                element: <Login />,
                errorElement: <Error h1={"Form Is Invalid"} p={"Sorry, Our team are working on this problem , please try soon..."} />
            },
            {
                path: "/signup",
                element: <Signup />,
                errorElement: <Error h1={"Form Is Invalid"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/products",
                element: <Products />,
                errorElement: <Error h1={"Can't Show Products"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                errorElement: <Error h1={"Can't Show Product"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/top_rated",
                element: <TopRated />,
                errorElement: <Error h1={"Can't Show Product"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/popular",
                element: <Popular />,
                errorElement: <Error h1={"Can't Show Product"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/featured",
                element: <Featured />,
                errorElement: <Error h1={"Can't Show Product"} p={"Sorry, Our team are working on this problem , please try soon..."} />

            },
            {
                path: "/cart",
                element: <RequireAuth><Cart /></RequireAuth>,
                errorElement: <Error h1={"Can't Show Cart"} p={"Sorry, Our team are working on this problem , please try soon..."} />
            },
            {
                path: "/search",
                element: <Search />,
                errorElement: <Error h1={"Can't Provide Search Tool"} p={"Sorry, Our team are working on this problem , please try soon..."} />
            },
            {
                path: "/faq",
                element: <Faq />,
                errorElement: <Error h1={"Can't Provide FAQ Page"} p={"Sorry, Our team are working on this problem , please try soon..."} />
            },
            {
                path: "/contactus",
                element: <ContactUs />,
                errorElement: <Error h1={"Can't Provide Contact Us Page"} p={"Sorry, Our team are working on this problem , please try soon..."} />
            },
            {
                path: "*",
                element: <Error h1={"Page Not Found"} p={"This Page Is Not Found"} />
            }
        ],

    }
]);
export default routes