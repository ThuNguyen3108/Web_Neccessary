let products = [
    
   
    {
        name: 'Nước Aquarius Zero chai 390ml',
        image: 'https://cdn.tgdd.vn/Products/Images/8965/211679/bhx/nuoc-uong-van-dong-aquarius-zero-390ml-202103290118071797_300x300.jpg',
        price_old: '10.000đ',
        price_current: '8.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '24 chai nước uống Aquarius 390ml',
        image: 'https://cdn.tgdd.vn/Products/Images/8965/201287/bhx/24-chai-nuoc-uong-van-dong-aquarius-390ml-202103272239544716_300x300.jpg',
        price_old: '200.000đ',
        price_current: '186.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước uống bù khoáng Revive 500ml',
        image: 'https://cdn.tgdd.vn/Products/Images/8965/83581/bhx/nuoc-bu-khoang-revive-muoi-khoang-500ml-202103290114572956_300x300.jpg',
        price_old: '11.000đ',
        price_current: '10.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước tăng lực Lipovitan lon 245ml',
        image: 'https://cdn.tgdd.vn/Products/Images/3226/83720/bhx/-202105281134052955.jpg',
        price_old: '17.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước trái vải Cap panda 310ml',
        image: 'https://cdn.tgdd.vn/Products/Images/3265/239489/bhx/nuoc-trai-vai-cap-panda-lychee-310ml-202105311208509920_300x300.jpg',
        price_old: '11.000đ',
        price_current: '8.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Sữa trái cây Nutriboost cam 1 lít',
        image: 'https://cdn.tgdd.vn/Products/Images/2947/79217/bhx/sua-trai-cay-nutriboost-huong-cam-1-lit-202103290233027049_300x300.jpg',
        price_old: '29.300đ',
        price_current: '20.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Cà phê sữa MacCoffee Café Mê 204g',
        image: 'https://cdn.tgdd.vn/Products/Images/2524/210175/bhx/ca-phe-sua-nong-maccoffee-cafe-me-204g-202101301448056966_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Trà túi lọc Atisô Lama 25 túi x 2g',
        image: 'https://cdn.tgdd.vn/Products/Images/2385/230385/bhx/tra-atiso-lama-hop-50g-202104212144270460_300x300.jpg',
        price_old: '30.000đ',
        price_current: '26.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Hộp 6 hũ tổ yến Win',
        image: 'https://cdn.tgdd.vn/Products/Images/4585/232247/bhx/hop-6-hu-to-yen-chung-san-duong-phen-winsnest-420ml-202104241540055868_300x300.jpg',
        price_old: '323.000đ',
        price_current: '161.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước yến ngân nhĩ Vinatur 240ml',
        image: 'https://cdn.tgdd.vn/Products/Images/4585/209426/bhx/nuoc-yen-ngan-nhi-vinatur-vi-gung-240ml-202104241526064388_300x300.jpg',
        price_old: '12.000đ',
        price_current: '10.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '4 hộp nước trà sữa đào Cozy 225ml',
        image: 'https://cdn.tgdd.vn/Products/Images/8963/221883/bhx/4-hop-tra-sua-dao-cozy-225ml-202103272309271850_300x300.jpg',
        price_old: '40.000đ',
        price_current: '30.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thùng 24 chai trà sữa C 2 280ml',
        image: 'https://cdn.tgdd.vn/Products/Images/8963/214374/bhx/thung-24-chai-tra-sua-dai-loan-c2-280ml-202103290313550646_300x300.jpg',
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
