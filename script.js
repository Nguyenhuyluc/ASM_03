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
  var viewMore = document.getElementById('view_more')
  var show = document.getElementById("kinhnghiem");
  if (show.style.display === "none") {
    show.style.display = "block";
    viewMore.innerHTML = '▼View Less'
  } else {
    show.style.display = "none";
    viewMore.innerHTML = '▼View More'
  }
}

function myFunction5() {
  var viewMore5 = document.getElementById('view_more5')
  var show = document.getElementById("hocvan");
  if (show.style.display === "none") {
    show.style.display = "block";
    viewMore5.innerHTML = '▼View Less'
  } else {
    show.style.display = "none";
    viewMore5.innerHTML = '▼View More'
  }
}
function myFunction2() {
  var viewMore2 = document.getElementById('view_more2')
  var show = document.getElementById("hoatdong");
  if (show.style.display === "none") {
    show.style.display = "block";
    viewMore2.innerHTML = '▼View Less'
  } else {
    show.style.display = "none";
    viewMore2.innerHTML = '▼View More'
  }
}
function myFunction4() {
  var viewMore4 = document.getElementById('view_more4')
  var show = document.getElementById("ngonngu");
  if (show.style.display === "none") {
    show.style.display = "block";
    viewMore4.innerHTML = '▼View Less';
  } else {
    show.style.display = "none";
    viewMore4.innerHTML = '▼View More';
  }
}
function myFunction3() {
  var viewMore3 = document.getElementById('view_more3')
  var show = document.getElementById("sothich");
  if (show.style.display === "none") {
    show.style.display = "block";
    viewMore3.innerHTML = '▼View Less';
  } else {
    show.style.display = "none";
    viewMore3.innerHTML = '▼View More';
  }
}
function myFunction1() {
  var viewMore1 = document.getElementById('view_more1')
  var show = document.getElementById("kynang");
  if (show.style.display === "none") {
    show.style.display = "block";
    viewMore1.innerHTML = '▼View Less';
  } else {
    show.style.display = "none";
    viewMore1.innerHTML = '▼View More';
  }
}
