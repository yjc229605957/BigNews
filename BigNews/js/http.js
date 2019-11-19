(function(w){
    var baseUrl = 'http://localhost:8080/api/v1';//基地址
    var BigNew = {
        //用户文章
        search: baseUrl+'/index/search',//文章搜索
        category: baseUrl+'/index/category',//文章类型
        hotPic: baseUrl+'/index/hotpic',//热点图
        rank: baseUrl+'/index/rank',//文章热门排行
        latest: baseUrl+'/index/latest',//最新资讯
        attention: baseUrl+'/index/attention',//焦点关注
        artitle: baseUrl+'/index/artitle',//文章详细内容
        //评论
        latest_com:baseUrl+'/index/latest_comment',//最新评论
        post_com: baseUrl+'/index/post_comment',//发布评论
        get_com: baseUrl+'/index/get_comment',//评论列表
        
    }
    w.BigNew = BigNew
}(window))