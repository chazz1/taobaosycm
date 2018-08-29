// ==UserScript==
// @name         sycm+danpin : sycm danpin
// @name:zh      单品分析助手-生意参谋 chazz
// @namespace    https://github.com/chazz1/taobaosycm
// @version      0.1
// @description
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
        $("span.ch-span").remove() //先清空计算标签


        var sourceNames = $("li.t-source-name ul.flow-source-table").children("ul").children("li");
        var flows = $("li.t-flow ul.flow-source-table").children("ul").children("li");
        var guides = $("li.t-guide ul.flow-source-table").children("ul").children("li");
        sourceNames.each(function(){
            // var sourceName = $(this).text(); //获取渠道名称
            var i = $(this).index(); //获取当前行数，从0开始计算
            var fangke = flows.eq(i).children("div").eq(0); //获取访客对象
            var shoucang = guides.eq(i).children("div").eq(0); //获取收藏人数对象
            var jiagou = guides.eq(i).children("div").eq(1); //获取加购人数对象
            var fk = fangke.text(); //获取访客数据
            var jg = jiagou.text();//获取加购数据
            var sc = shoucang.text()//获取收藏人数

            var reg = new RegExp(",",""); //去掉数字中的,号，以防计算出现NaN的情况
            fk = Number(fk.replace(reg,"")); //整理数据
            jg = Number(jg.replace(reg,""));
            sc = Number(sc.replace(reg,""));
            var js = (jg/fk)*100;  //计算加购率
            var t = '<span class="ch-span" style="color: #f00;font-size:6px;">'+js.toFixed(1)+'%</span>';
            jiagou.append(t); //插入加购率数据
            js = ((sc+jg)/fk)*100;  //计算加购率
            t = '<span class="ch-span" style="color: #f00;font-size:6px;">'+js.toFixed(1)+'%</span>';
            fangke.append(t); //插入加购收藏率数据
            js = (sc/fk)*100;  //计算收藏率
            t = '<span class="ch-span" style="color: #f00;font-size:6px;">'+js.toFixed(1)+'%</span>';
            shoucang.append(t); //插入收藏率数据
        });
    });


})();
