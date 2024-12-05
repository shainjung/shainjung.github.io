let isBannerFixed = false;

window.addEventListener("scroll", function () {
    const banner = document.getElementById("banner");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 650 - 120 && !isBannerFixed) {
        // 當滾動超過切換位置且尚未固定時
        banner.classList.add("fixed");
        isBannerFixed = true;
    } else if (scrollPosition <= 650 - 120 && isBannerFixed) {
        // 當滾回頂部且已經固定時
        banner.classList.remove("fixed");
        isBannerFixed = false;
    }
});