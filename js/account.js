$(function() {
    // Khi load trang, thì sẽ được chạy vào đây
    check();
    getListAccount();
    getlistDepartmentFromAccount();
});

function check(){
    // Check login
    let role = localStorage.getItem("role");
    if(role){
        // NẾu đã đăng nhập // logic here
        if(role == "ADMIN"){
            document.getElementById("buttonAccount").style.display = "block";
        }
    }
}

function getlistDepartmentFromAccount(){
    // $.ajax({
    //     url: "http://localhost:8888/api/v1/department/get-all" ,
    //     type: "GET",
    //     contentType: "application/json", // Định nghĩa định dạng dữ liệu truyền vào là json
    //     error: function (err) {
    //       // Hành động khi apii bị lỗi
    //       console.log(err);
    //       alert(err.responseJSON);
    //     },
    //     success: function (data) {
    //       // Hành động khi thành công
    //       console.log(data)
    //       fillDataToForm(data);
    //     },
    //   });
}


function fillDataToForm(data){
    $("#departmentId").empty();
    $("#departmentId").append(`<option value="" selected>Lựa chọn phòng ban</option>`)
    data.forEach(function (item, index) {
        $("#departmentId").append(`<option value="${item.id}">${item.departmentName}</option>`)
    });
}