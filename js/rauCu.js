let products = [
    
   
    {
        name: 'Cải Bẹ Xanh 4KFarm gói 500g',
        image: 'https://cdn.tgdd.vn/Products/Images/8784/232082/bhx/cai-be-xanh-4kfarm-tui-500g-202109171111073020_300x300.jpeg',
        price_old: '15.000đ',
        price_current: '12.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Cải Thìa 4KFarm gói 500g',
        image: 'https://cdn.tgdd.vn/Products/Images/8784/232077/bhx/cai-thia-4kfarm-tui-500g-202109171135350483_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Khoai lang Nhật dẻo ngọt túi 1kg',
        image: 'https://cdn.tgdd.vn/Products/Images/8785/226905/bhx/khoai-lang-nhat-tui-1kg-202103031621032927_300x300.jpg',
        price_old: '36.000đ',
        price_current: '35.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Cà rốt Đà Lạt túi 500g (2-4 củ)',
        image: 'https://cdn.tgdd.vn/Products/Images/8785/226904/bhx/ca-rot-da-lat-tui-500g-202103031620580264_300x300.jpg',
        price_old: '17.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Khoai mỡ tím túi lưới 1kg (1-2 củ)',
        image: 'https://cdn.tgdd.vn/Products/Images/8785/220460/bhx/khoai-mo-tui-1kg-202103031643285988_300x300.jpg',
        price_old: '47.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bí đỏ hồ lô túi 700g (0.5-1 trái)',
        image: 'https://cdn.tgdd.vn/Products/Images/8785/232929/bhx/bi-do-ho-lo-tui-700g-202103031501344636_300x300.jpg',
        price_old: '24.000đ',
        price_current: '23.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nấm đùi gà cây to 200g (2-4 cây)',
        image: 'https://cdn.tgdd.vn/Products/Images/8785/226904/bhx/ca-rot-da-lat-tui-500g-202103031620580264_300x300.jpg',
        price_old: '30.000đ',
        price_current: '27.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Ớt chuông đỏ túi 300g (1-2 quả)',
        image: 'https://cdn.tgdd.vn/Products/Images/8785/233908/bhx/ot-chuong-do-tui-300g-202101271558404495_300x300.jpg',
        price_old: '30.000đ',
        price_current: '26.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Ổi Đài Loan túi 1kg (4-6 trái)',
        image: 'https://cdn.tgdd.vn/Products/Images/8788/226921/bhx/oi-dai-loan-tui-500g-202103310113593052_300x300.jpeg',
        price_old: '20.000đ',
        price_current: '19.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nhãn thái cột chùm giòn ngọt 1kg',
        image: 'https://cdn.tgdd.vn/Products/Images/8788/245500/bhx/nhan-thai-chum-tui-1kg-202110081038219253_300x300.jpeg',
        price_old: '30.000đ',
        price_current: '29.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Xoài keo giòn túi 1kg (2-3 trái)',
        image: 'https://cdn.tgdd.vn/Products/Images/8788/233096/bhx/xoai-keo-tui-1kg-202103041527383985_300x300.jpg',
        price_old: '40.000đ',
        price_current: '30.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Lê Nam Phi nhập khẩu hộp 1kg',
        image: 'https://cdn.tgdd.vn/Products/Images/8788/202856/bhx/le-nam-phi-nhap-khau-hop-1kg-5-6-trai-202105101332548898_300x300.jpeg',
        price_old: '80.000đ',
        price_current: '75.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    
   
  
];
function renderUI(arr, str) {
    let productsEle = document.querySelector(str);
    productsEle.innerHTML = '';
    arr.forEach(e => {
        productsEle.innerHTML += `
        <div class="col-c-3 col-3">
            <a class="home-product-item">
                <div class="home-product-item__img " style = "background-image: url('${e.image}')"></div>
                <h4 class="home-product-item__name">${e.name}</h4> 
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${e.price_old}</span>
                    <span class="home-product-item__price-current">${e.price_current}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="fas fa-star"></i>

                    </div>
                    <span class="home-product-item__sold">${e.sold}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">Whoo</span>
                    <span class="home-product-item__origin-name">Việt Nam</span>
                </div>
                <div class = "home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${e.brand}</span>
                    <span class="home-product-item__sale-off-labble">${e.origin_name}</span>


                </div>
                <div style="margin: 0px 10px 5px 10px;">
                    <a href="#" class="home-product-item-button">
                        Chọn Mua
                    </a>
                </div>
            </a>                        
        </div>
        `
        
    });
}
renderUI(products ,'.home-product')
