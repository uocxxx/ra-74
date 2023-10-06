function ques4_1(){
    alert("Hello world")
}

function question4_5(){
    let text = document.getElementById("ques_4_5").value;
    alert(text)
}

function ques4_6(){
    let name = prompt("Mời bạn nhập vào tên")
    let age = prompt("Mời bạn nhập vào tuổi")
    $("#q6").append(`<p>Chào bạn: <b>${name}</b></p>`)
    $("#q6").append(`<p>Tuổi của bạn là: ${age}</p>`)
}

function ques4_8(){
    let user = {name: "NGuyễn Văn A", gender: "MALE", email:"uocvv@gmail.com"}
    // $("#q8").append(`<p>Tên: ${user.name}</p>`)
    // $("#q8").append(`<p>Giới tính: ${user.gender}</p>`)
    // $("#q8").append(`<p>Mail: ${user.email}</p>`)

    $("#name").empty().append(user.name)
    $("#gender").empty().append(user.gender)
    $("#email").empty().append(user.email)

    document.getElementById("card").style.display = "block";
}

function cong(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let kq = Number(num1) + Number(num2);
    document.getElementById("rs").value = kq;
}

function tru(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let kq = Number(num1) - Number(num2);
    document.getElementById("rs").value = kq;
}

function view(){
    let fullName = document.getElementById("fulllName").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    // console.log(fullName, phone, gender);
    // let favorite = document.querySelector('input[name="favorite"]:checked').value;
    let favorites = document.getElementsByName('favorite');
    let soThich = [];
    favorites.forEach(function(item){
        if(item.checked){
            soThich.push(item.value)
        }
    })
   
    alert("Họ và tên: " + fullName + "\n"
    + "Số điện thoại: " + phone + "\n"
    + "Sở thích: " + soThich)

}