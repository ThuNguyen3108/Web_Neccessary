let products = [
    
   
    {
        name: 'Khẩu trang 3 lớp Ecom MED 50 cái',
        image: 'https://cdn.tgdd.vn/Products/Images/5872/233106/bhx/khau-trang-ecom-med-safe-mask-3-lop-hop-50-cai-202104220858314246_300x300.jpg',
        price_old: '26.000đ',
        price_current: '24.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Gel diệt khuẩn tay On1 chai 60ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2486/248195/bhx/gel-diet-khuan-tay-on1-huong-bamboo-charcoal-chai-60ml-202108031400215035_300x300.jpg',
        price_old: '55.000đ',
        price_current: '45.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Dung dịch rửa tay Hapicare 500ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2486/219222/bhx/dung-dich-rua-tay-khang-khuan-hapicare-tra-xanh-500ml-202109101455356635_300x300.jpg',
        price_old: '16.000đ',
        price_current: '15.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước muối Klearin Nacl 0.9% 550ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2490/243767/bhx/nuoc-muoi-suc-mieng-klearin-nacl-09-bac-ha-550ml-202107060853022556_300x300.jpg',
        price_old: '21.000đ',
        price_current: '19.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Mặt nạ tóc cao cấp Tsubaki 180g',
        image: 'https://cdn.tgdd.vn/Products/Images/3740/239340/bhx/mat-na-toc-cao-cap-tsubaki-phuc-hoi-hu-ton-150g-202105241545220475_300x300.jpg',
        price_old: '11.000đ',
        price_current: '8.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Sữa tắm Double Rich Secret 200g',
        image: 'https://cdn.tgdd.vn/Products/Images/2444/76794/bhx/sua-tam-hoa-hong-double-rich-evas-secret-200g-202103011138137617_300x300.jpg',
        price_old: '38.300đ',
        price_current: '23.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Sữa tắm trắng sáng Antabax 250ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2444/232951/bhx/sua-tam-antabax-trang-sang-uv-moisture-250ml-202103011114197100_300x300.jpg',
        price_old: '32.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Băng vệ sinh Uucare YoungGirl 36cm',
        image: 'https://cdn.tgdd.vn/Products/Images/2516/245521/bhx/bang-ve-sinh-ban-dem-uucare-young-girl-khang-khuan-3-mieng-36cm-202109211034205979_300x300.jpg',
        price_old: '32.000đ',
        price_current: '29.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Băng vệ sinh Uucare YoungGirl 24cm',
        image: 'https://cdn.tgdd.vn/Products/Images/2516/245526/bhx/bang-ve-sinh-hang-ngay-uucare-young-girl-khang-khuan-sieu-tham-8-mieng-24cm-202109211026555786_300x300.jpg',
        price_old: '23.000đ',
        price_current: '16.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Khử mùi AXE Gold Temptation 150ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2507/82324/bhx/xit-khu-mui-axe-gold-temptation-150ml-202103020045454812_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Chống nắng Sunplay dưỡng da 30g',
        image: 'https://cdn.tgdd.vn/Products/Images/6658/207460/bhx/gel-chong-nang-sunplay-skin-aqua-duong-da-trang-min-spf-50-pa-30g-202103032147458012_300x300.jpg',
        price_old: '14.000đ',
        price_current: '13.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Sữa rửa mặt trắng da Senka 120g',
        image: 'https://cdn.tgdd.vn/Products/Images/2504/194624/bhx/-202108211341461475.jpg',
        price_old: '288.000đ',
        price_current: '270.000đ',
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
                <div>
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
