let products = [
    
   
    {
        name: 'Mì chay nấm đông cô Unif gói 80g',
        image: 'https://cdn.tgdd.vn/Products/Images/8638/101046/bhx/mi-chay-nam-dong-co-unif-goi-80g-202103071707001872_300x300.jpg',
        price_old: '6.000đ',
        price_current: '5.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Mì chay Vifon vị lẩu thái gói 65g',
        image: 'https://cdn.tgdd.vn/Products/Images/8638/175986/bhx/mi-chay-vifon-lau-thai-goi-65g-202102282227206950_300x300.jpg',
        price_old: '10.000đ',
        price_current: '8.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Mì chay Nongshim Soon gói 112g',
        image: 'https://cdn.tgdd.vn/Products/Images/8638/87667/bhx/mi-chay-nongshim-soon-veggie-ramyun-goi-112g-202102282235081075_300x300.jpg',
        price_old: '7.000đ',
        price_current: '5.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: '30 gói mì chay Vifon lẩu thái 65g',
        image: 'https://cdn.tgdd.vn/Products/Images/8638/194027/bhx/thung-30-goi-mi-chay-vifon-lau-thai-65g-202103010902083459_300x300.jpg',
        price_old: '210.000đ',
        price_current: '192.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Gạo trắng nở xốp Bách hoá XANH 5kg',
        image: 'https://cdn.tgdd.vn/Products/Images/2513/210380/bhx/gao-trang-bach-hoa-xanh-tui-5kg-202103040802266309_300x300.jpg',
        price_old: '111.000đ',
        price_current: '88.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Gạo thơm Vua Gạo ST25 túi 5kg',
        image: 'https://cdn.tgdd.vn/Products/Images/2513/236014/bhx/gao-thom-vua-gao-st25-tui-5kg-202103131622234311_300x300.jpg',
        price_old: '119.300đ',
        price_current: '110.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Gạo trắng Vinh Hiển Đỗ Quyên 5kg',
        image: 'https://cdn.tgdd.vn/Products/Images/2513/193609/bhx/gao-vinh-hien-do-quyen-tui-5kg-202103040836579371_300x300.jpg',
        price_old: '200.000đ',
        price_current: '175.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Gạo tấm thơm nhuyễn Home Rice 2kg',
        image: 'https://cdn.tgdd.vn/Products/Images/2513/232804/bhx/gao-tam-thom-home-rice-tui-2kg-202103040827211549_300x300.jpg',
        price_old: '33.000đ',
        price_current: '29.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thịt ham nấu chín Bristol 454g',
        image: 'https://cdn.tgdd.vn/Products/Images/3238/252593/bhx/thit-ham-nau-chin-usa-bristol-hop-454g-202110151941230869_300x300.jpg',
        price_old: '23.000đ',
        price_current: '16.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thịt bò hầm gia vị Vissan hộp 397g',
        image: 'https://cdn.tgdd.vn/Products/Images/3239/83318/bhx/bo-ham-vissan-hop-397g-202104261007310345_300x300.jpeg',
        price_old: '20.000đ',
        price_current: '15.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Pate gan heo Hạ Long ngon hộp 90g',
        image: 'https://cdn.tgdd.vn/Products/Images/3240/83338/bhx/pate-gan-ha-long-hop-90g-202104230949437395_300x300.jpg',
        price_old: '14.000đ',
        price_current: '13.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Cà chua lột vỏ Divella hộp 2.5kg',
        image: 'https://cdn.tgdd.vn/Products/Images/7220/244305/bhx/ca-chua-lot-vo-divella-hop-25kg-202107100817215841_300x300.jpg',
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
