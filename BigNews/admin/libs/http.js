(function(w){
    var baseUrl = 'http://localhost:8080/api/v1';//基地址
    var BigNew = {
        //用户登录
        login: baseUrl+'/admin/user/login',//用户登录
        //用户信息
        userInfo: baseUrl+'/admin/user/info',//获取用户信息
        user: baseUrl+'/admin/user/detail',//获取用户详情
        userEdit: baseUrl+'/admin/user/edit',//编辑用户信息
        //文章类别
        CGlist: baseUrl+'/admin/category/list',//所有文章类别
        CGadd:baseUrl+'/admin/category/add',//新增文章类别
        CGsearch: baseUrl+'/admin/category/search',//根据id查询指定文章类别
        CGedit: baseUrl+'/admin/category/edit',//编辑文章类别
        CGdel: baseUrl+'/admin/category/delete',//删除文章类别
        CGquery: baseUrl+'/admin/article/query',//文章搜索
        CGpublish: baseUrl+'/admin/article/publish',//发布文章
        CGidSearch: baseUrl+'/admin/article/search',//根据id获取文章信息
        //文章编辑
        ARedit: baseUrl+'/admin/article/edit',//文章编辑
        ARdel: baseUrl+'/admin/article/delete',//删除文章
        //数据统计
        dataInfo: baseUrl+'/admin/data/info',//获取统计数据
        dataArticle: baseUrl+'/admin/data/article',//日新增文章数量统计
        dataCate: baseUrl+'/admin/data/category',//各类型文章数量统计
        dataVisit: baseUrl+'/admin/data/visit',//日文章访问量
        //评论管理
        comtSec: baseUrl+'/admin/comment/search',//文章评论搜索
        comtPass: baseUrl+'/admin/comment/pass',//评论审核通过
        comtReject: baseUrl+'/admin/comment/reject',//评论审核不通过
        comtDel:baseUrl+'/admin/comment/delete',//删除评论
    }
    w.BigNew = BigNew
}(window))