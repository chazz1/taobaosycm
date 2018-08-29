// ==UserScript==
// @name         sycm xiaoguo
// @name:zh      商品效果助手-生意参谋 chazz
// @namespace    https://github.com/chazz1/taobaosycm
// @version      0.1
// @description
// @icon          https://img.alicdn.com/tps/i1/TB1.OB5HpXXXXbyXpXXFArBHXXX-48-48.ico
// @author       chazz <chazzcfb@163.com>
// @match        *://sycm.taobao.com/bda/items/effect/item_effect*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.js
// ==/UserScript==

(function() {
    'use strict';
    var btn1 = '<div class="ui-switch btn-group-switch"><ul class="ui-switch-menu"><li class="ui-switch-item ui-routable-item ch-btn hidden"><a href="JavaScript:;">计算收藏加购率</a></li><li class="ui-switch-item ui-routable-item ch-btn2"><a href="JavaScript:;">看人气</a></li><li class="ui-switch-item ui-routable-item ch-btn3"><a href="JavaScript:;">看价值</a></li></ul></div>';
    $(".operation").prepend(btn1);
    $("li.ch-btn2").click(function(){
        if($(".ch-btn").hasClass("hidden")){
            $(".ch-btn").removeClass("hidden");
        }
        gouxuan(4,5,20,21);
    });
    $("li.ch-btn3").click(function(){
        if(!$(".ch-btn").hasClass("hidden")){
            $(".ch-btn").addClass("hidden");
        }
        gouxuan(3,10,14,15);
    });
    $("li.ch-btn").click(function(){
        $("span.ch-span").remove() 
        var div = $("div.orderable-table");
        var divHeader= div.children("div.table-header");
        var divBody= div.children("div.table-body");
        var rows = divBody.children("div.row");
        rows.each(function(){
            var spans = $(this).children("span");
            var fangke = spans.eq(1); 
            var jiagou = spans.eq(2); 
            var shoucang = spans.eq(3);
            var fk = fangke.text();
            var jg = jiagou.text();
            var sc = shoucang.text();
            var reg = new RegExp(",",""); 
            fk = Number(fk.replace(reg,"")); 
            jg = Number(jg.replace(reg,""));
            sc = Number(sc.replace(reg,""));
            var js = (jg/fk)*100;  
            var t = '<span class="ch-span" style="color: #f00;font-size:6px;"><br>'+js.toFixed(1)+'%</span>';
            jiagou.append(t); 
            js = ((sc+jg)/fk)*100;  
            t = '<span class="ch-span" style="color: #f00;font-size:6px;"><br>'+js.toFixed(1)+'%</span>';
            fangke.append(t); 
            js = (sc/fk)*100;  
            t = '<span class="ch-span" style="color: #f00;font-size:6px;"><br>'+js.toFixed(1)+'%</span>';
            shoucang.append(t); 
        });
    });
})();
function gouxuan(s1,s2,s3,s4){
    $("span.ch-span").remove() 
    var dropdown=$("div.dropdown-index-picker");
    var spans = dropdown.find("span.checkbox");
    spans.each(function(i,item){
        var checkbox=$(this);
        if(i!=0){
            if(checkbox.hasClass("selected")){checkbox.click();}
        }
    });
    spans.each(function(i,item){
        var checkbox=$(this);
        switch(i){
            case s1:
                checkbox.click();
                break;
            case s2:
                checkbox.click();
                break;
            case s3:
                checkbox.click();
                break;
            case s4:
                checkbox.click();
                break;
        }
    });
}