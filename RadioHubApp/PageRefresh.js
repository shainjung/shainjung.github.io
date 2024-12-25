// 根據星期和時間來決定顯示的文字
function updateText() {
    
    const now = new Date();
    const gmtOffset = now.getTimezoneOffset();
    const day = now.getDay(); // 取得星期（0-6，0 是星期天）
    const hour = now.getHours(); // 取得小時（0-23）
    const min = now.getMinutes();
    var page=document.title.charAt(0).toLowerCase();
    let index;

    if (min > 30){
        index=2*(hour+0.5);
    } else{
        index=2*hour;
    }
    Refresh(day,index,page);
    /*
    if (day === 0) { // 星期日
        document.getElementById("display-show").innerText = '《'+ sun[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_sun[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_sun[index];
    } else if (day === 1) { 
        document.getElementById("display-show").innerText = '《'+ mon[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_mon[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_mon[index];
    } else if (day === 2) { 
        document.getElementById("display-show").innerText = '《'+ tue[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_tue[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_tue[index];
    } else if (day === 3) { 
        document.getElementById("display-show").innerText = '《'+ wen[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_wen[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_wen[index];
    } else if (day === 4) { 
        document.getElementById("display-show").innerText = '《'+ thu[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_thu[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_thu[index];
    } else if (day === 5) { 
        document.getElementById("display-show").innerText = '《'+ fri[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_fri[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_fri[index];
    } else if (day === 6) { 
        document.getElementById("display-show").innerText = '《'+ sat[index]+ '》';
        if (n_sun[index]=== "")
            document.getElementById("display-host").innerText = n_sat[index];
        else
            document.getElementById("display-host").innerText = "主持人："+ n_sat[index];
    }*/
    /*console.log(index)*/
}

// 每分鐘更新一次顯示文字
setInterval(updateText, 60000);

// 頁面載入時立即更新文字
updateText();

function Refresh(day,index,page){
    const shows=[sun,mon,tue,wen,thu,fri,sat];
    const hosts=[h_sun,h_mon,h_tue,h_wen,h_thu,h_fri,h_sat];
    const keycards=[k_sun,k_mon,k_tue,k_wen,k_thu,k_fri,k_sat];
    
    const show = shows[day][index];
    const host = hosts[day][index];
    const keycard = keycards[day][index];

    var k_src="../images/keycard/"+ page+"/";
    
    document.getElementById("display-show").innerText = '《'+ show + '》';
    if (host == "")
        document.getElementById("display-host").innerText = host;
    else
        document.getElementById("display-host").innerText = "主持人："+ host;
    document.getElementById("display-keycard").src = k_src + keycard;

    /*console.log(show)
    console.log(host)
    console.log(keycard)*/

}
const container1 = document.getElementById('display-show');
const container2 = document.getElementById('display-host');
const container3 = document.getElementById('display-text');
const maxHeight1 = container1.offsetHeight;
const maxHeight2 = container2.offsetHeight;
const maxHeight3 = container3.offsetHeight;
const maxWidth1 = container1.offsetWidth;
const maxWidth2 = container2.offsetWidth;


function adjustFontSize() {
    let fontSize1 = 26; // 初始字體大小 (px)
    let fontSize2 = 17; // 初始字體大小 (px)
    let fontSize3 = 12; // 初始字體大小 (px)
    let minHeight1 = 26;
    let minHeight2 = 17;
    let minHeight3 = 12;
    container1.style.fontSize = fontSize1 + 'px';
    container2.style.fontSize = fontSize2 + 'px';
    container3.style.fontSize = fontSize3 + 'px';

    while (container1.scrollHeight > maxHeight1 || container1.scrollWidth > maxWidth1) {
            fontSize1--; // 遞減字體大小
        container1.style.fontSize = fontSize1 + 'px';
    }
    while (container2.scrollHeight > maxHeight2 || container2.scrollWidth > maxWidth2) {
            fontSize2--; // 遞減字體大小
        container2.style.fontSize = fontSize2 + 'px';
    }
    while (container3.scrollHeight > maxHeight3) {
            fontSize3--; // 遞減字體大小
        container3.style.fontSize = fontSize3 + 'px';
    }
}

adjustFontSize(); // 初始調整
window.addEventListener('resize', adjustFontSize);