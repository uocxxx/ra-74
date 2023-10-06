function function_name2() {
    console.log("Đã vào đây 2")
}

const user1 = { username: "Nguyễn Văn A", age: 8 }

const user2 = { fullname: "Nguyễn Văn A", address: "8" }

function User(id, username, age) {
    this.id = id;
    this.username = username;
    this.myAge = age;
}

const user3 = new User(1, "uocvv", 8);
// console.log(user2)
// console.log(user3)

const myArr = [user2, user3]
// console.log(myArr)

let arrString = ["red", "black", "blue"];
// console.log(arrString)

arrString.push("white")
// console.log(arrString)
// arrString.forEach(function(item){
//     console.log(item)
// })

// let abc = "";

// if (abc) {
//     console.log("Điều kiện đúng")
// } else {
//     console.log("Điều kiện sai")
// }


function demoAleart(){
    alert("Thông báo bạn vừa click");
}

function demoConfirm(){
    if(confirm("Bạn có muón đăng xuất hay ko")){
        alert("Bạn đã đăng xuất!")
    } else{
        console.log("Bạn vừa nhấn huỷ")
    }
    
}
let count = 0;

function doCount(){

    count = localStorage.getItem("number_count");
    count++;
    localStorage.setItem("number_count", count);
}

function checkCount(){
    console.log(localStorage.getItem("number_count"));
}

function getInfor(){
    let input = document.getElementById("demo1").value;
    alert("Bạn vừa nhập: " + input)

}

function demo2(){
    document.getElementById("demo2").innerHTML = "<h1>Hello</h1>";
}

function login(){
    document.getElementById("demo1_1").innerHTML = `<button onclick="logout()">Logout</button>`;
}

function logout(){
    document.getElementById("demo1_1").innerHTML = `<button onclick="login()">Login</button>`;
}

function demo3(){
    const element = document.createElement('h2');
   element.textContent = 'TEST';
//    document.getElementById("demo3").append(element);
   $("#demo3").append(element)
}

function demo4(){
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.getElementById("demo4").style.backgroundColor = `rgb(${a} , ${b} , ${c})`;
}

function demo5(){
    // document.getElementById("demo5").value = "default"; // code js thuần
    $("#demo5").val("Ajax") // code bằng jquery
}

function demo6(){
    document.getElementById("demo6").classList.add("abc");
}

$(function() {
    // Khi load trang, thì sẽ được chạy vào đây
    console.log("Đã vào đây")
});