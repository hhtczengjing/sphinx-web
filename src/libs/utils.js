var util = {};
util.getUrlParam = function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r !== null) return  decodeURI(r[2]); return null;
};
util.getUrlParams = function(){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};
util.getContextPath = function(){
    let debug = process.env.NODE_ENV !== 'production';
    if (debug) {
      return "http://127.0.0.1:8888/";
    }
    else {
      var url = document.location.toString();
      var scheme = window.location.protocol.toString();
      var host = window.location.host.toString();
      var pathname = window.location.pathname.toString();
      var server = scheme + "//" + host + "/" + pathname.split("/")[1];
      console.log(server);
      return server;
    }
    return url;
};
/*字符串转换为布尔型*/
util.getBoolean = function (str){
    if(!str) return false;
    if(str == 1 || str == 'true' || str === true) return true;
    return false;
};
/*数组对象中获取某一属性数组*/
util.getArray = function (arr, key){
    var returnArr = [];
    if(arr && arr.length > 0){
        for(var i = 0; i < arr.length; i++){
            returnArr.push(arr[i][key]);
        }
    }
    return returnArr;
};
export default util;
