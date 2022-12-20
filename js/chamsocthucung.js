let products = [
    
   
    {
        name: 'Thức ăn chó Pedigree vị gà 130g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238342/bhx/thuc-an-cho-cho-con-pedigree-vi-ga-nau-sot-tui-130g-202105100116215813_300x300.jpg',
        price_old: '16.000đ',
        price_current: '9.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Sốt cho mèo con Whiscat cá ngừ 85g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238773/bhx/sot-cho-meo-con-pedigree-vi-ca-ngu-tui-85g-202105100113313252_300x300.jpg',
        price_old: '10.000đ',
        price_current: '8.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Ăn vặt cho chó Pedigree vị gan 80g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238716/bhx/thuc-an-vat-cho-cho-pedigree-vi-gan-nuong-tui-80g-202105111908551113_300x300.jpg',
        price_old: '36.000đ',
        price_current: '27.600đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Ăn vặt cho chó Pedigree vị heo 60g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238763/bhx/thuc-an-vat-cho-cho-pedigree-vi-thit-heo-muoi-tui-60g-202105111904549111_300x300.jpg',
        price_old: '33.000đ',
        price_current: '30.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Đồ ăn chó lớn Pedigree vị gà 130g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238343/bhx/thuc-an-cho-cho-lon-pedigree-vi-ga-nau-sot-tui-130g-202105100117049079_300x300.jpg',
        price_old: '11.000đ',
        price_current: '8.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Ăn vặt cho chó Pedigree vị bò 60g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238717/bhx/thuc-an-vat-cho-cho-pedigree-vi-thit-bo-xong-khoi-tui-60g-202105111907235140_300x300.jpg',
        price_old: '19.300đ',
        price_current: '11.000đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Thức ăn chó Pedigree vị bò 130g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238344/bhx/thuc-an-cho-cho-lon-pedigree-vi-bo-kho-va-rau-cu-tui-130g-202105100117489831_300x300.jpg',
        price_old: '20.000đ',
        price_current: '15.500đ',
        sold: '88 đã bán',
        brand:'10%',
        origin_name: 'GIẢM'
    },
    {
        name: 'Sốt cho chó Pedigree vị gan 130g',
        image: 'https://cdn.tgdd.vn/Products/Images/9818/238345/bhx/sot-cho-cho-lon-pedigree-vi-gan-nuong-va-rau-tui-130g-202105111922597880_300x300.jpg',
        price_old: '13.000đ',
        price_current: '12.000đ',
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
