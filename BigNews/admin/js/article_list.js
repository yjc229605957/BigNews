//入口函数
$(function () {
    //一 .打开页面获取所有分类渲染到分类筛选下拉框
    $.ajax({
        url: BigNew.CGlist,
        dataType: 'json',
        success: function (Data) {
            //使用模板引擎渲染
            var newHtml = template('category_list', Data)
            $('#selCategory').html(newHtml)
        }
    })

    //二 .筛选按钮获取数据
    $('#btnSearch').on('click', function (e) {
        e.preventDefault();
        console.log(currentPage);
        $.ajax({
            url: BigNew.CGquery,
            dataType: 'json',
            data: {
                page:currentPage(),
                perpage: 13,
                type: $('#selCategory').val(),
                state: $('#selStatus').val()
            },
            success: function (Data) {
                console.log(Data);
                var newHtml = template('wenzhang_list', Data.data)
                $('.table-striped>tbody').html(newHtml)
            }
        })
    })
    //进入页面获取所有文章数据
    $('#btnSearch').trigger('click')

    //分页按钮点击切换文章
    $('#pager').on('click','a',function(){
        console.log('s');
        
        $.ajax({
            url: BigNew.CGquery,
            dataType: 'json',
            data: {
                // page:currentPage(),
                perpage: 13,
                type: $('#selCategory').val(),
                state: $('#selStatus').val()
            },
            success: function (Data) {
                console.log(Data);
                var newHtml = template('wenzhang_list', Data.data)
                $('.table-striped>tbody').html(newHtml)
            }
        })
    })
})