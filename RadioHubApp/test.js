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
    if (day === 0) { // 星期日
        document.getElementById("display-show").innerText = '《'+ sun[hour]+ '》';
        document.getElementById("display-host").innerText = n_sun[hour];
    } else if (day === 1) { 
        document.getElementById("display-show").innerText = '《'+ mon[hour]+ '》';
        document.getElementById("display-host").innerText = n_mon[hour];
    } else if (day === 2) { 
        document.getElementById("display-show").innerText = '《'+ tue[hour]+ '》';
        document.getElementById("display-host").innerText = n_tue[hour];
    } else if (day === 3) { 
        document.getElementById("display-show").innerText = '《'+ wen[hour]+ '》';
        document.getElementById("display-host").innerText = n_wen[hour];
    } else if (day === 4) { 
        document.getElementById("display-show").innerText = '《'+ thu[hour]+ '》';
        document.getElementById("display-host").innerText = n_thu[hour];
    } else if (day === 5) { 
        document.getElementById("display-show").innerText = '《'+ fri[hour]+ '》';
        document.getElementById("display-host").innerText = n_fri[hour];
    } else if (day === 6) { 
        document.getElementById("display-show").innerText = '《'+ sat[hour]+ '》';
        document.getElementById("display-host").innerText = n_sat[hour];
    }
    console.log(index)
}

// 每分鐘更新一次顯示文字
setInterval(updateText, 60000);

// 頁面載入時立即更新文字
updateText();
