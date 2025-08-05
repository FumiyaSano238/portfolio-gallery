import './App.css'
import './index.css'
import SlideFadeInText from './components/SlideFadeInText';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import AllPicture from './AllPicture';



// 画像読み込み
import imgkyoto from './assets/images/kyoto.jpg'
import imgsakura from './assets/images/sakura.jpg'
import imgyoake from './assets/images/yoake.jpg'
import imgエアーズロック from './assets/images/エアーズロック.jpg'
import imgイエローナイフ from './assets/images/イエローナイフ.jpg'
import imgグランドキャニオン from './assets/images/グランドキャニオン.jpg'
import imgノイシュバンシュタイン城 from './assets/images/ノイシュバンシュタイン城.jpg'
import img角島大橋 from './assets/images/角島大橋.jpg'
import img白川郷 from './assets/images/白川郷.jpg'
import imgマッターホルン from './assets/images/マッターホルン.jpg'

const images = [
  imgkyoto,
  imgsakura,
  imgyoake,
  imgエアーズロック,
  imgイエローナイフ,
  imgグランドキャニオン,
  imgノイシュバンシュタイン城,
  img角島大橋,
  img白川郷,
  imgマッターホルン,
]

// Homeコンポーネントはページ固有のコンテンツのみを返す
function Home() {
  return (
    <>
      <SlideFadeInText>Scenery Gallery</SlideFadeInText>
      <div className="autoswipe">
        <div className="gallery-track">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`gallery-${index}`}
              className="gallery-image"
            />
          ))}
          {images.map((src, index) => (
            <img
              key={index + images.length}
              src={src}
              alt={`gallery-${index}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </>
  )
}

// Appコンポーネントで共通のレイアウトとルーティングを管理
function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1 className="logo">My Favorite Scenery</h1>
          <nav className="nav">
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/about">about</Link></h3>
            <h3><Link to="/all-picture">all picture</Link></h3>
          </nav>
        </header>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/all-picture" element={<AllPicture />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;