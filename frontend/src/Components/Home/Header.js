import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Menu from '../Popper/Menu';
import { assets } from '../Assets/assets';
import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const MENU_ITEMS = [
  {
    title: 'Profile',
    icon: <i class="fa-solid fa-user"></i>,
    to: '/profile',
  },
  {
    title: 'Language',
    icon: <i class="fa-solid fa-globe"></i>,
  },
  {
    title: 'Logout',
    icon: <i class="fa-solid fa-right-from-bracket"></i>
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(false);


  const user = useSelector((state) => { return state.login.currentUser || state.register.newUser });
  console.log(user);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInfoBox = () => {
    setIsInfoBoxVisible(!isInfoBoxVisible);
  };

  return (
    <header className="header1">
      <div className="header1-content">

        {/* Logo Section */}
        <div className="logo2">
          <img src={assets.logo2} alt="FPT Shop Logo" />
        </div>

        <div className="menu-category">
          <button className="category-button" onClick={toggleMenu}>
            <i className="fa fa-bars"></i> Danh mục
          </button>
          {isMenuOpen && (
            <div className="menu-container">
              <div className="menu-dropdown">
                <ul>
                  <li onClick={toggleInfoBox}>Điện thoại</li>
                  <li>Laptop</li>
                  <li>Phụ kiện</li>
                  <li>Chuyên trang Apple</li>
                  <li>Chuyên trang Samsung</li>
                  <li>Chuyên trang Xiaomi</li>
                  <li>Tivi, Tủ lạnh, Điều hòa</li>
                  <li>Máy giặt, Máy sấy, Tủ sấy</li>
                  <li>Máy tính bảng, Máy in, Đồng hồ</li>
                  <li>PC, Linh kiện, Màn hình, Phần mềm</li>
                  <li>Quạt, Quạt điều hòa, Thiết bị sưởi ấm</li>
                  <li>Máy cũ</li>
                  <li>Thông tin hay</li>
                  <li>Sim thẻ - Thanh toán tiện ích</li>
                </ul>
              </div>

              {/* Floating Info Box for "Điện thoại" */}
              {isInfoBoxVisible && (
                <div className="info-box">
                  <h3>Thông tin về điện thoại</h3>
                  <ul>
                    <li>iPhone 16 Series</li>
                    <li>iPhone 15 Series</li>
                    <li>Samsung Galaxy S Series</li>
                    <li>OPPO Reno Series</li>
                    <li>Xiaomi Poco Series</li>
                  </ul>
                  <button onClick={toggleInfoBox} className="close-info-box">
                    Đóng
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search Bar Section */}
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Tìm Kiếm" />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="suggested-keywords">
          <span>Iphone</span>
          <span>Xiaomi</span>
          <span>Samsung</span>
          <span>Laptop</span>
          <span>Asus</span>
          <span>Lenovo</span>
          <span>Apple</span>
        </div>
        {/* User and Cart Section */}
        <div className="user-cart">
          {
            user ?
              <Menu items={MENU_ITEMS}>
                <button className="user-button">
                  <span style={{ 'margin-right': '5px' }}>Hi, </span>
                  {user.username}
                </button>
              </Menu>
              :
              <button className="login-btn">
                <Link className='login-btn-link' to='/login'>
                  <i class="fa fa-right-to-bracket" />
                  Login
                </Link>
              </button>
          }
          <button className="cart-button">
            <i className="fa fa-shopping-cart"></i>
            <span>Giỏ hàng</span>
          </button>
        </div>
      </div>

      {/* Marquee Section (Quảng cáo) */}
      <div className="quangcao text-white text-sm">
        <div className="scrolling-text">
          Chào mừng bạn đến với cửa hàng của chúng tôi. Nếu bạn có vấn đề gì, xin liên lạc Hotline: 1588058 Truong Dinh Sang.
        </div>
      </div>
    </header>
  );
};

export default Header;
