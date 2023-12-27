import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { items } from "../components/data/items.json";
import styles from "../style/Responsive.module.css";

export default function ResponsiveCarousel() {
  const { swiper } = items;
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        autoPlay={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        // className={styles.mySwiper}
      >
        {/* <div className="bg-[#6bb792] max-w-[1200px] mx-auto "> */}
        {swiper.map((item) => (
          <div key={item.id} className=" max-w-[1200px] h-5/6 p-8 mx-auto">
            <div >
              <img src={item.imageUrl} alt="slides" className="w-full h-full object-cover"/>
            </div>
            {/* <div className={styles.detail}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div> */}
          </div>
        ))}
        {/* </div> */}

      </Carousel>
      <h1 className="leading-8">“THAT HOTEL SMELL OF MORNING, THE KIND THAT MADE<br/> EVERYBODY WALK A LITTLE FASTER, SAY A KINDER HELLO.”</h1>
      <button className=" mt-4 p-4 border-4 border-red-300">SEE ROOMS & SUITES</button>
    </div>
  );
}
