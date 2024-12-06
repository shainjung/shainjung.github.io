let isBannerFixed = false;

window.addEventListener("scroll", function () {
    const banner = document.getElementById("banner");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 700 - 90 && !isBannerFixed) {
        // 當滾動超過切換位置且尚未固定時
        banner.classList.add("fixed");
        isBannerFixed = true;
    } else if (scrollPosition <= 700 - 90 && isBannerFixed) {
        // 當滾回頂部且已經固定時
        banner.classList.remove("fixed");
        isBannerFixed = false;
    }
});

// 取得來源與目標元素
const s1 = document.getElementById("s1");//sourceDiv
const t1 = document.getElementById("t1");//targetDiv
const s2 = document.getElementById("s2");//sourceDiv
const t2 = document.getElementById("t2");//targetDiv
const s3 = document.getElementById("s3");//sourceDiv
const t3 = document.getElementById("t3");//targetDiv

// 監聽 window 的滾動事件
window.addEventListener("scroll", () => {
    // 取得來源 <div> 的 top 值 (相對於視窗)
    const sourceTop1 = s1.getBoundingClientRect().top;
    const sourceTop2 = s2.getBoundingClientRect().top;
    const sourceTop3 = s3.getBoundingClientRect().top;

    // 將來源 <div> 的 top 值設定到目標 <div>
    t1.style.top = `${window.scrollY + sourceTop1}px`;
    t2.style.top = `${window.scrollY + sourceTop2}px`;
    t3.style.top = `${window.scrollY + sourceTop3}px`;
});