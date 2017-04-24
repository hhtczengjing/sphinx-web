import Util from './utils.js';
import $ from 'webpack-zepto';

/**
 * GET请求获取数据的方法
 * @param  String url  请求的url
 * @param  Object params 请求参数
 * @param  Function success 请求成功回调函数
 * @return void
 */
function getData(url, params, callback){
    var ctx = Util.getContextPath();
    $.ajax({
        url : ctx + url,
        timeout : 3 * 60 * 1000,//请求时间三分钟
        type : 'get',
        dataType : 'json',
        data : params,
        success : function(data){
            var result = data ? data : null;
            callback(result);
        }
    });
}

/**
 * POST请求获取数据的方法
 * @param  String url  请求的url
 * @param  Object params 请求参数
 * @param  Function success 请求成功回调函数
 * @return void
 */
function postData(url, params, callback){
    var ctx = Util.getContextPath();
    $.ajax({
        url : ctx + url,
        timeout : 3 * 60 * 1000,//请求时间三分钟
        type : 'post',
        dataType : 'json',
        data : params,
        success : function(data){
            var result = data ? data : null;
            callback(result);
        }
    });
}

export default {
    get : getData,
    post : postData
};
