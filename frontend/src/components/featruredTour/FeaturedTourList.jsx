
import TourCard from "../../shared/TourCard";
import featuredToursData from "../../assets/data/allTours.json"


const FeaturedTourList = () => {
  

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {featuredToursData.map((tour) => (
        <div className="" key={tour._id}>
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedTourList;