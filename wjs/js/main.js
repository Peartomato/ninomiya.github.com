/**
 * Created by Administrator on 2017/9/4.
 */
//����1
//$(function(){
//    var itemArr = $('#banner > .carousel > .carousel-inner > .item');
//    console.log(itemArr);
//    itemArr.each(function(index, item){
//        var imgURL = './img/img/slide_0'+(index+1)+'_2000x410.jpg';
//        item.style.backgroundImage = "url('"+imgURL +"')";
//    })
//})

//����2
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

//����Ļ��ȷ����仯ʱ�����ݿ�����ı�ͼƬ
//���ڴ�С�仯ʱ�������¼�
$(window).on('resize', function(){
    //��ȡ��ǰ����Ļ���
    var screenWidth = $(window).width();
    console.log(screenWidth);
    var itemArr = $('#banner > .carousel > .carousel-inner > .item');
    itemArr.each(function(index, item){
        var bigImageURL = item.dataset.image;
        var smallImageURL = item.dataset.smallImage;
        //����Ļ���С��768ʱ��ʹ��СͼƬ������ʹ��2000x410
        if(screenWidth < 768){
            item.style.backgroundImage = "url('" + smallImageURL + "')";
            //������Ļ��ȵ���ͼƬ�߶�
            var imageHeight = screenWidth / 640 *340;
            item.style.height = imageHeight + 'px';
        }else{
            item.style.backgroundImage = "url('" + bigImageURL + "')";
            item.style.height = '410px';
        }
    })
}).trigger('resize');

//������ʾ
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