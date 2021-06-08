var obj={
    name:"saivivek",
    age:23,
    email: "saivivekgmail.com",
    array:[1,2,3,5],
    func:function abc(){
        return 100;
    },
    object:{a:2,b:3}
};
var mixed;
mixed=obj;
console.log(mixed);
console.log(mixed.age);
console.log(mixed.array);
console.log(mixed.abc);
console.log(mixed.object.a);
