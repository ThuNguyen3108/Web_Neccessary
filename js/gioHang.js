let sum = 0
let products
function renderUI() {
    if(typeof(Storage) != undefined){
        products = window.localStorage.getItem('products')
        products = JSON.parse(products)
        var product_count = document.getElementById('product-count')
        product_count.innerText = products.length
    }else{
        alert("Trình duyệt không hỗ trợ")
        return false
    }
    let productsEle = document.getElementById('datarow')
    products.forEach((e, id) => {
        let price_current = e.price_current.slice(0, e.price_current.length - 1)
        price_current = price_current.toString().replace('.','')
        sum += Number(price_current) * e.count
        productsEle.innerHTML += `
        <tr data="${e.code}" class="row_product">
            <td>${id + 1}</td>
            <td>
                <div>
                    <img src="${e.image}" width="150px">
                </div>
            </td>
            <td>${e.name}</td>
            <td class="text-right">
                <div class="form-group">
				    <input type="number" class="quantity" class="form-control" value="${e.count}"">
                </div>
            </td>
            <td class="price" class="text-right">${price_current}đ</td>
            <td class="text-right">
                <div class="form-group">
					<input class="total_price" class="form-control" value="${price_current * e.count}đ" type="text" disabled="true">
				</div>
            </td>
            <td>
                <button class="btn btn-danger" onclick = "deleteProduct(this.dataset.code)" data-code='${e.code}'>
                    <i class="fa fa-trash" ></i>   Xóa
                </button>
            </td>
        </tr>
        `
    });
    document.getElementById('total_payment').innerHTML = `Tổng Thành tiền: ${sum}đ`
}
renderUI()

function changeTotalPayment(){
    let sum = 0
    let total_price_Element = document.getElementsByClassName('total_price')
    for(let j = 0; j < total_price_Element.length; j++){
        let str_price = total_price_Element[j].value
        sum += Number(str_price.slice(0, str_price.length - 1))
    }
    document.getElementById('total_payment').innerHTML = `Tổng Thành tiền: ${sum}đ`
}

function deleteProduct(code){
    var tr = document.querySelector(`tr[data="${code}"]`)
    var index = 0;
    for(i = 0 ;i < products.length; i++){
        if(products[i].code == code){
            index = i
            break;
        }
    }
    // Thay doi trong localStorage
    products.splice(index, 1)
    window.localStorage.removeItem('products');
    window.localStorage.setItem("products", JSON.stringify(products));

    // Xoa UI
    tr.remove()

    // Thay doi total_payment
    changeTotalPayment()
}

// Tang so luong san pham trong gio hang va cap nhan tong thanh tien
let quantity = document.getElementsByClassName('quantity')
for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('change', (e) => {

        let total_price_Element = document.getElementsByClassName('total_price')
        let price_Element = document.getElementsByClassName('price')[i].textContent

        let total = e.target.value * Number(price_Element.slice(0, price_Element.length - 1))
        total_price_Element[i].value = total + 'đ'

        // Thay doi tong thanh tien
        changeTotalPayment()
    })
}
