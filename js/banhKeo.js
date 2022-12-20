let products = [
    
   
    {
        name: 'Snack khoai tảo biển Lay',
        image: 'https://cdn.tgdd.vn/Products/Images/3364/193602/bhx/snack-khoai-tay-vi-tao-bien-nori-lays-goi-52g-202104291354089596_300x300.jpg',
        price_old: '10.000đ',
        price_current: '7.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
        
        
    },
    {
        name: 'Snack rong biển Tao Kae Noi 21.6g',
        image: 'https://cdn.tgdd.vn/Products/Images/3364/169065/bhx/snack-rong-bien-nuong-vi-truyen-thong-tao-kae-noi-big-roll-hop-216g-202109041138045027_300x300.jpg',
        price_old: '32.000đ',
        price_current: '31.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Snack mì hương gà Enaak gói 30g',
        image: 'https://cdn.tgdd.vn/Products/Images/3364/193772/bhx/snack-mi-huong-ga-enaak-goi-30g-202104291439306155_300x300.jpg',
        price_old: '24.000đ',
        price_current: '23.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Kẹo the chanh muối Play More 12g',
        image: 'https://cdn.tgdd.vn/Products/Images/2687/240520/bhx/keo-the-vi-chanh-muoi-play-more-goi-12g-202106031504551635_300x300.jpg',
        price_old: '3.000đ',
        price_current: '2.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Kẹo dẻo Haribo Happy Cola gói 30g',
        image: 'https://cdn.tgdd.vn/Products/Images/7199/160991/bhx/keo-deo-haribo-happy-cola-goi-30g-202104280915172737_300x300.jpg',
        price_old: '11.000đ',
        price_current: '8.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Đậu phộng sả ớt Tài Tài gói 55g',
        image: 'https://cdn.tgdd.vn/Products/Images/3487/231502/bhx/dau-phong-sa-ot-tai-tai-goi-55g-202104271349170901_300x300.jpg',
        price_old: '29.300đ',
        price_current: '20.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Hạt hỗn hợp - kỷ tử Nutty 220g',
        image: 'https://cdn.tgdd.vn/Products/Images/3487/231586/bhx/hat-hon-hop-ky-tu-va-sachi-trailmix-nutty-hu-220g-202104271352097101_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Hạnh nhân sữa chua Nutty hũ 220g',
        image: 'https://cdn.tgdd.vn/Products/Images/3487/231640/bhx/hanh-nhan-vi-sua-chua-dau-nutty-hu-220g-202104271353484896_300x300.jpg',
        price_old: '3.000đ',
        price_current: '2.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bánh que Glico phủ kem dâu 38g',
        image: 'https://cdn.tgdd.vn/Products/Images/3362/222134/bhx/banh-que-glico-pocky-phu-kem-huong-dau-hop-38g-202104241645314843_300x300.jpg',
        price_old: '23.000đ',
        price_current: '16.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bánh que Glico phủ kem socola 40g',
        image: 'https://cdn.tgdd.vn/Products/Images/3362/222133/bhx/banh-que-glico-pocky-phu-kem-huong-socola-hop-40g-202104241645063588_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Mít sấy tươi ngon Vinamit túi 100g',
        image: 'https://cdn.tgdd.vn/Products/Images/3365/77802/bhx/mit-say-vinamit-tui-100g-202104261120185662_300x300.jpg',
        price_old: '14.000đ',
        price_current: '13.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Đu đủ tươi sấy dẻo Frusa gói 35g',
        image: 'https://cdn.tgdd.vn/Products/Images/3365/231538/bhx/du-du-say-deo-frusa-goi-35g-202104261008510557_300x300.jpg',
        price_old: '28.000đ',
        price_current: '27.000đ',
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
