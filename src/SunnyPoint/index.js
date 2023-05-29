import React, { useState } from 'react';
import './app.scss';

import { Link, animateScroll } from 'react-scroll';
import { AiOutlineLeft } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { TiArrowSortedDown } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import Top from '../component/top/Top';
import Bid from '../component/Bid';

function SunnyPoint() {
    // var scroll = animateScroll;
    const [show, setShow] = useState(true);
    const handleShow = (type) => () => setShow(type === 'show');

    const [sixImg, setSixImg] = useState(false);

    const top = 'img/SunnyPoint/點數活動頁5-01.jpg';
    const topStar = 'img/SunnyPoint/點數活動頁5-27.png';
    const one = 'img/SunnyPoint/點數活動頁5-31.png';
    const one_app = 'img/SunnyPoint/點數活動頁5-03.png';
    const one_circle1 = 'img/SunnyPoint/點數活動頁5-34.png';
    const one_circle2 = 'img/SunnyPoint/點數活動頁5-33.png';
    const one_circle3 = 'img/SunnyPoint/點數活動頁5-32.png';
    const two = 'img/SunnyPoint/點數活動頁5-05.jpg';
    const three = 'img/SunnyPoint/點數活動頁5-06.jpg';
    const four = 'img/SunnyPoint/點數活動頁5-07.jpg';
    const five = 'img/SunnyPoint/SunnyPoint大進擊-32_04.png';
    const five1 = 'img/SunnyPoint/SunnyPoint大進擊2-31.png';
    // const image=['img/SunnyPoint/點數活動頁5-01.jpg','img/SunnyPoint/點數活動頁5-27.png'];

    return (
        <div id="container" className="container">
            <Bid />
            <a href="https://www.sunnygo.com.tw/web-front/home">
                <div className="prev">
                    陽信商店街購物
                    <IoIosArrowForward />
                </div>
            </a>
            <Top />
            <div className={show ? 'fixed' : 'fixed fixedActive'}>
                <div onClick={handleShow('hide')} className="fixedItem">
                    <LazyLoadImage className="top" src={topStar} alt="" />
                    Sunny
                    <br />
                    Point
                </div>
                <Link href="#one" to="one" spy={true} className="fixedItem" activeClass="fixedItem active">
                    賞利點 <br />
                    介紹
                </Link>
                <Link href="#two" to="two" spy={true} className="fixedItem" activeClass="fixedItem active">
                    賞利點 <br />
                    集點
                </Link>
                <Link href="#three" to="three" spy={true} className="fixedItem" activeClass="fixedItem active">
                    賞利點 <br />
                    兌換
                </Link>
                <Link href="#four" to="four" spy={true} className="fixedItem" activeClass="fixedItem active">
                    下載APP
                </Link>
                <Link href="#five" to="five" spy={true} className="fixedItem" activeClass="fixedItem active">
                    點數規則
                </Link>
                {/* <a href="#top" className="fixedItem">
                    <div> ▲TOP</div>
                </a> */}
            </div>

            <div className="imageContainer">
                <img src={top} alt="" />
            </div>

            <div id="one" name="one" className="imageContainer one">
                <LazyLoadImage src={one} alt="" />
                <nav>
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
                </Link>
            </div>
            <div id="two" name="two" className="imageContainer two">
                <LazyLoadImage src={two} alt="" />

                <a href="https://www.sunnygo.com.tw/web-front/registerPage/fillPhone" alt="送100">
                    {' '}
                </a>
                <a
                    href="https://www.sunnygo.com.tw/static_custom/11m_active/apply_now.html?id=undefined&sonId=134"
                    alt="點我看更多"
                >
                    {' '}
                </a>
                <a
                    href="https://www.sunnygo.com.tw/static_custom/april_sunnylife/index.html?id=undefined&sonId=198"
                    alt="當月加碼"
                >
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/web-front/BankdividendHomepage/bankdivHome" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnybank.com.tw/activityevent/112-01_SunnyLifePoints/web.html" alt="/">
                    {' '}
                </a>
                <a
                    href="https://www.sunnygo.com.tw/static_custom/11m_active/apply_now.html?id=undefined&sonId=134"
                    alt="/"
                >
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Search.html" alt="/">
                    {' '}
                </a>
            </div>

            <div id="three" name="three" className="imageContainer mt three">
                <LazyLoadImage src={three} alt="" />
                <a href="https://www.sunnygo.com.tw/web-front/home" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Exchang.html" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/web-front/allTube?id=65" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/Sunnylife.html" alt="/">
                    {' '}
                </a>
                <a href="https://www.sunnygo.com.tw/static_custom/11m_active/cooperative.html" alt="/">
                    {' '}
                </a>
            </div>
            <div id="four" name="four" className="imageContainer four">
                <LazyLoadImage src={four} alt="" />

                <a href="https://reurl.cc/1ezLzp" alt="/">
                    {' '}
                </a>
                <a href="https://reurl.cc/ykXbl6" alt="/">
                    {' '}
                </a>
                <div
                    className="six"
                    onClick={() => {
                        setSixImg(true);
                    }}
                ></div>
                <a href="https://www.sunnygo.com.tw/static_custom/sunny_point/MomPlan.html" alt="/">
                    {' '}
                </a>
            </div>
            <div id="five" name="five" className="imageContainer ">
                <LazyLoadImage className="five" id="five1" src={five} alt="" />
                <div className="fiveCon">
                    <div className="title">
                        <h2>Sunny Life 點數規則及說明</h2>
                        <div className="cow">
                            <LazyLoadImage src={five1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="position">
                    <div className="left">
                        <div className="pointBox">
                            <h4 className="text">Q1.什麼是「Sunny Life賞利點」</h4>
                            <div className="containBox">
                                <TiArrowSortedDown className="icon" size={30} />
                                <p>
                                    「Sunny
                                    Life賞利點」是陽信集團生活圈合作的伙伴、商店、通路一起共享流通的紅利點數回饋機制。「Sunny
                                    Life賞利點」會員可以透過吃、喝、玩、樂以及在陽信網路購物商城與金融業務往來等各項消費歷程，累積點數或使用點數兌換折抵商品與服務。
                                </p>
                            </div>
                        </div>
                        <div className="pointBox">
                            <h4 className="text">Q2.如何成為「Sunny Life賞利點」會員</h4>
                            <div className="containBox">
                                <TiArrowSortedDown className="icon" size={30} />
                                {/* <h3 className="icon"  size={30}>▼</h3> */}
                                <p>
                                    只要登入陽信商店街網站https://www.sunnygo.com.tw或是下載陽信Sunny購APP註冊成為會員，可同時擁有陽信商店街「Sunny
                                    Go」與「Sunny
                                    Life賞利點」的會員資格。新會員註冊選擇手機綁定即贈送100點獎勵(使用期限90天)
                                </p>
                            </div>
                        </div>
                        <div className="pointBox">
                            <h4 className="text">Q3.成為「Sunny Life賞利點」會員的好處</h4>
                            <div className="containBox">
                                <TiArrowSortedDown className="icon" size={30} />
                                <p>
                                    1.在陽信商店街網路購物消費享點數1%優惠回饋以及不定期促銷加碼、商品折扣、贈品兌換等各項活動參加資格。
                                </p>
                                <p>
                                    2.點數等同現金，每1點等同新台幣1元，會員可使用點數兌換陽信商店街商品或是於結帳時選擇全額或部份折抵消費。
                                </p>
                                <p>
                                    3.會員使用點數購買陽信商店街商品仍保有退換貨以及七天審閱期等保障權益，如有取消訂單或申請退貨，點數可自動退回會員帳戶。
                                </p>
                                <p>
                                    4.會員於陽信商店街結帳刷陽信信用卡享「Sunny
                                    Life賞利點」加碼回饋；使用紅利點數1點可兌換「Sunny
                                    Life賞利點」1點；1,500點可兌換1,600點。
                                </p>
                                <p>
                                    5.會員專屬APP，可輕鬆掌握「Sunny
                                    Life賞利點」生活圈共享伙伴包括餐廳、咖啡廳、旅遊、樂園、健身房、電影院、停車、保險等點數累積/折抵/兌換等資訊(本項服務由陽信電子商務股份有限公司提供開放)。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="pointBox">
                            <h4 className="text">Q4.如何獲得「Sunny Life賞利點」</h4>
                            <div className="containBox">
                                <TiArrowSortedDown className="icon" size={30} />
                                <p>
                                    1.參加陽信銀行及其關係企業提供的金融服務指定任務，例如辦理開戶並開通網路銀行、信用卡新戶首刷、開通網銀APP、申辦貸款、期貨下單等等。(詳細活動內容以陽信銀行與其關係企業官網公告為主)
                                </p>
                                <p>2.經常到陽信商店街網路購物獲得1%點數回饋以及不定期的促銷贈點</p>
                                <p>3.前往「Sunny Life賞利點」生活圈共享伙伴指定店家消費集點(陸續開放中)</p>
                            </div>
                        </div>
                        <div className="pointBox">
                            <h4 className="text">Q5.「Sunny Life賞利點」使用提醒</h4>
                            <div className="containBox">
                                <TiArrowSortedDown className="icon" size={30} />
                                <p>
                                    1.點數匯入會員帳戶時間以及使用效期將依各項活動內容為主，點數逾期自動失效、無法補發亦無法兌換成現金或商品。(點數查詢可至會員中心→賞利點數→點數查詢)
                                </p>
                                <p>
                                    2.點數不支援合併歸戶亦不提供轉讓或轉贈功能。如有贈送需求，可先行使用點數購買電子票券或商品後再進行轉贈。
                                </p>
                                <p>
                                    3.陽信商店街網路購物回饋點數1%與消費發票開立金額係以訂單實際現金結帳金額計算，使用點數折抵部份將不予列入。
                                </p>
                                <p>
                                    4.如對「Sunny
                                    Life賞利點」有任何的疑問，可直接E-mail至servicevip@sunnygo.com.tw或是在「連絡我們」留下您的問題https://www.sunnygo.com.tw/sunnygo/index.php?action=contact，將由專人協助您排除問題。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
