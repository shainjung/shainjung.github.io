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
    const shows=[mon,tue,wen,thu,fri,sat,sun];
    const hosts=[h_mon,h_tue,h_wen,h_thu,h_fri,h_sat,h_sun];
    const keycards=[k_mon,k_tue,k_wen,k_thu,k_fri,k_sat,k_sun];
    
    const show = shows[day][index];
    const host = hosts[day][index];
    const keycard = keycards[day][index];

    var k_src="../keycard/"+ page+"/";
    
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