import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling the sidebar

const Sidebar = ({ imageList, onImageSelect }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>

                <h2>Name Of The Images </h2>
                <ul>
                    {imageList.map((image, index) => (
                        <li key={index} onClick={() => onImageSelect(image)} style={{ cursor: "pointer" }}>
                            {image.name}

                        </li>
                    ))}
                </ul>
                <ul>
                    {
                        imageList.map((img) => {
                            return (

                                <div className="div">
                                    {img.Des}
                                </div>
                            )
                        })
                    }
                </ul>
                <div >
                    <button className='BTN-BOT'>ADD TO COLLECTION</button>
                    <button className='BTN-BOT'>SOUVENER</button>
                </div>
            </div>
            <button className="close-btn" onClick={handleSidebarToggle}>
                {isSidebarOpen ? '<' : '>'}
            </button>

        </>
    );
};

export default Sidebar;
