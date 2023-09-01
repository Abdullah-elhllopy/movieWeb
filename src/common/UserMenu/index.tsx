import { m } from "framer-motion";

import { useTheme } from "../../context/themeContext";
import { zoomIn } from "../../utils/motion";
import { useUSetOnClickOutside } from "../../hooks/useOnClickOutside";
import { useGlobalContext } from "../../context/globalContext";
import {AiOutlineLogout} from 'react-icons/ai'
const UserMenu = () => {
    const { theme,closeUserMenu } =useTheme();
    const { ref } = useUSetOnClickOutside(closeUserMenu);
    const {userData , logOut} = useGlobalContext();
    return (
        <m.ul
            ref={ref}
            variants={zoomIn(0.9, 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{
                background: `${theme === "Light" ? "#FAFAFA" : "rgba(0,0,0,0.4)"}`,
            }}
            className="absolute top-[200%] right-[25%] bg-primary shadow-md backdrop-blur-sm  rounded-md overflow-hidden dark:dark-glass light-glass"
        >
            <li
                className={`hover:bg-gray-200 dark:hover:bg-black transition-all duration-300 }`}
            >
                <button
                    name="theme"
                    type="button"
                    className={`flex w-48 items-center gap-1 font-medium py-2 px-4 text-[14px] }`}
                >
                    <img className=" w-4 h-4 rounded-full" src={userData.image} alt="userImage" />
                    <span className="text-sm  inline">{`${userData.firstName} `}</span>
                    <span className="text-sm  inline">{`${ userData.lastName }`}</span>

                </button>
            </li>
            <li
                className={`hover:bg-gray-200 dark:hover:bg-black transition-all duration-300 }`}
            >
                <button
                    name="theme"
                    type="button"
                    onClick={logOut}
                    className={`flex w-48 flex-row items-center gap-1 font-medium py-2 px-4 text-[14px] }`}
                >
                    <AiOutlineLogout/>
                    <span>{'log out'}</span>
                </button>
            </li>
        </m.ul>
    );
};

export default UserMenu;
