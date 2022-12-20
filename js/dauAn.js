let products = [
    
   
    {
        name: 'Muối sả ớt Tinh Nguyên hũ 90g',
        image: 'https://cdn.tgdd.vn/Products/Images/2803/174526/bhx/muoi-sa-tinh-nguyen-hu-90g-202104200953313820_300x300.jpg',
        price_old: '10.000đ',
        price_current: '9.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Muối sạch Visaco 777 gói 700g',
        image: 'https://cdn.tgdd.vn/Products/Images/2803/77343/bhx/muoi-sach-visaco-777-goi-700g-202104200951004369_300x300.jpg',
        price_old: '10.000đ',
        price_current: '8.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước đường nâu Beksul chai 750ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2804/206635/bhx/nuoc-duong-nau-beksul-chai-750ml-202104200917440982_300x300.jpg',
        price_old: '6.000đ',
        price_current: '5.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Tiêu chín Phú Quốc Vipep hũ 250g',
        image: 'https://cdn.tgdd.vn/Products/Images/2809/219620/bhx/tieu-chin-phu-quoc-vipep-hu-250g-202104141353141293_300x300.jpg',
        price_old: '21.000đ',
        price_current: '19.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Hạt nêm tôm thịt Chinsu gói 800g',
        image: 'https://cdn.tgdd.vn/Products/Images/2806/198862/bhx/hat-nem-ngot-tom-thom-thit-chinsu-goi-800g-202104201431075299_300x300.jpg',
        price_old: '43.000đ',
        price_current: '42.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bột ngọt hạt lớn Vedan Yess 350g',
        image: 'https://cdn.tgdd.vn/Products/Images/2805/244772/bhx/bot-ngot-hat-lon-vedan-yess-goi-350g-202107161138521227_300x300.jpg',
        price_old: '24.300đ',
        price_current: '20.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bột canh nấm hương Cholimex 180g',
        image: 'https://cdn.tgdd.vn/Products/Images/2808/158014/bhx/bot-canh-nam-huong-cholimex-goi-180g-202104200834589632_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bột canh chuẩn Cholimex 180g',
        image: 'https://cdn.tgdd.vn/Products/Images/2808/82237/bhx/bot-canh-cholimex-goi-180g-202104200834232335_300x300.jpg',
        price_old: '13.000đ',
        price_current: '10.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước chấm Nam Ngư Đệ Nhị 900ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2289/76428/bhx/nuoc-cham-nam-ngu-de-nhi-chai-900ml-202104191514474885_300x300.jpg',
        price_old: '23.000đ',
        price_current: '16.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước mắm cá cơm Hạnh Phúc 500ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2289/79049/bhx/nuoc-mam-ca-com-hanh-phuc-60-do-dam-chai-500ml-202104191510491245_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Nước mắm cá cơm Hưng Thịnh 900ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2289/109638/bhx/nuoc-mam-ca-com-loai-bien-hung-thinh-chai-900ml-202104191452483459_300x300.jpg',
        price_old: '14.000đ',
        price_current: '13.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Tương ớt 5 vị cay đậm Knorr 220g',
        image: 'https://cdn.tgdd.vn/Products/Images/2567/229139/bhx/tuong-ot-tron-5-vi-cay-dam-knorr-chai-220g-202104201447124141_300x300.jpg',
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
