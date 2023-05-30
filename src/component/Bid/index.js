import React from 'react';
import './index.scss';
import { BsCreditCard } from 'react-icons/bs';

function Bid() {
    return (
        <a href="https://www.sunnygo.com.tw/static_custom/11m_active/apply_now.html?id=undefined&sonId=134">
            <div className="bid">
                <BsCreditCard className="bidIcon" />
                立即辦卡享優惠
            </div>
        </a>
    );
}

export default Bid;
// style={{ marginRight: '3', marginLeft: '3' }}
