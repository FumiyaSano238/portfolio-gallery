import React from 'react';
import './About.css';
import imgKyori from './assets/images/Kyori.jpg';
import imgDelivery from './assets/images/21499_color.jpg';
import SlideFadeInText from './components/SlideFadeInText';

function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>こんにちは！私は写真とまだ見ぬ土地に行くことが好きなReact初心者です。</p>
      <p>このギャラリーサイトは、私の好きな風景写真を集めたものです。</p>

      <h2>Profile</h2>

      <div className="hobby">
        <h3>趣味</h3>
        <div className="hobby-item">
          <div className="image-container">
            <SlideFadeInText direction="right">
              <img src={imgKyori} alt="Kyori" className="hobby-image" />
            </SlideFadeInText>
            <SlideFadeInText direction="right">
              <p className="image-description">自転車での一番の遠出は片道30キロ</p>
            </SlideFadeInText>
          </div>

          <SlideFadeInText direction="left" className="slide-wrapper">
            <ul className="hobby-list">
              <li>PCゲーム</li>
              <li>自転車で遠出</li>
              <li>英語学習</li>
            </ul>
          </SlideFadeInText>
        </div>
      </div>

      <div className="Favorite">
        <h3>好きな食べ物</h3>
        <div className="Favorite-item">
          <div className="image-container">
            <SlideFadeInText direction="right">
              <img src={imgDelivery} alt="Delivery" className="Favorite-image" />
            </SlideFadeInText>
            <SlideFadeInText direction="right">
              <p className="image-description">ピザが好きなのは、デリバリーのバイトをしているため</p>
            </SlideFadeInText>
          </div>

          <SlideFadeInText direction="left" className="slide-wrapper">
            <ul className="Favorite-list">
              <li>ピザ</li>
              <li>寿司</li>
              <li>カレー</li>
            </ul>
          </SlideFadeInText>
        </div>
      </div>
    </div>
  );
}

export default About;

