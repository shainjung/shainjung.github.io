// 根據星期和時間來決定顯示的文字
function updateText() {
    
    const now = new Date();
    const gmtOffset = now.getTimezoneOffset();
    const day = now.getDay(); // 取得星期（0-6，0 是星期天）
    const hour = now.getHours(); // 取得小時（0-23）
    const min = now.getMinutes();
    let index;
    Refresh(day,hour);
}

// 每分鐘更新一次顯示文字
setInterval(updateText, 60000);

// 頁面載入時立即更新文字
updateText();

function Refresh(day,hour){
    const shows=[sun,mon,tue,wen,thu,fri,sat];
    const Infos=[k_sun,k_mon,k_tue,k_wen,k_thu,k_fri,k_sat];
    
    const show = shows[day][hour];
    const Info = Infos[day][hour];

    var info_src='../needsTV/TVIntroduction/'+Info;
    
    document.getElementById("display-show").innerText = '《'+ show + '》';



    console.log(info_src);
     /*console.log(host)
    console.log(keycard)*/
    fetch(info_src)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // 將內容解析為文字
    })
    .then(data => {
        const textContent = data; // 將內容存入變數
        console.log(textContent); // 檢視讀取的文字內容
    })
    .catch(error => {
        console.error('Error fetching the file:', error);
    });
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