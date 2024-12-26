// 根據星期和時間來決定顯示的文字
function updateText() {
    
    const now = new Date();
    const gmtOffset = now.getTimezoneOffset();
    const day = now.getDay(); // 取得星期（0-6，0 是星期天）
    const hour = now.getHours(); // 取得小時（0-23）
    const min = now.getMinutes();
    let index;

    if (min > 30){
        index=2*(hour+0.5);
    } else{
        index=2*hour;
    }
    Refresh(day,index);
}

// 每分鐘更新一次顯示文字
setInterval(updateText, 60000);

// 頁面載入時立即更新文字
updateText();

function Refresh(day,index){
    const shows=[sun,mon,tue,wen,thu,fri,sat];

    
    const show = shows[day][index];
    
    document.getElementById("display-show").innerText = '《'+ show + '》';



}

// const container1 = document.getElementById('display-show');
// const container2 = document.getElementById('display-host');
// const container3 = document.getElementById('display-text');
// const maxHeight1 = container1.offsetHeight;
// const maxHeight2 = container2.offsetHeight;
// const maxHeight3 = container3.offsetHeight;


// function adjustFontSize() {
//     let fontSize1 = 26; // 初始字體大小 (px)
//     let fontSize2 = 17; // 初始字體大小 (px)
//     let fontSize3 = 12; // 初始字體大小 (px)
//     container1.style.fontSize = fontSize1 + 'px';
//     container2.style.fontSize = fontSize2 + 'px';
//     container3.style.fontSize = fontSize3 + 'px';

//     while (container1.scrollHeight > maxHeight1) {
//         fontSize1--; // 遞減字體大小
//         container1.style.fontSize = fontSize1 + 'px';
//     }
//     while (container2.scrollHeight > maxHeight2) {
//         fontSize2--; // 遞減字體大小
//         container2.style.fontSize = fontSize2 + 'px';
//     }
//     while (container3.scrollHeight > maxHeight3) {
//         fontSize3--; // 遞減字體大小
//         container3.style.fontSize = fontSize3 + 'px';
//     }
// }

// adjustFontSize(); // 初始調整
// window.addEventListener('resize', adjustFontSize);