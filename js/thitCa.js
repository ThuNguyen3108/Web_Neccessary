let products = [
    {
        name: 'Hộp 10 trứng gà tươi T.Food',
        image: 'https://cdn.tgdd.vn/Products/Images/8783/228775/bhx/hop-10-trung-ga-tuoi-tfood-202110022348286817_300x300.jpg',
        price_old: '32.000đ',
        price_current: '29.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thịt ba rọi heo (ba chỉ) G 300g',
        image: 'https://cdn.tgdd.vn/Products/Images/8781/241233/bhx/ba-roi-heo-g-khay-300g-202107241141409688_300x300.jpeg',
        price_old: '70.000đ',
        price_current: '64.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Bò Úc tươi cắt lát Pacow khay 250g',
        image: 'https://cdn.tgdd.vn/Products/Images/8139/239162/bhx/bo-uc-xao-khay-250g-202106220856383238_300x300.jpeg',
        price_old: '120.000đ',
        price_current: '99.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Ba khía muối Nhất Tâm hũ 400g',
        image: 'https://cdn.tgdd.vn/Products/Images/8782/249000/bhx/ca-saba-dong-lanh-tui-400g-202109281322138370_300x300.jpg',
        price_old: '120.000đ',
        price_current: '111.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Cá saba nguyên con đông lạnh 400g',
        image: 'https://cdn.tgdd.vn/Products/Images/8285/247201/bhx/ba-khia-muoi-nhat-tam-hu-400g-202108200944041706_300x300.jpeg',
        price_old: '32.000đ',
        price_current: '28.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Chả cá quết dạng viên Cầu Tre 500g',
        image: 'https://cdn.tgdd.vn/Products/Images/7170/228378/bhx/cha-ca-quet-dang-vien-cau-tre-goi-500g-202104270028283537_300x300.jpeg',
        price_old: '80.000đ',
        price_current: '75.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Hộp 30 trứng cút tươi sạch TFood',
        image: 'https://cdn.tgdd.vn/Products/Images/8783/219097/bhx/hop-30-trung-cut-tuoi-tfood-202104051424406499_300x300.jpg',
        price_old: '22.000đ',
        price_current: '21.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Lẩu mắm miền Tây Mama Food 500g',
        image: 'https://cdn.tgdd.vn/Products/Images/7259/236502/bhx/lau-mam-mien-tay-mama-food-500g-202104281301437897_300x300.jpeg',
        price_old: '79.000đ',
        price_current: '69.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Canh bí đỏ sơ chế sẵn khay 400g',
        image: 'https://cdn.tgdd.vn/Products/Images/8791/232887/bhx/canh-bi-do-khay-400g-202012251042244631_300x300.jpg',
        price_old: '9.000đ',
        price_current: '8.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
   
    {
        name: 'Mực ghim nhập khẩu đông lạnh túi 300g',
        image: 'https://cdn.tgdd.vn/Products/Images/8780/248984/bhx/muc-ghim-nhap-khau-dong-lanh-tui-300g-202109281339356499_300x300.jpg',
        price_old: '70.000đ',
        price_current: '60.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Tôm càng xanh nguyên con túi 500g ',
        image: 'https://cdn.tgdd.vn/Products/Images/8780/249433/bhx/tom-cang-tui-500g-202108252233021270_300x300.jpeg',
        price_old: '90.000đ',
        price_current: '80.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thịt gà kho sả ớt 3F khay 390g ',
        image: 'https://cdn.tgdd.vn/Products/Images/8791/238286/bhx/thit-ga-kho-sa-ot-khay-390g-202107011136589503_300x300.jpeg',
        price_old: '50.000đ',
        price_current: '42.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    
    
   
  
];
function renderUI(arr, str) {
    let productsEle = document.querySelector(str);
    productsEle.innerHTML = '';
    let flag = true
    arr.forEach(e => {
        productsEle.innerHTML += `
        <div class="col-c-3 col-3">
            <a class="home-product-item" href="${(flag) ? './chiTietSanPham.html' : '#'}">
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
        flag = false
    });
}
renderUI(products ,'.home-product')
