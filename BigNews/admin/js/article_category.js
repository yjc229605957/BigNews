//入口函数
$(function () {
    //一 .进入页面获取所有文章列表
    function getData() {
        $.ajax({
            url: BigNew.CGlist,
            dataType: 'json',
            success: function (Data) {
                var newHtml = template('CGlist_temp', Data);
                $('.table-striped>tbody').html(newHtml);
            }
        })
    }
    getData();

    //二 .模态框
    $('#myModal').on('show.bs.modal', function (e) {
        console.log(e.relatedTarget);//触发的对象
        if (e.relatedTarget == $('#xinzengfenlei')[0]) {//新增按钮触发
            $('#exampleModalLabel').text('新增分类');
            $('.btn-primary').text('新增').addClass('btn-success');
            $('#recipient-name').val('');
            $('#message-text').val('');
        } else {//编辑按钮触发
            $('#exampleModalLabel').text('编辑分类');
            $('.btn-primary').text('编辑').removeClass('btn-success');
            $('#recipient-name').val($(e.relatedTarget).parent().prev().prev().text());
            $('#message-text').val($(e.relatedTarget).parent().prev().text());
            //把按钮的data-id值给隐藏域,这样就能知道打开的是哪个分类
            $('.CG_id').val($(e.relatedTarget).attr('data-id'));
        }
    });

    //模态框确认按钮
    $('.btn-primary').on('click', function () {
        var CGname = $('#recipient-name').val().trim();
        var CGslug = $('#message-text').val().trim();
        if ($(this).text() == '新增') {
            //新增分类功能
            $.ajax({
                type: 'post',
                url: BigNew.CGadd,
                data: {
                    name: CGname,
                    slug: CGslug
                },
                dataType: 'json',
                success: function (Data) {
                    alert(Data.msg)
                    $('#myModal').modal('hide')
                    if (Data.code == 201) {
                        getData();
                    }
                }
            });

        } else {
            //编辑分类功能
            $.ajax({
                type: "post",
                url: BigNew.CGedit,
                data: {
                    id: $('.CG_id').val(),
                    name: CGname,
                    slug: CGslug
                },
                dataType: 'json',
                success: function (Data) {
                    // alert(Data.msg)
                    $('#myModal').modal('hide')
                    if (Data.code == 200) {
                        getData();
                    } else {
                        alert('分类名称或分类别名重复')
                    }
                }
            });
        };
    });


    //删除分类功能 使用事件委托注册事件
    $('.table-striped>tbody').on('click', '.btn-delete', function () {
        if (confirm('确定删除此分类吗?')) {
            $.ajax({
                type: 'post',
                url: BigNew.CGdel,
                data: {
                    id: $(this).attr('data-id')
                },
                dataType: 'json',
                success: function (Data) {
                    alert(Data.msg);
                    if (Data.code == 204) {
                        getData()
                    };
                }
            })
        }
    })
})
