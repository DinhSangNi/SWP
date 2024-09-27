import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import Slider from "react-slick";
import { assets } from "../Assets/assets";
const brands = ["Lenovo", "Asus", "Dell", "HP"]; 
const brands1 = ["IPHONE", "OPPO", "XIAOMI", "SAMSUNG"]; 
const products = [
  {
    id: 1,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "20.990.000 đ",
    discount: "Giảm 3.000.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 3050 6GB, RAM 12GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 2,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop2,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 3,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop3,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id:4,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop4,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 5,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop5,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 6,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
];
const dienthoai = [
  {
    id: 1,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "20.990.000 đ",
    discount: "Giảm 3.000.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 3050 6GB, RAM 12GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 2,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop2,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 3,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop3,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id:4,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop4,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 5,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop5,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 6,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
];
const dongho = [
  {
    id: 1,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "20.990.000 đ",
    discount: "Giảm 3.000.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 3050 6GB, RAM 12GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 2,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop2,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 3,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop3,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id:4,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop4,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 5,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop5,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 6,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
];
const dogiadung = [
  {
    id: 1,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "20.990.000 đ",
    discount: "Giảm 3.000.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 3050 6GB, RAM 12GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 2,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop2,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 3,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop3,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id:4,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop4,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 5,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop5,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
  {
    id: 6,
    name: "Laptop Lenovo Gaming LOQ - 15IAx9 i5...",
    priceBefore: "23.990.000 đ",
    priceAfter: "21.290.000 đ",
    discount: "Giảm 2.700.000 đ",
    image: assets.laptop1,
    description: "GeForce RTX 2050 4GB, RAM 24GB, Intel Core i5-12450HX",
    offer: "Tặng thêm 1 NĂM bảo hành",
  },
];
const ProductList = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
 <div>
        <Box sx={{ textAlign: 'center', padding: '10px' }}>
          <h2>Các Loại Máy Tính</h2>
        {brands.map((brand, index) => (
          <Button key={index} variant="contained" color="white" sx={{ margin: '0 10px' }}>
            {brand}
          </Button>
        ))}
      </Box>
    <div style={{ padding: "20px" }}>
        <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} style={{ padding: '0 15px' }}> {/* Tạo khoảng cách giữa các card */}
          <Card style={{ width:'280px',height:'460px' }}> {/* Sửa độ dài của mỗi card */}
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image}
              style={{ height: '190px', objectFit: 'cover' }}
            />
            <CardContent style={{ textAlign: 'left', height: '300px' }}> {/* Sửa chiều cao phần nội dung */}
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {product.priceAfter}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strike>{product.priceBefore}</strike>
              </Typography>
              <Typography variant="body2" color="error">
                {product.discount}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {product.offer}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Mua ngay
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  </div>
  </div>
  <div>
  <Box sx={{ textAlign: 'center', padding: '10px' }}>
          <h2>Điện Thoại Thông Minh </h2>
        {brands1.map((brand, index) => (
          <Button key={index} variant="contained" color="white" sx={{ margin: '0 10px' }}>
            {brand}
          </Button>
        ))}
      </Box>
    <div style={{ padding: "20px" }}>
        <Slider {...settings}>
      {dienthoai.map((dienthoais) => (
        <div key={dienthoais.id} style={{ padding: '0 15px' }}> {/* Tạo khoảng cách giữa các card */}
          <Card style={{ width:'280px',height:'460px' }}> {/* Sửa độ dài của mỗi card */}
            <CardMedia
              component="img"
              alt={dienthoais.name}
              image={dienthoais.image}
              style={{ height: '190px', objectFit: 'cover' }}
            />
            <CardContent style={{ textAlign: 'left', height: '300px' }}> {/* Sửa chiều cao phần nội dung */}
              <Typography variant="h6" component="div">
                {dienthoais.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dienthoais.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {dienthoais.priceAfter}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strike>{dienthoais.priceBefore}</strike>
              </Typography>
              <Typography variant="body2" color="error">
                {dienthoais.discount}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {dienthoais.offer}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Mua ngay
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
</div>


<div>
        <Box sx={{ textAlign: 'center', padding: '10px' }}>
          <h2>Đồng Hồ Thông Minh</h2>
        {brands.map((brand, index) => (
          <Button key={index} variant="contained" color="white" sx={{ margin: '0 10px' }}>
            {brand}
          </Button>
        ))}
      </Box>
    <div style={{ padding: "20px" }}>
        <Slider {...settings}>
      {dongho.map((donghos) => (
        <div key={donghos.id} style={{ padding: '0 15px' }}> {/* Tạo khoảng cách giữa các card */}
          <Card style={{ width:'280px',height:'460px' }}> {/* Sửa độ dài của mỗi card */}
            <CardMedia
              component="img"
              alt={donghos.name}
              image={donghos.image}
              style={{ height: '190px', objectFit: 'cover' }}
            />
            <CardContent style={{ textAlign: 'left', height: '300px' }}> {/* Sửa chiều cao phần nội dung */}
              <Typography variant="h6" component="div">
                {donghos.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {donghos.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {donghos.priceAfter}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strike>{donghos.priceBefore}</strike>
              </Typography>
              <Typography variant="body2" color="error">
                {donghos.discount}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {donghos.offer}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Mua ngay
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  </div>
  </div>

  <div>
        <Box sx={{ textAlign: 'center', padding: '10px' }}>
          <h2>Đồ Gia Dụng Điện Tử </h2>
        {brands.map((brand, index) => (
          <Button key={index} variant="contained" color="white" sx={{ margin: '0 10px' }}>
            {brand}
          </Button>
        ))}
      </Box>
    <div style={{ padding: "20px" }}>
        <Slider {...settings}>
      {dogiadung.map((dogiadungs) => (
        <div key={dogiadungs.id} style={{ padding: '0 15px' }}> {/* Tạo khoảng cách giữa các card */}
          <Card style={{ width:'280px',height:'460px' }}> {/* Sửa độ dài của mỗi card */}
            <CardMedia
              component="img"
              alt={dogiadungs.name}
              image={dogiadungs.image}
              style={{ height: '190px', objectFit: 'cover' }}
            />
            <CardContent style={{ textAlign: 'left', height: '300px' }}> {/* Sửa chiều cao phần nội dung */}
              <Typography variant="h6" component="div">
                {dogiadungs.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dogiadungs.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {dogiadungs.priceAfter}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strike>{dogiadungs.priceBefore}</strike>
              </Typography>
              <Typography variant="body2" color="error">
                {dogiadungs.discount}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                {dogiadungs.offer}
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Mua ngay
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  </div>
  </div>





  </div>
  </div>
);
};


export default ProductList;
