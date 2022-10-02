var gamer = {
    name:"yee",
    age:20,
    sex:"男"
}

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
var json_2=JSON.stringify(gamer, convert, '  ');
var json_1 =  JSON.stringify(gamer,['name','age'],'  ');
var obj = JSON.parse(json_1);

var gamer1 = {
    name:"yee",
    age:20,
    sex:"男",
    toJS:function(){// 只输出name和age，并且改变了key：
    return{  "名字":this.name,
            "AGE":this.age
    }
}
}
var json_cs=JSON.stringify(gamer)
var obj_2 = JSON.parse(json_cs,function(key,value){
    if(key==="name"){
        return value+'先生';
    }
    if(key==="age"){
        return value+'岁';
    }
    return value;
}
)

console.log(JSON.stringify(obj_2));
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
// console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
var person = {
    name : "yyy",
    age:18,
    run:function(){
        console.log(this.name+"在跑步！");
    }
};
var yee = {
    name:"yee"
};
yee.__proto__=person;
var student = {
    name:"Robot",
    height:20,
    run:function(){
        console.log(this.name+"在跑步 ！");
    }
};
function createstudent(name){
    var xuesheng = Object.create(student);
    xuesheng.name=name;
    return xuesheng;
}
var yee1 = createstudent("YEE");