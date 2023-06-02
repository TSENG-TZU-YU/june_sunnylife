import { React, useRef, useEffect, useState } from 'react';
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

    const scrollRef2 = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const one = 'img/2023.6月卡友獨享-1-01.jpg';
    const two = 'img/2023.6月卡友獨享-1-02.jpg';
    const three = 'img/2023.6月卡友獨享-1-03.png';
    const four = 'img/2023.6月卡友獨享-1-04.jpg';
    const five = 'img/2023.6月卡友獨享-1-05.png';
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

    // 設定錨點
    useEffect(() => {
        scrollRef2.current.scrollIntoView();
    }, [isLoading]);
    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }, []);

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
                    品牌 <br />
                    六倍送
                </Link>
                <Link href="#three" to="three" spy={true} className="fixedItem" activeClass="fixedItem active">
                    粽夏
                    <br />
                    搶鮮抽
                </Link>
                <Link href="#four" to="four" spy={true} className="fixedItem" activeClass="fixedItem active">
                    新會員 <br />
                    送好禮
                </Link>
                <Link href="#five" to="five" spy={true} className="fixedItem" activeClass="fixedItem active">
                    刷對
                    <br />
                    卡夏趴
                </Link>
                <Link href="#six" to="six" spy={true} className="fixedItem" activeClass="fixedItem active">
                    賺點密技
                </Link>
                <Link href="#seven" to="seven" spy={true} className="fixedItem" activeClass="fixedItem active">
                    立即辦卡
                </Link>
            </div>

            <div id="one" name="one" className="imageContainer one">
                <LazyLoadImage src={one} alt="/" />
                <Link href="#two" to="two" spy={true} alt="/" className="linkTO"></Link>
                <Link href="#three" to="three" spy={true} alt="/" className="linkTO"></Link>
                <Link href="#four" to="four" spy={true} alt="/" className="linkTO"></Link>
                <Link href="#six" to="six" spy={true} alt="/" className="linkTO"></Link>
                <Link href="#five" to="five" spy={true} alt="/" className="linkTO"></Link>
                <a href="https://www.sunnygo.com.tw/web-front/allTube?id=69" alt="現在就買" className="linkTO">
                    {' '}
                </a>
            </div>

            <div id="two" name="two" className="imageContainer two">
                <LazyLoadImage src={two} alt="" />
                <a className="twoA" href="https://www.sunnygo.com.tw/web-front/allTube?id=69" alt="立即購買">
                    {' '}
                </a>
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
            <div  id="five" name="five" className="imageContainer five">
                <div ref={scrollRef2}  className='test'></div>
                <LazyLoadImage src={five} alt="" />

                <a href="https://ccas.sunnybank.com.tw/index?channel=SG" alt="/">
                    {' '}
                </a>
                <a href="https://service.sunnybank.com.tw/portal/pt/pt01002/PT01002Index.xhtml" alt="/">
                    {' '}
                </a>
                <a href="https://service.sunnybank.com.tw/portal/pt/pt01002/PT01002Index.xhtml" alt="/">
                    {' '}
                </a>
                <a href="https://service.sunnybank.com.tw/portal/pt/pt01002/PT01002Index.xhtml" alt="/">
                    {' '}
                </a>
                <a href="https://service.sunnybank.com.tw/portal/pt/pt01002/PT01002Index.xhtml" alt="/">
                    {' '}
                </a>
                <a href="https://service.sunnybank.com.tw/portal/pt/pt01002/PT01002Index.xhtml" alt="/">
                    {' '}
                </a>
            </div>
            <div id="six" name="six" className="imageContainer six">
                <LazyLoadImage src={six} alt="" />

                <a href="https://www.sunnygo.com.tw/web-front/registerPage/fillPhone" alt="/">
                    {' '}
                </a>
                <a href="https://apps.apple.com/app/id1542874456" alt="/">
                    {' '}
                </a>
                <a href="https://play.google.com/store/apps/details?id=tw.com.sunnygo.mobile" alt="/">
                    {' '}
                </a>
            </div>
            <div id="seven" name="seven" className="imageContainer seven">
                <LazyLoadImage src={seven} alt="" />

                <a href="https://ccas.sunnybank.com.tw/index?channel=SG" alt="/">
                    {' '}
                </a>
                <a
                    href="https://www.sunnygo.com.tw/static_custom/sunny_point/SunnyPoint.html?id=undefined&sonId=197"
                    alt="/"
                >
                    {' '}
                </a>
            </div>

            <div onClick={handleShow('show')} className={show ? 'fixed2 fixedActive ' : 'fixed2 '}>
                <AiOutlineLeft /> 快速導覽
            </div>
        </div>
    );
}

export default SunnyPoint;
