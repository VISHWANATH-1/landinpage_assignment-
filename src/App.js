import React, { useEffect, useState } from 'react';
import img1 from "./Images/11.jpg";
import img2 from "./Images/22.jpg";
import img3 from "./Images/33.webp";
import img4 from "./Images/44.jpg";
import './App.css';
import Sidebar from "./Components/Sidebar"

function App() {
  const imageList = [
    {
      name: 'Siddhartha Gautama', url: img1, Des: "Siddhartha Gautama, commonly known as the Buddha, Maitreya is a bodhisattva who will appear on Earth in the future, achieve complete enlightenment, and teach the dharma"
    },
    {
      name: 'Maitreya', url: img2, Des: "Siddhartha Gautama, commonly known as the Buddha, Maitreya is a bodhisattva who will appear on Earth in the future, achieve complete enlightenment, and teach the dharma"
    },
    {
      name: 'Avalokiteshvara', url: img3, Des: "Siddhartha Gautama, commonly known as the Buddha, Maitreya is a bodhisattva who will appear on Earth in the future, achieve complete enlightenment, and teach the dharma"
    },
    {
      name: 'Manjushri', url: img4, Des: "Siddhartha Gautama, commonly known as the Buddha, Maitreya is a bodhisattva who will appear on Earth in the future, achieve complete enlightenment, and teach the dharma"
    },
  ];

  const [bgImageUrl, setBgImageUrl] = useState('');

  useEffect(() => {
    // Function to change the background image URL randomly every 3 seconds
    const changeBackgroundImage = () => {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      setBgImageUrl(imageList[randomIndex].url);
    };

    // Change background image initially and then every 3 seconds
    changeBackgroundImage();
    const interval = setInterval(changeBackgroundImage, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [imageList]);

  const handleImageSelect = (image) => {
    setBgImageUrl(image.url);
  };

  return (
    <div>
      <Sidebar imageList={imageList} onImageSelect={handleImageSelect} />
      <div className="bg-image" style={{ backgroundImage: `url(${bgImageUrl})` }}>
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default App;
