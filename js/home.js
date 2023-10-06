$(function() {
    // Khi load trang, thì sẽ được chạy vào đây
    // checkLogin();
    $("#body").load("./html/account-page.html");
    getListAccount();
});

let apiBaseAccount = 'https://64e5f99609e64530d17f5cb0.mockapi.io/user';
// let apiBaseAccount = 'http://localhost:8888/api/v1/account';

let accountList = [];

function checkLogin(){
    // Check login
    let role = localStorage.getItem("role");
    if(role){
        // NẾu đã đăng nhập // logic here
        if(role == "ADMIN"){
            document.getElementById("navDepartment").style.display = "block";
            // Khi code được load tới đây, thì trang html của account chưa load ra, vì thế
            // thời điểm load tới đây chưa có thẻ nào có id là buttonAccount
            // document.getElementById("buttonAccount").style.display = "block";
        }
    } else{
        window.location = "/login.html";
    }
}

function logout(){
    // localStorage.removeItem("")
    localStorage.clear();
    window.location = "/login.html";
}

function clickNavihome(){
    console.log("Vào trang home")
    $("#body").load("./html/home-page.html");
}

function clickNaviViewListAccount(){
    $("#body").load("./html/account-page.html");
}

function clickNaviViewListDepartment(){
  console.log(121212)
  $("#body").load("./html/department-page.html");
}

function getListAccount() {
    // Lấy ra được danh sách Account từ API
    // Gán danh sách accout vào biến accountList
    $.ajax({
      url: apiBaseAccount,
      // url: apiBaseAccount + '/get-all',
      type: "GET",
      contentType: "application/json", // Định nghĩa định dạng dữ liệu truyền vào là json
      // data: JSON.stringify(request),
      error: function (err) {
        // Hành động khi apii bị lỗi
        console.log(err);
        alert(err.responseJSON);
      },
      success: function (data) {
        // Hành động khi thành công
        fillAccountToTable(data);
        console.log(data);
      },
    });
  }
  
  function fillAccountToTable(data) {
    accountList = data;
    $("tbody").empty();
  
    accountList.forEach(function (item, index) {
        let action = "";
        if(localStorage.getItem('role') == 'ADMIN'){
            action = `<i class="fa fa-pencil pointer" style="font-size: 36px; color: orange" onclick="openModalUpdateAccount(${item.id})"></i>
            <i class="fa fa-trash pointer" style="font-size: 36px; color: red" data-toggle="modal" 
            data-target="#modalDelete" onclick="confirmDelete(${item.id})"></i>`
        }
        let departmentName = "";
        if(item.department){
          departmentName = item.department.departmentName;
        }
      $("tbody").append(
        `<tr>
        <th scope="row">${index + 1}</th>
        <td>
          <img
            src="${item.avatar}"
            style="width: 100px"
          />
        </td>
        <td>${item.username}</td>
        <td>${item.address}</td>
        <td>${departmentName}</td>
        <td>
          ${action}
        </td>
      </tr>`
      );
    });
  }

  function Account(userId, username, avatar, address,departmentId, createDate){
    this.id = userId;
    this.username = username;
    this.avatar = avatar;
    this.address = address;
    this.departmentId = departmentId;
    this.createdAt = createDate;
  }

function openModalUpdate(){
  document.getElementById("modalAccountTitle").innerText = "Thêm mới Account";

    document.getElementById("username").value = "";
    document.getElementById("avatar").value = "";
    document.getElementById("address").value = "";
    document.getElementById("departmentId").value = "";
    document.getElementById("createDate").value = "";
    document.getElementById("accountIdUpdate").value = "0";
}

  function onSave(){
    let accountID = document.getElementById("accountIdUpdate").value
    let method = "POST"
    if(accountID != 0){
      method = "PUT";
    }
    let username = document.getElementById("username").value;
    let avatar = document.getElementById("avatar").value;
    let address = document.getElementById("address").value;
    let departmentId = document.getElementById("departmentId").value; // Lấy giá trị option mình đã select trong form
    let createDate = document.getElementById("createDate").value;

    // console.log(username, avatar, address, createDate)
    // Call API thêm mới
    // Tạ object với các dữ liệu như trên.
    let account = new Account(accountID, username, avatar, address,departmentId, createDate);
    console.log(account);
    $.ajax({
        url: apiBaseAccount ,
        type: method,
        contentType: "application/json", // Định nghĩa định dạng dữ liệu truyền vào là json
        data: JSON.stringify(account),
        error: function (err) {
          // Hành động khi apii bị lỗi
          console.log(err);
          alert(err.responseJSON);
        },
        success: function (data) {
          // Hành động khi thành công
          // dùng js để tạo 1 click vào nút close
          document.getElementById("modalAccount").click();
        //   $('#modalAccount').hide()
          getListAccount();
        },
      });
  }

  function confirmDelete(id){
    // console.log(id)
    document.getElementById('accountIdDelete').value = id;
  }

  function deleteAccount(){
    let id = document.getElementById('accountIdDelete').value;
    // Call API xoá Account
    $.ajax({
        url: apiBaseAccount + "/" + id,
        type: "DELETE",
        contentType: "application/json", // Định nghĩa định dạng dữ liệu truyền vào là json
        // data: JSON.stringify(account),
        error: function (err) {
          // Hành động khi apii bị lỗi
          console.log(err);
          alert(err.responseJSON);
        },
        success: function (data) {
          // Hành động khi thành công
          // dùng js để tạo 1 click vào nút close
          showAlrtSuccess("Đã xoá account thành công");
          document.getElementById("modalDelete").click();
          getListAccount();
        },
      });
  }

  function openModalUpdateAccount(id){
    // Lấy ra đối tượng Account theo ID
    $.ajax({
      url: apiBaseAccount + "/" + id,
      type: "GET",
      contentType: "application/json", // Định nghĩa định dạng dữ liệu truyền vào là json
      // data: JSON.stringify(account),
      error: function (err) {
        // Hành động khi apii bị lỗi
        console.log(err);
        alert(err.responseJSON);
      },
      success: function (data) {
        // Hành động khi thành công
        console.log(data)
        fillAccountToModal(data);
      },
    });
  }

function fillAccountToModal(data){
  let departmentId = "";
  if(data.department){
    departmentId = data.department.id;
  }
  document.getElementById("username").value = data.username;
  document.getElementById("avatar").value = data.avatar;
  document.getElementById("address").value = data.address;
  document.getElementById("departmentId").value = departmentId;
  document.getElementById("createDate").value = data.createDate;
  document.getElementById("accountIdUpdate").value = data.id;

  document.getElementById("modalAccountTitle").innerText = "Update Account";

  $('#modalAccount').modal('show');
}

  // Tạo 1 hàm chung để thông báo thành công
function showAlrtSuccess(text) {
    document.getElementById("text-modal-success").innerText = text;
    $("#modal-success").fadeTo(2000, 500).slideUp(500, function () {
        $("#modal-success").slideUp(5000);
    });
}
