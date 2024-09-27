import React from 'react';
import './Footer.css'; // Import CSS cho footer
import { faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>KẾT NỐI VỚI FPTSHOP</h4>
            <div className="social-icons">
            <div className="App">
         <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
         <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
         <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>

    </div>
            </div>
            <p>Tổng đài miễn phí</p>
            <ul>
              <li>Tư vấn mua hàng (Miễn phí): <b>1800.6601</b> (Nhánh 1)</li>
              <li>Hỗ trợ kỹ thuật: <b>1800.6601</b> (Nhánh 2)</li>
              <li>Góp ý, khiếu nại: <b>1800.6616</b> (8h00 - 22h00)</li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>VỀ CHÚNG TÔI</h4>
            <ul >
              <li>Giới thiệu về công ty</li>
              <li>Quy chế hoạt động</li>
              <li>F.Friends - Bạn đồng hành</li>
              <li>Tin tức khuyến mại</li>
              <li>Giới thiệu máy đổi trả</li>
              <li>Hướng dẫn mua hàng & thanh toán online</li>
              <li>Đại lý ủy quyền của Apple</li>
              <li>Tra cứu hóa đơn điện tử</li>
              <li>Tra cứu bảo hành</li>
              <li>Câu hỏi thường gặp</li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>CHÍNH SÁCH</h4>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách trả góp</li>
              <li>Chính sách giao hàng & lắp đặt</li>
              <li>Chính sách mạng di động FPT</li>
              <li>Chính sách xử lý dữ liệu cá nhân</li>
            </ul>
          </div>  
  
          <div className="footer-section">
            <h4>HỖ TRỢ THANH TOÁN</h4>
            <div className="payment-icons">
              <img src="visa.png" alt="Visa" />
              <img src="mastercard.png" alt="MasterCard" />
              <img src="jcb.png" alt="JCB" />
              {/* Add more payment methods as needed */}
            </div>
            <h4>CHỨNG NHẬN</h4>
            <div className="certificates">
              <img src="dmca.png" alt="DMCA" />
              <img src="iso.png" alt="ISO" />
              {/* Add more certifications as needed */}
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
