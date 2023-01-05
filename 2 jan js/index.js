let person = {
    name:"donamol",
    age:21,
    fav_foods:["juice","biryani","kanji"],
    ismarried:false,
    personal_info:{
        place:"idukki(marykulam)",
    },
    eating:function (){
        console.log(this.name+" is eating "+this.fav_foods[2])
    }
}





function greet(num1,num2){
    return num1 + num2
    console.log("qwerty");
}
let result = greet(10,15)
console.log(result);


console.log(person.eating());

let Console = {
    log:function(arg){
        console.log(arg)
    }
}
Console.log("donamol vs varsha")

let Document = {
    length:5,
    getElementById:function (arg){
        // select element with id = arg
        console.log("element with id "+arg+" is selected")
    }
}
console.log(Document.getElementById("num"))