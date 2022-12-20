let products = [
    
   
    {
        name: '30 gói Hảo Hảo tôm chua cay 75g',
        image: 'https://cdn.tgdd.vn/Products/Images/2565/85959/bhx/thung-30-goi-mi-hao-hao-tom-chua-cay-75g-202110111028170289_300x300.jpg',
        price_old: '106.000đ',
        price_current: '99.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '30 gói mì 3 Miền tôm chua cay 65g',
        image: 'https://cdn.tgdd.vn/Products/Images/2565/80211/bhx/thung-30-goi-mi-3-mien-tom-chua-cay-65g-202103032346251771_300x300.jpg',
        price_old: '100.000đ',
        price_current: '85.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '30 gói mì Kokomi tôm chua cay 65g',
        image: 'https://cdn.tgdd.vn/Products/Images/2565/86004/bhx/thung-30-goi-mi-kokomi-tom-chua-cay-65g-202103032347325830_300x300.jpg',
        price_old: '76.000đ',
        price_current: '70.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thùng 30 gói mì Omachi bò hầm 80g',
        image: 'https://cdn.tgdd.vn/Products/Images/2565/175895/bhx/thung-30-goi-mi-khoai-tay-omachi-xot-bo-ham-80g-202103031744325289_300x300.jpg',
        price_old: '210.000đ',
        price_current: '192.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Phở bò Cung Đình Hà Nội tô 80g',
        image: 'https://cdn.tgdd.vn/Products/Images/2566/206210/bhx/pho-bo-cung-dinh-ha-noi-to-80g-co-goi-nuoc-cot-xuong-ham-202102281003510916_300x300.jpg',
        price_old: '11.000đ',
        price_current: '8.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thùng 30 gói hủ tiếu Cung Đình 78',
        image: 'https://cdn.tgdd.vn/Products/Images/2965/227285/bhx/thung-30-goi-hu-tieu-nam-vang-cung-dinh-78g-202102281038499753_300x300.jpg',
        price_old: '119.300đ',
        price_current: '110.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Miến thịt bằm Khang Phúc ly 50g',
        image: 'https://cdn.tgdd.vn/Products/Images/2964/200235/bhx/mien-thit-bam-khang-phuc-ly-50g-202102281024590985_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Miến Phú Hương sườn heo gói 55g',
        image: 'https://cdn.tgdd.vn/Products/Images/2964/77633/bhx/mien-phu-huong-suon-heo-goi-55g-202105281410410875.jpg',
        price_old: '3.000đ',
        price_current: '2.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Miến Phú Hương lẩu Thái tôm 63g',
        image: 'https://cdn.tgdd.vn/Products/Images/2964/77632/bhx/mien-phu-huong-lau-thai-tom-goi-63g-202102281021341296_300x300.jpg',
        price_old: '23.000đ',
        price_current: '16.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bánh gạo Pink Rocket Original 120g',
        image: 'https://cdn.tgdd.vn/Products/Images/7162/220549/bhx/banh-gao-pink-rocket-topokki-vi-truyen-thong-ly-120g-202104262334145817_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Tokpokki tròn phô mai O',
        image: 'https://cdn.tgdd.vn/Products/Images/7162/237950/bhx/banh-gao-tokpokki-ofood-tron-vi-pho-mai-goi-140g-202105220903317377_300x300.jpg',
        price_old: '14.000đ',
        price_current: '13.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thùng 30 gói bún giò Hằng Nga 75g',
        image: 'https://cdn.tgdd.vn/Products/Images/2963/174710/bhx/thung-30-goi-bun-gio-heo-hang-nga-75g-202102281014124836_300x300.jpg',
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
