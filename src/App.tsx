import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import {
  ScrollToTop,
  Loader,
} from "./common";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const App = () => {
  return (
    <>
      {/* <SideBar /> */}
      {/* <Header /> */}
      {/* <main className="dark:bg-black bg-mainColor lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0"> */}
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      {/* </main> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
