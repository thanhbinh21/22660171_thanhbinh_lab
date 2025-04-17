import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className='font-bold'>CÂU 4 - Giỏ hàng</h1>
      <button className='border' onClick={() => dispatch(addItem({ id: Date.now(), name: 'SP mới', price: 100, quantity: 1 }))}>
        Thêm sản phẩm
      </button>
      {cartItems.map(item => (
        <div key={item.id} className="my-2 flex justify-between">
          <span>{item.name} - SL: {item.quantity}</span>
          <div>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
          </div>
        </div>
      ))}
      <p>Tổng tiền: {total}đ</p>
    </div>
  );
};

export default Cart;
