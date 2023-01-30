import About from "../pages/about/About";
import Error from "../pages/errorPage/Error";
import FullPost from "../pages/fullPost/FullPost";
import Login from "../pages/login/Login";
import Posts from "../pages/posts/Posts";


export const privateRoutes = [
    {path:'/posts',element:Posts},
    {path:'/about',element:About},
    {path:'/posts/:id',element:FullPost},
    {path:'*',element:Error},
]
export const publishRoutes = [
    {path:'/',element:Login},
]