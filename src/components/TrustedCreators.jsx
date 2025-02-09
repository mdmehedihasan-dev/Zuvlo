import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const creators = [
  { id: 1, name: "Aitana Lopez", role: "AI Creator | 200k+ followers", img: "/1.png" },
  { id: 2, name: "Aitana Lopez", role: "AI Creator | 200k+ followers", img: "/2.png" },
  { id: 3, name: "Aitana Lopez", role: "AI Creator | 200k+ followers", img: "/3.png" },
  { id: 4, name: "Aitana Lopez", role: "AI Creator | 200k+ followers", img: "/4.png" },
  { id: 5, name: "Aitana Lopez", role: "AI Creator | 200k+ followers", img: "/3.png" },
  { id: 6, name: "Aitana Lopez", role: "AI Creator | 200k+ followers", img: "/4.png" },
];

const TrustedCreators = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10  bg-gradient-to-b from-white to-pink-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Trusted by the world&apos;s biggest creators</h2>
      <div className="w-full overflow-hidden px-4 pt-10">
        <Slider {...settings}>
          {creators.map((creator, index) => (
            <div key={creator.id} className={`p-4 ${index % 2 === 0 ? 'mt-12' : 'mt-[-50px]'}`}>
              <div className="overflow-hidden">
                <img src={creator.img} alt={creator.name} className="w-full rounded-lg h-96 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold">{creator.name}</h3>
                  <p className="text-red-500 text-sm">{creator.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedCreators;
