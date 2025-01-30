import Card from "../card";
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

interface iTabContent {
  tabItems: {
    id: number;
    img: string;
    title: string;
    text: string
  }[]
}

export default function Slider ({ tabItems }: iTabContent) {
  return (
    <div className="">
      <div className="sm:block hidden">
      <Carousel
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={45}
        >
        {tabItems.map(item => (
          <Card key={item.id} title={item.title} imgSrc={item.img} />
        ))}
        </Carousel>
      </div>
      <div className="sm:hidden block ml-3">
        <Carousel
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          centerMode={false}
          centerSlidePercentage={45}
        >
        {tabItems.map(item => (
          <Card key={item.id} title={item.title} imgSrc={item.img} text={item.text} />
        ))}
      </Carousel>
      </div>
    </div>
  )
}


