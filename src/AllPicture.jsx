import React, { useState } from 'react';
import './AllPicture.css';

// 画像読み込み
import imgkyoto from './assets/imagesKKyoto.jpg';
import imgsakura from './assets/images/sakura.jpg';
import imgyoake from './assets/images/yoake.jpg';
import imgエアーズロック from './assets/images/エアーズロック.jpg';
import imgイエローナイフ from './assets/images/イエローナイフ.jpg';
import imgグランドキャニオン from './assets/images/グランドキャニオン.jpg';
import imgノイシュバンシュタイン城 from './assets/images/ノイシュバンシュタイン城.jpg';
import img角島大橋 from './assets/images/角島大橋.jpg';
import img白川郷 from './assets/images/白川郷.jpg';
import imgマッターホルン from './assets/images/マッターホルン.jpg';
import imgウユニ塩湖 from './assets/images/ウユニ塩湖.jpg';
import imgcamps_bay_beach from './assets/images/camps_bay_beach.jpg';
import imgmont_saint_michel from './assets/images/mont_saint_michel.jpg';
import imgハーユバリー島 from './assets/images/ハーユバリー島.jpg';
import imganse_source_dargent from './assets/images/anse_source_dargent.jpg';

const allImages = [
  { src: imgkyoto, category: 'japan' },
  { src: imgsakura, category: 'japan' },
  { src: imgyoake, category: 'japan' },
  { src: img角島大橋, category: 'japan' },
  { src: img白川郷, category: 'japan' },
  { src: imgエアーズロック, category: 'overseas' },
  { src: imgイエローナイフ, category: 'overseas' },
  { src: imgグランドキャニオン, category: 'overseas' },
  { src: imgノイシュバンシュタイン城, category: 'overseas' },
  { src: imgマッターホルン, category: 'overseas' },
  { src: imgウユニ塩湖, category: 'overseas' },
  { src: imgcamps_bay_beach, category: 'overseas' },
  { src: imgmont_saint_michel, category: 'overseas' },
  { src: imgハーユバリー島, category: 'overseas' },
  { src: imganse_source_dargent, category: 'overseas' },
];

function AllPicture() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null); // 選択画像
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル開閉

  const filteredImages = filter === 'all'
    ? allImages
    : allImages.filter(img => img.category === filter);

  // 画像クリック時の処理
  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="all-picture-page">
      <h2>All Pictures</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>すべて</button>
        <button onClick={() => setFilter('japan')}>日本</button>
        <button onClick={() => setFilter('overseas')}>海外</button>
      </div>

      <div className="image-grid">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt || `pic-${index}`}
            className="gallery-img"
            onClick={() => openModal(img)} // クリックでモーダル開く
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* モーダル表示 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <button className="modal-close-btn" onClick={closeModal}>× 閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllPicture;