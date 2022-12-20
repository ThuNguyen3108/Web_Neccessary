var icon_dn = document.getElementById('icon_dn')
var name_dn = document.getElementById('name_dn')
var text_dn = document.getElementById('text_dn')
var dk = document.getElementById('dk')
var dn = document.getElementById('dn')
var exit = document.getElementById('exit')


function change() {
    if (typeof localStorage['HoTen'] !== "undefined") {
        icon_dn.style.display = 'block'
        text_dn.innerText = localStorage.getItem('HoTen')
        name_dn.style.display = 'block'
        exit.style.display = 'block'
        dk.style.display = 'none'
        dn.style.display = 'none'
        name_dn.classList.add('header_navbar-list-item--sepa')
    }
    else{
        icon_dn.style.display = 'none'
        name_dn.style.display = 'none'
        exit.style.display = 'none'
        dk.style.display = 'block'
        dn.style.display = 'block'
    }
}
change()

exit.addEventListener('click', (e) => {
    localStorage.removeItem('HoTen')
    change()
})