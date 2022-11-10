'use strict';

function checkEmail() {
  var email = document.getElementById("txt_email").value;
  var checkuser = document.getElementById("error_user");
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email == "") {
    checkuser.innerHTML = "Email không được để trống !"
  } else if (!regexEmail.test(email)) {
    checkuser.innerHTML = "Email không hợp lệ !"
  } else {
    checkEmail.innerHTML = "";
    const btnCloseModal = document.querySelector('.close_modal');
    const btnsOpenModal = document.querySelector('.show_modal');
    btnsOpenModal.addEventListener('click', function () {
      let modal = document.getElementById('gtbt');
      let form = document.getElementById('form');
      modal.classList.remove('hidden');
      modal.classList.add('show');
      form.classList.remove('show');
      form.classList.add('hidden');
      //overlay.classList.remove('hidden');
    });
    btnCloseModal.addEventListener('click', function () {
      let modal = document.getElementById('gtbt');
      let form = document.getElementById('form');
      modal.classList.remove('show');
      modal.classList.add('hidden');
      form.classList.remove('hidden');
      form.classList.add('show');
      //overlay.classList.add('hidden');
    })
  }
}
function myFunction() {
  var show = document.getElementById("kinhnghiem");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
function myFunction5() {
  var show1 = document.getElementById("hocvan");
  var viewMore = document.getElementById('view_more')
  if (show1.style.display === "none") {
    show1.style.display = "block";
  } else {
    show1.style.display = "none";
  }
}
function myFunction2() {
  var show2 = document.getElementById("hoatdong");
  if (show2.style.display === "none") {
    show2.style.display = "block";
  } else {
    show2.style.display = "none";
  }
}
function myFunction4() {
  var show3 = document.getElementById("ngonngu");
  if (show3.style.display === "none") {
    show3.style.display = "block";
  } else {
    show3.style.display = "none";
  }
}
function myFunction3() {
  var show4 = document.getElementById("sothich");
  if (show4.style.display === "none") {
    show4.style.display = "block";
  } else {
    show4.style.display = "none";
  }
}
function myFunction1() {
  var show5 = document.getElementById("kynang");
  if (show5.style.display === "none") {
    show5.style.display = "block";
  } else {
    show5.style.display = "none";
  }
}
