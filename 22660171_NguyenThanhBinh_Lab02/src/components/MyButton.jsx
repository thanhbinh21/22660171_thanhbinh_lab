import React, { useState } from "react";

function MyButton() {
    const [color, setColor] = useState('');
    const [bgColor, setBgColor] = useState('');

    const handleChangeColor = () => {
        setBgColor(color);
    };

    return (
        <div style={{ backgroundColor: bgColor, padding: '20px' }}>
            <input 
                type="text" 
                placeholder="Nhap mau sac muon thay doi" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
            />
            <button onClick={handleChangeColor}>THAY DOI</button>
        </div>
    );
}

export default MyButton;