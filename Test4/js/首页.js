// 点击头像显示/隐藏菜单
function toggleMenu() {
    var menu = document.getElementById('menuForm');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// 点击页面其他地方隐藏菜单
window.onclick = function (event) {
    if (!event.target.matches('#avatar') && !event.target.closest('.form-popup')) {
        var menu = document.getElementById('menuForm');
        if (menu.style.display !== 'none') {
            menu.style.display = 'none';
        }
    }
}

// 多级表单的内容切换
function toggleContent(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
