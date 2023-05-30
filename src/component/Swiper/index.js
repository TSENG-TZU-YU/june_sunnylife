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
    // const six = 'img/Exchang/點數活動頁5-1-0-41.png';
    const seven = 'img/2023.6月卡友獨享-1-13.png';
    // const eight = 'img/2023.6月卡友獨享-1-14.png';
    // const eight1 = 'img/2023.6月卡友獨享-1-08.png';
    // const eight2 = 'img/Exchang/點數活動頁5-1-0-45.png';
    // const eight3 = 'img/Exchang/點數活動頁5-1-0-46.png';
    // const eight4 = 'img/Exchang/點數活動頁5-1-0-47.png';
    const arr = [
        { img: one, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=240607' },
        {
            img: two,
            a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=240605',
        },
        { img: three, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232071' },
        { img: four, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232077' },
        { img: five, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232078' },
        // { img: six, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=232074' },
        { img: seven, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241205' },
        // { img: eight, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241204' },
        // { img: eight1, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241203' },
        // { img: eight2, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241202' },
        // { img: eight3, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241201' },
        // { img: eight4, a: 'https://www.sunnygo.com.tw/web-front/productDetails?id=241199' },
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
