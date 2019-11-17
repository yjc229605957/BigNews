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
        getArticleList()
    })
    //进入页面获取所有文章数据
    $('#btnSearch').trigger('click')

    //根据页数请求文章列表
    function getArticleList(currentPage) {
        $.ajax({
            url: BigNew.CGquery,
            dataType: 'json',
            data: {
                page: currentPage,
                perpage: 13,
                type: $('#selCategory').val(),
                state: $('#selStatus').val()
            },
            success: function (Data) {
                console.log(Data);
                var newHtml = template('wenzhang_list', Data.data)
                $('.table-striped>tbody').html(newHtml)
                fenye(Data.data.totalCount,Data.data.totalPage)
                
                currentPage()
            }
        })
    }
    //封装分页代码
    function fenye(totalPages, startPage) {
        $("#pager").zPager({
            totalData: totalPages,
            htmlBox: $('#wraper'),
            pageCount: startPage,
            btnShow: true,
            ajaxSetData: false,
            dataRender: function (data) {
                console.log(data + '---data-2');
            },
        })
    };
    

})