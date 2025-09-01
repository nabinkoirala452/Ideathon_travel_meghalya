import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";
import avatar4 from "../../assets/images/ava-4.jpg";
import avatar5 from "../../assets/images/ava-5.jpg";
import avatar6 from "../../assets/images/ava-6.jpg";

const Testimonials = () => {
  const testimonialsData = [
  {
    pic: avatar1,
    name: "Ramesh Kumar",
    description:
      "Our trip to Meghalaya with Visit Meghalaya was nothing short of amazing! The attention to detail, friendly local guides, and unforgettable experiences like trekking to the living root bridges made it truly special. Can't wait for our next adventure in the Northeast!",
  },
  {
    pic: avatar6,
    name: "Katty Sai",
    description:
      "Visit Meghalaya exceeded my expectations in Meghalaya. From the breathtaking landscapes of Cherrapunji to the serene boat rides on the Umngot River, every moment was a delight. The team's expertise and personalized service made the journey unforgettable.",
  },
  {
    pic: avatar5,
    name: "Guptesor Singh",
    description:
      "I've traveled with many agencies, but Visit Meghalaya stands out for their Meghalaya tour. The seamless planning, knowledgeable guides who shared local insights, and unique destinations like Mawlynnong set them apart. An incredible way to explore 'the abode of clouds'!",
  },
  {
    pic: avatar2,
    name: "Papu Shah",
    description:
      "Visit Meghalaya made our dream vacation to Meghalaya a reality. The carefully crafted itinerary, diverse activities like exploring Mawsmai Cave, and genuine hospitality created an experience we'll cherish forever. Highly recommended for anyone wanting to see this beautiful state!",
  },
  {
    pic: avatar4,
    name: "Pavan Reddy",
    description:
      "A big shoutout to the Visit Meghalaya team for an unforgettable journey through Meghalaya. The blend of adventure at Laitlum Canyons and the relaxation by Krang Suri Falls was perfect. I'll be booking my next trip with them without a doubt.",
  },
];
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data, index) => (
        <div className=" py-4 px-6">
          <p>{data.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[75px] h-[55px] rounded-md overflow-hidden">
              <img
                src={data.pic}
                className="w-full h-full object-cover rounded-2"
                alt=""
              />
            </div>
            <div>
              <div>
                <h5 className="mb-0 mt-3">{data.name}</h5>
                <p className="text-GrayColor">Customer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
