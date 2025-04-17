import React, { useState } from 'react';
import Counter from './Cau1/Counter';
import Todo from './Cau2/Todo';
import ThemeToggle from './Cau3/ThemeToggle';
import Cart from './Cau4/Cart';
import Auth from './Cau5/Auth';

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (featureName) => {
    setSelectedFeature(featureName);
  };

  const renderSelectedFeature = () => {
    switch (selectedFeature) {
      case 'Counter':
        return <Counter />;
      case 'Todo':
        return <Todo />;
      case 'ThemeToggle':
        return <ThemeToggle />;
      case 'Cart':
        return <Cart />;
      case 'Auth':
        return <Auth />;
      default:
        return (
          <div>
            <p>Vui lòng chọn một chức năng để hiển thị:</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Counter')}
              >
                Bộ đếm
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Todo')}
              >
                Danh sách việc cần làm
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('ThemeToggle')}
              >
                Thay đổi giao diện
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Cart')}
              >
                Giỏ hàng
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Auth')}
              >
                Xác thực
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 p-6">
      {renderSelectedFeature()}
    </div>
  );
};

export default App;