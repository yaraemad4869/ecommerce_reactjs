import { createContext } from "react";
const DarkContext = createContext({ isDark: false, setIsDark: () => { } })
export default DarkContext;