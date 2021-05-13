let index = 1;
changeImege = function () {
    let imgs = ["anh/anhanh.jpg", "anh/anh3.jpg", "anh/anh2.jpg"]
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }
}
setInterval(changeImege, 5000);