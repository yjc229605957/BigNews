//入口函数
$(function () {
    //已进入页面获取用户信息
    function getUser() {
        $.ajax({
            url: BigNew.userInfo,
            dataType: 'json',
            success: function (Data) {
                $('.user_info>span').text('欢迎   ' + Data.data.nickname);
                $('.user_info>img').attr('src', Data.data.userPic);
                $('.user_center_link>img').attr('src', Data.data.userPic);
            }
        })
    };
    getUser();

    //登出按钮
    $(".logout").on('click', function () {
        localStorage.removeItem('token');
        window.location.href = './login.html';
    });

    //左侧导航栏
    $('.level01').on('click',function(){
        $(this).addClass('active').siblings('div').removeClass('active');
        if(this==$('.level01')[1]){
            $('.level02').slideToggle();//切换滑出滑入
            $('.level02>li:eq(0)').addClass('active').siblings('li').removeClass('active')
            //文章管理小图标旋转
            $('.icon-arrowdownl').toggleClass('rotate0');
        };
    });
    //文章管理li标签变色
    $('.level02>li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    })
});