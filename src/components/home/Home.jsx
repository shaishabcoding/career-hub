import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import CategoryList from "../categoryList/CategoryList";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div className="px-8 py-4">
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs {...{ jobs }}></FeaturedJobs>
    </div>
  );
};

export default Home;
