import { createContext } from "react";
const IsLoginContext = createContext({ isLogin: false, setIsLogin: () => { } })
export default IsLoginContext;