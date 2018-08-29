// ==UserScript==
// @name         sycm danpin
// @name:zh      单品分析助手-生意参谋 chazz
// @namespace    https://github.com/chazz1/taobaosycm
// @version      0.0.2
// @description   生意参谋单品分析助手，一键计算收藏加购率
// @icon          https://img.alicdn.com/tps/i1/TB1.OB5HpXXXXbyXpXXFArBHXXX-48-48.ico
// @author       chazz <chazzcfb@163.com>
// @match        *://sycm.taobao.com/bda/items/itemanaly/item_analy*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.js
// ==/UserScript==

(function() {
    'use strict';
    var btn1 = '<li class="ui-switch-item ui-routable-item ch-btn"><a href="JavaScript:;">计算</a></li>';
    $(".btn-group-switch .ui-switch-menu").append(btn1);

    $("li.ch-btn").click(function(){
        $("span.ch-span").remove() 
        var sourceNames = $("li.t-source-name ul.flow-source-table").children("ul").children("li");
        var flows = $("li.t-flow ul.flow-source-table").children("ul").children("li");
        var guides = $("li.t-guide ul.flow-source-table").children("ul").children("li");
        sourceNames.each(function(){
            var i = $(this).index(); 
            var fangke = flows.eq(i).children("div").eq(0); 
            var shoucang = guides.eq(i).children("div").eq(0); 
            var jiagou = guides.eq(i).children("div").eq(1); 
            var fk = fangke.text(); 
            var jg = jiagou.text();
            var sc = shoucang.text();
            var reg = new RegExp(",",""); 
            fk = Number(fk.replace(reg,"")); 
            jg = Number(jg.replace(reg,""));
            sc = Number(sc.replace(reg,""));
            var js = (jg/fk)*100;  
            var t = '<span class="ch-span" style="color: #f00;font-size:6px;">'+js.toFixed(1)+'%</span>';
            jiagou.append(t); 
            js = ((sc+jg)/fk)*100;  
            t = '<span class="ch-span" style="color: #f00;font-size:6px;">'+js.toFixed(1)+'%</span>';
            fangke.append(t); 
            js = (sc/fk)*100;  
            t = '<span class="ch-span" style="color: #f00;font-size:6px;">'+js.toFixed(1)+'%</span>';
            shoucang.append(t); 
        });
    });


})();
