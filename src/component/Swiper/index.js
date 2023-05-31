import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
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
        { img: one, a: 'https://www.sunnygo.com.tw/web-front/store/veybkdwr' },
        { img: two, a: 'https://www.sunnygo.com.tw/web-front/store/kexbougl' },
        { img: three, a: 'https://www.sunnygo.com.tw/web-front/store/liontravel' },
        { img: four, a: 'https://www.sunnygo.com.tw/web-front/store/hyjkfstc' },
        { img: five, a: 'https://www.sunnygo.com.tw/web-front/store/ink' },
        { img: six, a: 'https://www.sunnygo.com.tw/web-front/store/168' },
    ];
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation
            // pagination={{ clickable: true }}
            loop={true}
            className="swiper-bar"
            style={{ width: '90%' }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {arr.map((item, index) => {
                const { img, a } = item;
                return (
                    <div key={index}>
                        <SwiperSlide key={index}>
                            <a href={a} target="_blank" rel="noreferrer">
                                <img src={img} alt="" className="swiperImg" />
                            </a>
                        </SwiperSlide>
                    </div>
                );
            })}
        </Swiper>
    );
};
export default SlideContainer;
