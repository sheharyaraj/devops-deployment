import React, { useState, useEffect } from 'react';
import '../styles/Card.css';
import '../styles/WaterMark.css'; // Import watermark styles

const Card = ({ courseName, images }) => {
  const [imageError, setImageError] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScreenshotOverlay, setShowScreenshotOverlay] = useState(false);
  const [watermarkFontSize, setWatermarkFontSize] = useState(20); // New state for watermark font size

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
    setShowScreenshotOverlay(!fullscreen); // Show the screenshot overlay

    // Adjust watermark font size when entering fullscreen mode
    if (!fullscreen) {
      setWatermarkFontSize(100);
    } else {
      setWatermarkFontSize(20);
    }
  };

  const closeFullscreen = () => {
    setFullscreen(false);
    setShowScreenshotOverlay(false); // Hide the screenshot overlay
  };

  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousIndex);
  };

  const buttonStyle = {
    backgroundColor: '#1F1B2D',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default right-click context menu behavior
    setShowScreenshotOverlay(true); // Show the screenshot overlay
  };

  useEffect(() => {
    const handleDocumentContextMenu = (e) => {
      e.preventDefault(); // Prevent right-click on the whole document
    };

    document.addEventListener('contextmenu', handleDocumentContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleDocumentContextMenu);
    };
  }, []);

  return (
    <div className={`card ${fullscreen ? 'fullscreen' : ''}`} onContextMenu={handleContextMenu}>
      <div className="card-images">
      <div className="watermark">
          <div className="watermark-text" style={{ fontSize: `${watermarkFontSize}px` }}>
            Paper Vault
          </div>
        <img
          src={`${process.env.REACT_APP_API_URL}/${images[currentImageIndex]}`}
          className={`card-img-top ${fullscreen ? 'fullscreen-img' : ''}`}
          alt="Course"
          onClick={toggleFullscreen}
          onError={() => setImageError(true)}
          onContextMenu={handleContextMenu}
          style={!fullscreen ? { height: '200px', width: '100%', objectFit: 'cover' } : {}}
        />
        </div>
        {showScreenshotOverlay && <div className="screenshot-overlay"></div>}
        {fullscreen && images.length > 1 && (
          <>
            <button className="nav-button prev-button" onClick={showPreviousImage}>
              &#8249;
            </button>
            <button className="btn btn-primary close-button" onClick={closeFullscreen} style={buttonStyle}>
              Close
            </button>
            <button className="nav-button next-button" onClick={showNextImage}>
              &#8250;
            </button>
          </>
        )}
        {fullscreen && images.length === 1 && (
          <button className="btn btn-primary close-button" onClick={closeFullscreen} style={buttonStyle}>
            Close
          </button>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{courseName}</h5>
        {!fullscreen && (
          <button className="btn btn-primary" onClick={toggleFullscreen} style={buttonStyle}>
            Open
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
