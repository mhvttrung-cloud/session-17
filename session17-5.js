 let form = document.querySelector(".form", function(event){
    event.preventDefault();
    console.log("Log In form")
    let emailvalue = form.Email.emailvalue;
    let passwordvalue = form.Password.value;
    if (emailvalue === "huanrose@gmail.com" || passwordvalue === 123456){
        alert("Đăng Nhập thành công")
 } else {
    alert("Đăng Nhập Thất Bại");
 }
}); 