import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.scss';

const SlideContainer = () => {
    const one = 'img/2023.6月卡友獨享-1-08.png';
    const two = 'img/2023.6月卡友獨享-1-09.png';
    const three = 'img/2023.6月卡友獨享-1-10.png';
    const four = 'img/2023.6月卡友獨享-1-11.png';
    const five = 'img/2023.6月卡友獨享-1-12.png';
    const six = 'img/2023.6月卡友獨享-1-13.png';
 
    const arr = [
        { img: one, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=240607'},
        {img: two, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=240605'},
        { img: three, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232071' },
        { img: four, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232077' },
        { img: five, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232078' },
        { img: six, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232074' },
     
    ];
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation
            // pagination={{ clickable: true }}
            loop={true}
            className="swiper-bar"
            style={{ width: '90%' }}
        >
            {arr.map((item, index) => {
                const { img, a } = item;
                return (
                    <div key={index}>
                        <SwiperSlide key={index}>
                            <img src={img} alt="" className="swiperImg" />
                            <a href={a}>{''}</a>
                        </SwiperSlide>
                    </div>
                );
            })}
        </Swiper>
    );
};
export default SlideContainer;
