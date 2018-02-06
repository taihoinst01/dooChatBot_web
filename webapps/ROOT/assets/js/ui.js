$(function () {
    $('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    $(window).resize(function () {
        $('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });

    //챗봇창 상단
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>" +
        "<span class='chatTitleText'><strong>TaihoBot</strong></span>" +
        "<span class='chatTitleUser'>taiho님과 대화</span>" +
        "<button class='btnMin'></button>" +
        "<button class='btnLayer btnLayerFull'></button>" +
        "<button class='btnClose'></button>" +
        "<div class='chatStatus'>" +
            "<div class='chatStatus1'><strong>TaihoBot</strong><span class='question'></span></div>" +
            "<div class='chatStatus2'>상태 알수 없음</div>" +
            "<div class='chatStatus3'><span class='iconUser1'></span>참가자2명</div>" +
            "<div class='iconUser2'></div>" +
        "</div > ").appendTo(".wc-header");
    $(".wc-console").add(
        "<div class='chatFooter'>" +
            "<div class='chatFooterIcon1'></div>" +
            "<div class='chatFooterIcon2'></div>" +
            "<div class='chatFooterIcon3'></div>" +
            "<div class='chatFooterIcon4'></div>" +
            "<div class='chatFooterIcon5'></div>" +
        "</div > "
    ).appendTo(".wc-chatview-panel");
});