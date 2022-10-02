var yee={
    gz:200,//工资
    fz:140,//房租
    sxdq:getgz
}

function getgz(gz,fz){//剩下的钱
    return this.gz-this.fz;
}
var now=new Date;
var title;  // 用于临时存放原来的title内容
    window.onblur = function(){
      // onblur时先存下原来的title,再更改title内容
    title = document.title;
    document.title = " （╯‵□′）╯︵┴─┴ 快回来";
    };
    window.onfocus = function () {
      // onfocus时原来的title不为空才替换回去
      // 防止页面还没加载完成且onblur时title=undefined的情况
    if(title) { 
        document.title = title;
    }
    }
    function clear1(){
        prompt("你确定关闭吗");
    }
