var manufactureList = {
    "CÔNG TY CỔ PHẦN THỰC PHẨM VIỆT NAM": [
        "Thịt cá hải sản",
        "Rau, củ, trái cây",
        "Đồ uống các loại",
        "Sửa uống các loại",
        "Bánh kẹo các loại",
        "Mì, cháo, phở, bún",
        "Dầu ăn, gia vị",
        "Gạo, bột, đồ khô",
        "Chăm sóc cá nhân",
        "Chăm sóc thú cưng",
    ],
    "CÔNG TY CP THÀNH THÀNH CÔNG – BIÊN HÒA": [
        "Thịt cá hải sản",
        "Rau, củ, trái cây",
        "Đồ uống các loại",
        "Sửa uống các loại",
        "Bánh kẹo các loại",
        "Mì, cháo, phở, bún",
        "Dầu ăn, gia vị",
        "Gạo, bột, đồ khô",
        "Chăm sóc cá nhân",
        "Chăm sóc thú cưng",
    ],
    " CÔNG TY CỔ PHẦN ACECOOK VIỆT NAM": [
        "Thịt cá hải sản",
        "Rau, củ, trái cây",
        "Đồ uống các loại",
        "Sửa uống các loại",
        "Bánh kẹo các loại",
        "Mì, cháo, phở, bún",
        "Dầu ăn, gia vị",
        "Gạo, bột, đồ khô",
        "Chăm sóc cá nhân",
        "Chăm sóc thú cưng",
    ],
};

var productList = [];

var manuafaturerTag = document.getElementById("manuafaturer_name");
for (var key in manufactureList) {
    manuafaturerTag.innerHTML += `<option value='${key}'>${key}</option>`;
}

function changeManufaturer() {
    key = manuafaturerTag.value;
    categoryList = manufactureList[key];
    var categoruTag = document.getElementById("category_name");
    categoruTag.innerHTML = "";

    if (categoryList != null) {
        for (var i = 0; i < categoryList.length; i++) {
            categoruTag.innerHTML += `<option value='${categoryList[i]}'>${categoryList[i]}</option>`;
        }
    }
}

function updateTotalPrice() {
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;

    totalPrice = price * quantity;

    document.getElementById("total_price").value = totalPrice;
}

var count = 0;

function getFile(filePath) {
    return filePath.substr(filePath.lastIndexOf("\\") + 1);
}
function addProduct() {
    var index = document.getElementById("index").value;
    var productName = document.getElementById("product_name").value;
    var imageName = document.getElementById("image").value;
    imageName = getFile(imageName);
    var manufactureName = document.getElementById("manuafaturer_name").value;
    var categoryName = document.getElementById("category_name").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;
    var totalPrice = document.getElementById("total_price").value;

    var product = {
        productName: productName,
        imageName: imageName,
        manufactureName: manufactureName,
        categoryName: categoryName,
        price: price,
        quantity: quantity,
        totalPrice: totalPrice,
    };
    // Nếu như mà vị trí khác rỗng
    if (index != "") {
        // Gán giá trị mới
        productList[index] = product;
        showProduct();
        return;
    }

    productList.push(product);

    document.getElementById("result").innerHTML += 
	`<tr>
		<td>${++count}</td>
		<td>${productName}</td>
		<td>
			<img width="40px" src="../img/${imageName}"></img>
		</td>
		<td>${manufactureName}</td>
		<td>${categoryName}</td>
		<td>${price}</td>
		<td>${quantity}</td>
		<td>${totalPrice}</td>
		<td>
			<button class="btn btn-warning" onclick="editProduct(${count - 1})">
				<i class="fas fa-edit"></i> Chỉnh sửa
			</button>
			<button class="btn btn-danger" onclick="deleteProduct(${count - 1})">
				<i class="fas fa-trash"></i> Xóa
			</button>
		</td>
	</tr>`;
	var frm = document.forms['frm']
	frm.reset()
}

function deleteProduct(index) {
    // Xoa vi tri
    productList.splice(index, 1);
    showProduct();
}

function showProduct() {
    document.getElementById("result").innerHTML = "";

    for (var i = 0; i < productList.length; i++) {
        document.getElementById("result").innerHTML += 
		`<tr>
			<td>${i + 1}</td>
			<td>${productList[i].productName}</td>
			<td>
				<img width="40px" src="./img/${productList[i].imageName}"></img>
			</td>
			<td>${productList[i].manufactureName}</td>
			<td>${productList[i].categoryName}</td>
			<td>${productList[i].price}</td>
			<td>${productList[i].quantity}</td>
			<td>${productList[i].totalPrice}</td>
			<td>
				<button class="btn btn-warning" onclick="editProduct(${i})">
					<i class="fas fa-edit"></i> Chỉnh sửa
				</button>
				<button class="btn btn-danger" onclick="deleteProduct(${i})">
					<i class="fas fa-trash"></i> Xóa
				</button>
			</td>
		</tr>`;
    }
}

function editProduct(index) {
    var product = productList[index];
    // Xem sản phẩm là gì để xóa
    console.log(product);
    document.getElementById("index").value = index;
    document.getElementById("product_name").value = product.productName;
    document.getElementById("manuafaturer_name").value = product.manufactureName;
    changeManufaturer();
    document.getElementById("category_name").value = product.categoryName;
    document.getElementById("price").value = product.price;
    document.getElementById("quantity").value = product.quantity;
    document.getElementById("total_price").value = product.totalPrice;
	document.getElementById("image_name").value = product.imageName;
}

var btn_reset = document.getElementById('btn_reset')
btn_reset.addEventListener('click', () => {
	document.getElementById("index").value = ''
})