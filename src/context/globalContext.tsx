import React, { useCallback, useContext, useState, useEffect } from "react";
import { API_KEY, TMDB_API_BASE_URL } from "../utils/config";


interface IPerson {
  image: string
  firstName: string
  lastName: string
}
const context = React.createContext({
  videoId: "",
  setVideoId: (prevValue: string) => { },
  getTrailerId: (id: number | string) => { },
  toggleModal: () => { },
  isModalOpen: false,
  showSidebar: false,
  setShowSidebar: (prevValue: boolean) => { },
  setHasToken: (prevValue: boolean | any) => { },
  setUserData: (prevValue: any) => { },
  logOut : () => {},
  hasToken: false,
  userData: {
    image: "",
    firstName: "",
    lastName: ""
  }
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [userData, setUserData] = useState<IPerson>({
    image: "",
    firstName: "",
    lastName: ""
  })
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setHasToken(true);
      const item: any = localStorage.getItem('userData');
      setUserData(JSON.parse(item))
    }
  }, [])

  const logOut = ()=>{
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    setHasToken(false);

  }
  const getTrailerId = async (id: number | string) => {
    try {
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setVideoId(data.results[0].key);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <context.Provider
      value={{
        getTrailerId,
        videoId,
        toggleModal,
        isModalOpen,
        setVideoId,
        showSidebar,
        setShowSidebar,
        setHasToken,
        hasToken,
        userData,
        setUserData,
        logOut
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(context);
};
