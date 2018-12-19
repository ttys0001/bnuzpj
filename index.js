var iframe = document.getElementById('iframeautoheight');
var selects = iframe.contentDocument.querySelectorAll('table.datelist>tbody>tr>td>select');
var pjkc = iframe.contentWindow.document.getElementById('pjkc');
var pjcknum = pjkc.options.length;
var num = 0;

// 开始评教
pj();
iframe.onload = function(){
    if(num < pjcknum+1){
        pj();
    }
}

function pj(){
    if (num < pjcknum){
        adjustTeacherNum();
        console.log(pjkc.options[num].innerHTML+'课程评教保存');
        iframe.contentDocument.getElementById('Button1').click();
        num++;
    }
    else if (num  == pjcknum){
        adjustTeacherNum();
        iframe.contentDocument.getElementById('Button2').click();
        console.log('评教成功');
        num++;
    }
}

function randomAdjust(x){
    for (var i=0;i<x.length;i++){
        x[i].selectedIndex = 1
    }
    var index = Math.round(Math.random() * (x.length - 1));
    // 修改下拉框，避免所有下拉框的值都相同导致无法保存
    x[index].selectedIndex = 2;
}

function adjustTeacherNum(){
    iframe = document.getElementById('iframeautoheight');
    selects = iframe.contentDocument.querySelectorAll('table.datelist>tbody>tr>td>select');
    if (selects[2].getAttribute('id').search('JS3')>0){
        var JS1 = new Array();
        var JS2 = new Array();
        var JS3 = new Array();
        for (var i=0;i<selects.length;i++){
            if (selects[i].getAttribute('id').search('JS1')>0){
                JS1.push(selects[i]);
            }
            else if (selects[i].getAttribute('id').search('JS2')>0){
                JS2.push(selects[i]);
            }
            else if (selects[i].getAttribute('id').search('JS3')>0){
                JS3.push(selects[i]);
            }
        }
        randomAdjust(JS1);
        randomAdjust(JS2);
        randomAdjust(JS3);
    }
    else if (selects[1].getAttribute('id').search('JS2')>0){
        var JS1 = new Array();
        var JS2 = new Array();
        for (var i=0;i<selects.length;i++){
            if (selects[i].getAttribute('id').search('JS1')>0){
                JS1.push(selects[i]);
            }
            else{
                JS2.push(selects[i]);
            }
        }
        randomAdjust(JS1);
        randomAdjust(JS2);
    }
    else {
        randomAdjust(selects);
    }

}



