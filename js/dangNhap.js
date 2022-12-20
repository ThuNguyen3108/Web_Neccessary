var account =
    '{"account":[{"HoTen":"Admin","username":"admin", "password":"admin"}]}';
obj = JSON.parse(account);

function validition() {
    var frm = document.forms["frm"];
    var user = frm.user.value;
    var pwd = frm.pwd.value;
    if (user == obj.account[0].username && pwd == obj.account[0].password) {
       window.localStorage.setItem("HoTen", obj.account[0].HoTen);
        alert("Đăng nhập thành công!");
    } else{
        alert("Tên đăng nhập hoặc mật khẩu sai!")
        return false
    };
}
