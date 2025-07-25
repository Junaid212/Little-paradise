import { ArrowLeft, ArrowRight  } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const slides = [
  {
    id: 1,
    image: 'assets/img/Allimgs/Sky.webp',
    title: 'Sky',
    path:'/Sky'
  },
  {
    id: 2,
    image: 'assets/img/Allimgs/Picture112.webp',
    title: 'Hospital - Dialysis Center',
    path:'/PERLIYAS'
  },
  {
    id: 3,
    image: 'assets/img/Allimgs/Picture95.webp',
    title: 'TWL',
    path:'/TWL'
  },
  {
    id: 4,
    image: 'assets/img/updatates/project/rue1.jpg',
    title: 'Rué',
    path:'/Rue'
  },
  {
    id: 5,
    image: 'assets/img/Allimgs/Picture118.webp',
    title: 'Legacy',
    path:'/LEGACY'
  },
  {
    id: 6,
    image: 'assets/img/updatates/project/Aura.jpg',
    title: 'Aura ',
    path:'/Aura'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const imagesPerView = 3;
  const maxIndex = Math.max(0, slides.length - imagesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="slider-container">
      <style>
        {`
        
          .slider-header h1 {
            text-align: center;
            font-size: 2.5rem;
            font-weight:500;
            margin-top: 40px;
            
          }
          
          .slider-main {
            position: relative;
            height: 500px;
            margin-left:200px;
            margin-right:200px;
            overflow: hidden;
            justify-item:center;
          }
          .slider-track {
            display: flex;
            height: 80%;
            transition: transform 0.5s ease;
            margin:50px;
            
          }
          .slider-item {
            position: relative;
            padding: 0 10px;
          }
          .image-wrapper {
            height: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 2px;
          }
          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }
          .image-wrapper:hover img {
            transform: scale(1);
          }
          .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
            opacity: 0.6;
            transition: opacity 0.3s;
          }
          .content {
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: white;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s;
          }
          .image-wrapper:hover .content {
            opacity: 1;
            transform: translateY(0);
          }
          .content h3 {
            margin-top: 700px;
            font-size: 1.3rem;
            color: white;
          }
          .content p {
            
            position: absolute;
            font-size: 0.9rem;
          }
          .hover-icon {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            width: 28px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            color: white;
            font-weight: bold;
            opacity: 0;
            transform: scale(0.9);
            transition: all 0.3s;
          }
          .image-wrapper:hover .hover-icon {
            opacity: 1;
            transform: scale(1);
          }
          .nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            border: none;
            background: rgba(0,0,0,0.2);
            color: white;
            font-size: 1.5rem;
            border-radius: 50%;
            cursor: pointer;
            z-index: 2;
          }
          .nav.left {
            left: 0px;
            color:#CB4D29;
          }
          .nav.right {
            right: 0px;
            color:#CB4D29;
          }
          .nav:disabled {
            opacity: 0.4;
            cursor: not-allowed;
          }
          .indicators {
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 12px;
            background-color: #f1f5f9;
          }
          .dot {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            border-radius: 50%;
            transition: all 0.3s;
            cursor: pointer;
          }
          .dot.semi {
            background: #06b6d4;
            transform: scale(1.1);
          }
          .dot.active {
            background: #4f46e5;
            transform: scale(1.3);
          }
          .progress-bar {
            height: 4px;
            background: #e2e8f0;
          }
          .progress {
            height: 100%;
            background: linear-gradient(to right, #4f46e5, #06b6d4);
            transition: width 0.3s;
          }
        `}
      </style>

      {/* Header */}
      <div className="slider-header">
        <h1>Featured Section</h1>
        
      </div>

      {/* Slider */}
      <div className="slider-main">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            width: `${(slides.length * 100) / imagesPerView}%`
          }}
        >
          {slides.map(slide => (
            <div
              key={slide.id}
              className="slider-item"
              style={{ width: `${90 / slides.length}%` }}
            >
              <Link 
                to={slide.path}>
              <div className="image-wrapper">
                <img src={slide.image} alt={slide.title} />
                <div className="overlay" />
                <div className="content">
                  <h3>{slide.title}</h3>
                  {/* <p>{slide.description}</p> */}
                </div>
                {/* <div className="hover-icon">+</div> */}
              </div>
              </Link>
            </div>
            
          ))}
        </div>
      
        <ArrowLeft className="nav left" onClick={prevSlide} disabled={currentIndex === 0}/>
        <ArrowRight className="nav right" onClick={nextSlide} disabled={currentIndex === maxIndex}/>
      </div>

      {/* Dots */}
      {/* <div className="indicators">
        {slides.map((_, index) => {
          const isVisible = index >= currentIndex && index < currentIndex + imagesPerView;
          const isCenter = index === currentIndex + 1;
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(Math.max(0, Math.min(index - 1, maxIndex)))}
              className={`dot ${isCenter ? 'active' : isVisible ? 'semi' : ''}`}
            />
          );
        })}
      </div> */}

      {/* Progress */}
      {/* <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
        />
      </div>*/}
      
    </div> 
  );
};

export default ImageSlider;
