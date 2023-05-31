import React, { useState } from 'react';
import './app.scss';

import { Link, animateScroll } from 'react-scroll';
import { AiOutlineLeft } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { TiArrowSortedDown } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import Top from '../component/top/Top';
import Swiper from '../component/Swiper';

function SunnyPoint() {
    // var scroll = animateScroll;
    const [show, setShow] = useState(true);
    const handleShow = (type) => () => setShow(type === 'show');

    const [sixImg, setSixImg] = useState(false);

    const one = 'img/2023.6月卡友獨享-1-01.png';
    const two = 'img/2023.6月卡友獨享-1-02.png';
    const three = 'img/2023.6月卡友獨享-1-03.png';
    const four = 'img/2023.6月卡友獨享-1-04.png';
    const five = 'img/2023.6月卡友獨享-1-05.jpg';
    const six = 'img/2023.6月卡友獨享-1-06.png';
    const seven = 'img/2023.6月卡友獨享-1-07.jpg';
    const backImg = 'img/2023.6月卡友獨享-1-14.png';

    function createArray(length) {
        let arr = [];
        for (let i = 0; i < length; i++) {
            const obj = {};
            for (let a = 0; a < 2; a++) {
                const random = (Math.floor(Math.random() * 10000) + 1) / 100 + '%';
                if (a === 0) {
                    obj.left = random;
                } else {
                    obj.top = random;
                }
            }
            arr.push(obj);
        }
        return arr;
    }

    return (
        <div id="container" className="container">
            <div className="snowBox">
                {createArray(100).map((style, index) => {
                    return (
                        <i key={index} className={index % 3 === 0 ? 'snowflake ' : 'snowflake big'} style={style}></i>
                    );
                })}
            </div>
            <div className="snowBox">
                {createArray(100).map((style, index) => {
                    return (
                        <i key={index} className={index % 3 === 0 ? 'snowflake ' : 'snowflake big'} style={style}></i>
                    );
                })}
            </div>

            <a href="https://www.sunnygo.com.tw/web-front/home">
                <div className="prev">
                    陽信商店街購物
                    <IoIosArrowForward />
                </div>
            </a>
            <Top />
            <div className={show ? 'fixed' : 'fixed fixedActive'}>
                <div onClick={handleShow('hide')} className="fixedItem">
                    {/* <LazyLoadImage className="top" src={topStar} alt="" /> */}
                    粽夏
                    <br />
                    歡樂GO
                </div>
                <Link href="#two" to="two" spy={true} className="fixedItem" activeClass="fixedItem active">
                    六大品牌 <br />
                    六倍送
                </Link>
                <Link href="#three" to="three" spy={true} className="fixedItem" activeClass="fixedItem active">
                    特賣 <br />
                    搶鮮購
                </Link>
                <Link href="#four" to="four" spy={true} className="fixedItem" activeClass="fixedItem active">
                    新會員 <br />
                    滿額送
                </Link>
                <Link href="#five" to="five" spy={true} className="fixedItem" activeClass="fixedItem active">
                    刷對<br />
                    卡夏趴
                </Link>
                <Link href="#six" to="six" spy={true} className="fixedItem" activeClass="fixedItem active">
                   賺點密技
                </Link>
                <Link href="#seven" to="seven" spy={true} className="fixedItem" activeClass="fixedItem active">
                    優惠加倍<br />
                    回饋
                </Link>
                
            </div>

 

            <div id="one" name="one" className="imageContainer one">
                <LazyLoadImage src={one} alt="" />
                {/* <nav>
                    <LazyLoadImage src={one_app} alt="" />
                </nav>
                <nav>
                    <LazyLoadImage src={one_circle1} alt="" />
                </nav>
                <nav>
                    <LazyLoadImage src={one_circle2} alt="" />
                </nav>
                <nav>
                    <LazyLoadImage src={one_circle3} alt="" />
                </nav>
                <Link href="#two" to="two" spy={true} alt="/">
                    {' '}
                </Link>
                <Link href="#three" to="three" spy={true} alt="/">
                    {' '}
                </Link> */}
            </div>

            <div id="two" name="two" className="imageContainer two">
                <LazyLoadImage src={two} alt="" />
                <div className="swiperBackImg">
                    <LazyLoadImage src={backImg} alt="" className="test" />
                    <div className="swiperImg">
                        <Swiper />
                    </div>
                </div>
            </div>

            <div id="three" name="three" className="imageContainer three">
                <LazyLoadImage src={three} alt="" />
                {/* <a href="https://www.sunnygo.com.tw/web-front/home" alt="/">
                    {' '}
                </a> */}
            </div>
            <div id="four" name="four" className="imageContainer four">
                <LazyLoadImage src={four} alt="" />

                <a href="https://reurl.cc/1ezLzp" alt="/">
                    {' '}
                </a>
            </div>
            <div id="five" name="five" className="imageContainer ">
                <LazyLoadImage src={five} alt="" />

                <a href="https://reurl.cc/1ezLzp" alt="/">
                    {' '}
                </a>
            </div>
            <div id="six" name="six" className="imageContainer ">
                <LazyLoadImage src={six} alt="" />

                <a href="https://reurl.cc/1ezLzp" alt="/">
                    {' '}
                </a>
            </div>
            <div id="seven" name="seven" className="imageContainer ">
                <LazyLoadImage src={seven} alt="" />

                <a href="https://reurl.cc/1ezLzp" alt="/">
                    {' '}
                </a>
            </div>

            <div onClick={handleShow('show')} className={show ? 'fixed2 fixedActive ' : 'fixed2 '}>
                <AiOutlineLeft /> 快速導覽
            </div>

            {/* pop */}
            {sixImg ? (
                <div className="popup">
                    <div className="popup-inner">
                        <div className="popup-imgApp">
                            <IoCloseCircle
                                className="iconApp"
                                onClick={() => {
                                    setSixImg(false);
                                }}
                            />
                        </div>
                        <div className="popup-imgWeb">
                            <IoCloseCircle
                                className="iconWeb"
                                onClick={() => {
                                    setSixImg(false);
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default SunnyPoint;
