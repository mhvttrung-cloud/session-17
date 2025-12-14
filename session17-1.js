//Bài 1
//  Khi bấm vào nút “Hide text” thì sẽ ẩn đi nội dung ở trên
// Khi bấm vào nút “Show text” thì sẽ hiển thị lên nội dung ở trên

let content = document.getElementsByClassName("content")[0];
let btn = document.getElementsByClassName("btn")[0]
let btn2 = document.getElementsByClassName("btn2")[0];

btn.addEventListener("click", function (){
    content.style.display = "none";
})
btn2.addEventListener("click", function (){
    content.style.display = "block";
})

//Bài 2
//  Khi bấm vào nút “Toggle dark mode”:
// /Nếu/ background màu đen thì chuyển thành màu trắng và chữ đen
// /Nếu/ background màu trắng thì chuyển thành màu đen và chữ trắng

let background = document.querySelector("#black-mode");
let btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", function(){
    if (background.style.backgroundColor === "rgb(0,0,0"){
        background.style.backgroundColor = "white";
        background.style.color = "black"
    } else {
        background.style.backgroundColor = "black";
        background.style.color = "white"
    }
}); // Không hiểu vì sao không ra được ? logic có vđề ???

//Bài 3
//  Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the Modal” sẽ được hiển thị ra và màn hình xung quanh phải tối đi

let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let btnModal = document.getElementById("btn-modal");
let closeModal = document.querySelector(".close");

// overlay.addEventListener("click", function(){
//     overlay.style.display = "none";
// });
// modal.addEventListener("click", function(event){
//     event.stopPropagation();
// })
btnModal.addEventListener("click", function(){
   overlay.style.display = "block";
   } );
closeModal.addEventListener("click", function(){
    overlay.style.display = "none";
});


//Bài 4
// Khi hơ chuột đi qua ô vuông nào, background phải đổi màu sắc theo ô vuông đó (mouse over)

let div_parent = document.getElementById("div-parent");
let div_1 = document.querySelector(".div-1");
let div_2 = document.querySelector(".div-2");
let div_3 = document.querySelector(".div-3");

div_parent.addEventListener("mouseover",function(){
    div_1.style.backgroundColor = "yellow"
})
div_parent.addEventListener("mouseover",function(){
    div_2.style.backgroundColor = "black"
})
div_parent.addEventListener("mouseover",function(){
    div_3.style.backgroundColor = "gray"
})

//Bài 5
// Tạo hai ô nhập liệu: một cho tên đăng nhập và một cho mật khẩu. Khi người dùng bấm nút "Đăng nhập”, với tài khoản fix cứng như sau:
// username: huanrose@gmail.com
// password: 123456
// Yêu cầu khi nhập đúng:
// Thành công: Thông báo đăng nhập thành công bằng alert()
// Thất bại: Thông báo đăng nhập thất bại bằng alert()