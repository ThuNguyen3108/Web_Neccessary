let products = [
    
   
    {
        name: '48 bịch sữa tươi Dutch Lady 220ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/86172/bhx/thung-48-bich-sua-tiet-trung-co-duong-dutch-lady-canxi-protein-220ml-202105151156095786_300x300.jpg',
        price_old: '340.000đ',
        price_current: '300.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thùng 48 bịch sữa ít đường 220ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/162411/bhx/thung-48-bich-sua-dinh-duong-it-duong-vinamilk-220ml-202105170848106031_300x300.jpg',
        price_old: '320.000đ',
        price_current: '310.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '48 bịch sữa TH True Milk 220ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/86199/bhx/thung-48-bich-sua-tuoi-tiet-trung-it-duong-th-true-milk-220ml-202105151158179435_300x300.jpg',
        price_old: '400.000đ',
        price_current: '373.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '48 hộp sữa Nuvita có đường 180ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/85570/bhx/thung-48-hop-sua-tiet-trung-co-duong-nuvita-180ml-202105151151028714_300x300.jpg',
        price_old: '300.000đ',
        price_current: '295.000đ',
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
        name: 'Sữa nguyên kem Oldenburger 1 lít',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/241404/bhx/sua-tuoi-tiet-trung-nguyen-kem-oldenburger-35-beo-1-lit-202106041648058728_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '48 hộp sữa dâu Dutch Lady 170ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/178942/bhx/thung-48-hop-sua-tiet-trung-huong-dau-dutch-lady-cao-khoe-170ml-202104081610541668_300x300.jpg',
        price_old: '300.000đ',
        price_current: '266.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '48 hộp sữa tươi TH true Milk 180ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2386/85859/bhx/thung-48-hop-sua-tuoi-tiet-trung-co-duong-th-true-milk-180ml-202105151155053697_300x300.jpg',
        price_old: '323.000đ',
        price_current: '161.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thùng 40 chai sữa nho Calpis 80ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2944/221322/bhx/thung-40-chai-thuc-uong-tu-sua-len-men-vi-nho-calpis-mini-80ml-202105071044315018_300x300.jpg',
        price_old: '200.000đ',
        price_current: '154.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '30gói sữa chua tổ yến Nestlé 85ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2944/227398/bhx/thung-30-goi-sua-chua-uong-to-yen-nestle-yogu-85ml-202104120317447077_300x300.jpg',
        price_old: '40.000đ',
        price_current: '30.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '48 hộp sữa việt quất bạc hà 180ml',
        image: 'https://cdn.tgdd.vn/Products/Images/2944/232908/bhx/thung-48-hop-sua-chua-len-men-vi-viet-quat-bac-ha-dutch-lady-180ml-202104120318219633_300x300.jpg',
        price_old: '280.000đ',
        price_current: '275.000đ',
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
