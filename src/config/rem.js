(function(doc, win) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            // 获取屏幕的可视区域的宽
            var clientWidth = doc.documentElement.clientWidth
            // 我们的页面是以375宽为标准写的 计算改变后的字体大小
            doc.documentElement.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)