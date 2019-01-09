function lazyLoad() {
    //当前窗口的高度
    var windowHeight = $(window).height();
    // 文档(document)的高
    var bodyHeight = $(document).height();
    //没有滚动条的情况下（图片不满屏），直接加载
    if(bodyHeight <= windowHeight){
        $('.lazyImg').each(function () {
            var that = $(this);
            //
            if(that.attr('data-url')!=that.attr("src")){
                //所需地址存在，则src变更为所需地址
                if(that.attr('data-src')){
                    that.attr('src',that.attr('data-src'))
                }
                //不存在以下操作可自定义
                else{
                    that.attr('data-src',that.attr('src'))
                }
            }
        });
    }else{
        var phase = 100;
        $(document).on("scroll",function (e) {
            $(".lazyImg").each(function () {
                var that = $(this);
                //窗口的高度+看不见的顶部的高度=屏幕低部距离最顶部的高度
                var realTop = parseInt($(window).height())+parseInt($(window).scrollTop());
                //屏幕顶部距离最顶部的高度   减去图片高度，上拉时也会点到图片就加载
                var thatTop = parseInt($(window).scrollTop()) - parseInt(that.height());
                var imgTop = parseInt(that.offset().top);
                if(imgTop>=thatTop - phase && imgTop<=realTop +phase && that.attr('data-url')!=that.attr('src')){
                    //所需地址存在，则src变更为所需地址
                    if(that.attr('data-src')){
                        that.attr('src',that.attr('data-src'))
                    }
                    //不存在以下操作可自定义
                    else{
                        that.attr('data-src',that.attr('src'))
                    }
                }
            })
        })
    }
}
lazyLoad();
$("body,html").scrollTop(1);