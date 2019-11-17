//入口函数
$(function () {
    //一 . 页面一打开获取用户详细信息
    function getUser() {//封装获取方法
        $.ajax({
            url: BigNew.user,
            success: function (Data) {
                for (var key in Data.data) {
                    $('.' + key).val(Data.data[key])
                }
                $('.user_pic').attr('src', Data.data.userPic)
            }
        })
    }
    //调用获取方法
    getUser()

    //二 . 头像预览
    $('#exampleInputFile').on('change', function () {
        var user_icon = this.files[0];//js原生方法
        var url = URL.createObjectURL(user_icon)
        console.log(url);
        $('.user_pic').attr('src', url)
    })

    //三 . 添加修改按钮修改信息
    $('.btn-edit').on('click', function (e) {
        e.preventDefault()
        var fd = new FormData($('#form')[0])
        $.ajax({
            type: 'post',
            url: BigNew.userEdit,
            data: fd,
            processData: false,
            contentType: false,
            success: function (Data) {
                alert(Data.msg)
                if (Data.code == 200) {
                    $.ajax({
                        url: BigNew.userInfo,
                        dataType: 'json',
                        success: function (Data) {
                            parent.$('.user_info>span').text('欢迎' + Data.data.nickname)
                            parent.$('.user_info>img').attr('src', Data.data.userPic)
                            parent.$('.user_center_link>img').attr('src', Data.data.userPic)
                        }
                    })
                }
            }
        })
    })
})