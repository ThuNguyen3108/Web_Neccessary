let products = [
    {
        code:'JKA',
        name: 'Khẩu trang Medical Mask',
        image: './img/khau-trang-y-te.jpg',
        price_old: '22.500đ',
        price_current: '18.500đ'
    },
    {
        code:'ESP',
        name: 'Khẩu trang TANAPHAR',
        image: './img/khautrang.jpg',
        price_old: '20.500đ',
        price_current: '18.500đ'
    },{
        code:'KAA',
        name: 'Nước sát khuẩn On1 hương anh đào',
        image: './img/nuoc-sat-khuan.jpg',
        price_old: '100.000đ',
        price_current: '90.000đ'
    },{
        code:'SPS',
        name: 'Nước rửa tay Kleen',
        image: './img/nuoc-sat-khuan3.jpg',
        price_old: '80.900đ',
        price_current: '75.000đ'
    },
];
let productsEle = document.getElementById('datarow')
console.log(productsEle)
function renderUI() {
    products.forEach((e, id) => {
        productsEle.innerHTML += `
        <tr class="row_product">
            <td>${id + 1}</td>
            <td>
                <div>
                    <img src="${e.image}" width="150px">
                </div>
            </td>
            <td>${e.name}</td>
            <td class="price" class="text-right">${e.price_current}</td>
            <td class="text-right">
                <p>10</p>
            </td>
            <td class="text-right">
                <p>Bật</p>
            </td>
            <td>
                <button class="btn btn-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                </button>
                <button class="btn btn-warning">
                   <i class="fas fa-edit"></i> Chỉnh Sử
                </button>
            </td>
        </tr>
        `
    });
}
renderUI()