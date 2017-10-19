/**
 * Created by Administrator on 2017/9/4.
 */
//方法1
//$(function(){
//    var itemArr = $('#banner > .carousel > .carousel-inner > .item');
//    console.log(itemArr);
//    itemArr.each(function(index, item){
//        var imgURL = './img/img/slide_0'+(index+1)+'_2000x410.jpg';
//        item.style.backgroundImage = "url('"+imgURL +"')";
//    })
//})

//方法2
$(function(){
    var itemArr = $('#banner > .carousel > .carousel-inner > .item');
    console.log(itemArr);
    itemArr.each(function(index, item){
        var imgURL = item.dataset.image;
        console.log(item.dataset.image);
        item.style.backgroundImage = "url('"+imgURL +"')";
        //item.style.backgroundImage = "url(imgURL)";
    })
})

//当屏幕宽度发生变化时，根据宽度来改变图片
//窗口大小变化时触发的事件
$(window).on('resize', function(){
    //获取当前的屏幕宽度
    var screenWidth = $(window).width();
    console.log(screenWidth);
    var itemArr = $('#banner > .carousel > .carousel-inner > .item');
    itemArr.each(function(index, item){
        var bigImageURL = item.dataset.image;
        var smallImageURL = item.dataset.smallImage;
        //当屏幕宽度小于768时，使用小图片，否则使用2000x410
        if(screenWidth < 768){
            item.style.backgroundImage = "url('" + smallImageURL + "')";
            //根据屏幕宽度调整图片高度
            var imageHeight = screenWidth / 640 *340;
            item.style.height = imageHeight + 'px';
        }else{
            item.style.backgroundImage = "url('" + bigImageURL + "')";
            item.style.height = '410px';
        }
    })
}).trigger('resize');

//工具提示
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
    $('.tabs li a').click(function(){
        //console.log(this);
        var title = this.dataset.title;
        //console.log(title);
        $('#news-title').text(title);
    })
})