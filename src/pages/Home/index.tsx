import { useGetShowsQuery } from "../../services/TMDB";
import { useGlobalContext } from "../../context/globalContext";

import { Loader, Error, Section, SideBar, Header, Footer } from "../../common";
import { Hero } from "./components";

import { maxWidth } from "../../styles";
import { sections } from "../../constants";
import { Navigate } from "react-router-dom";
import Search from "../../common/Search/Search";

const Home = () => {
  const { hasToken } = useGlobalContext();
  console.log(typeof hasToken)
  const { data, isLoading, isError } = useGetShowsQuery({
    category: "movie",
    type: "popular",
    page: 1,
  });
  if (hasToken == false) {
    return <Navigate to="/Login" replace/>
  }
  else {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error="Unable to fetch the movies! " />;
    }

    const popularMovies = data?.results.slice(0, 5);

    return (
      <>
        <SideBar />
        <Header />
        <main className="dark:bg-black bg-mainColor lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
          <Hero movies={popularMovies} />
          <Search />
          <div className={`${maxWidth} lg:mt-12 md:mt-8 sm:mt-6 xs:mt-4 mt-2`}>
            {sections.map(({ title, category, type }) => (
              <Section title={title} category={category} type={type} key={title} />
            ))}
          </div>
        </main>
        <Footer />
      </>
    );
  }
};

export default Home;
