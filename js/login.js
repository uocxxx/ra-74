$(function() {
    // Khi load trang, thì sẽ được chạy vào đây
    console.log("Đã vào đây")
});

function login(){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username, password)
    if(username == "ADMIN" && password == "123456"){
        // Lưu thông tin đăng nhập lên localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("role", "ADMIN");

        // chuyển hướng trang sang tragn home
        window.location = "http://127.0.0.1:5500/index.html"
    } else if (username == "USER" && password == "123456"){
        localStorage.setItem("username", username);
        localStorage.setItem("role", "USER");
        // chuyển hướng trang sang tragn home
        window.location = "http://127.0.0.1:5500/index.html"
    } else {
        alert("Sai thông tin user hoặc password, mời nhập lại!")
    }
}