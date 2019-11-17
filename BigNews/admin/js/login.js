//入口函数
$(function () {
    $('.input_sub').on('click', function (e) {
        e.preventDefault();
        var username = $('.input_txt').val().trim()
        var password = $('.input_pass').val().trim()
        if (username == '' || password == '') {
            $('#myModal .modal-body').text('用户名或密码不能为空! ')
            $('#myModal').modal({ keyboard: true });
            return;
        }
        $.ajax({
            type: 'post',
            url: BigNew.login,
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function (Data) {
                $('#myModal .modal-body').text(Data.msg)
                $('#myModal').modal({ keyboard: true })
                if (Data.code == 200) {
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        window.localStorage.setItem('token', Data.token)
                        window.location.href = './index.html'
                    })
                }
            }
        })
    })
})