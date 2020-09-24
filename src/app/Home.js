import React from 'react';
import {Link} from 'react-router-dom';
import './home.less';
import calculatorImg from '../images/calculator.png';
import timerImg from '../images/timer.png';
import hero_image from '../images/hero-image.png';

const Home = () => {
    return (<div className="home">

            <div className="home_header_div_hero_div">
                <img className="home_header_div_hero_img" src={hero_image} alt='计算器'></img>
            </div>
            <div>
                <h1 className="home_header_div_text">在线实用工具</h1>
            </div>
            <div className="body_img_div">
                <div>
                    <img className="body_img_div_cal" src={calculatorImg} alt='calculatorImg'></img>
                    <Link to='/calculator'>计算器</Link>
                </div>
                <div>
                    <img className="body_img_div_timer" src={timerImg} alt='timerImg'></img>
                    <Link to='/timer'>倒计时器</Link>
                </div>
            </div>


        </div>
    );
};

export default Home;