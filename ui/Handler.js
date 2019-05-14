let allButtons = document.getElementsByClassName("Book");
let formLogin = document.getElementsByClassName("toLog")[0];
 function logining(event) {
  let form = formLogin.querySelector(".login");
  let name = form.querySelectorAll("input")[0];
  let surname = form.querySelectorAll("input")[1];
  if (name.value !== "" && surname.value !== "") {
    main.logIn(login.value);
    form.style.display = "none";
  }
}

let logButton1 = allButtons[0];
logButton1.addEventListener("click", loggingIn);
let addPopUp = document.querySelector(".not-logIn");
let addDescr = addPopUp.querySelector(".toLog");

function loggingIn(event) {
  event.preventDefault();
  addPopUp.style.display = "grid";
  document.addEventListener('mousedown', closeLogIn);
}


function closeLogIn(event) {
  if (event.target.closest('.not-logIn') === null) {
    addPopUp.style.display = 'none';
    document.removeEventListener('mousedown', closeLogIn);
   // addButton.removeEventListener("click", add1);
    addDescr.value = "?";
  }
}


let filterButton = document.getElementsByClassName("Search")[0];
filterButton.addEventListener("click", filtering);
//let filterB = document.getElementsByClassName("find")[0];
//filterB.addEventListener("click", filtering);
let formFilter = document.getElementsByClassName("Search-form")[0];
let filtAllFields = formFilter.querySelector(".search");
let closeButton = document.getElementsByClassName("find")[0];
//closeButton.addEventListener("click", closeFiltering);
 function filtering(event) {
  event.preventDefault();
  formFilter.style.display = "grid";
  let fields = document.querySelectorAll(".Search-form p");
  //let findDescription = fields[0].querySelector("input");
  let findCity = fields[1].querySelector("input");
  let findHashTags = fields[0].querySelector("input");
   let filter = {};
   let b=false;
  if (findCity.value !== ""){
    filter.city = findCity.value;
    b=true;
    pager.getPhotos(filter);
  }
  if (findHashTags.value !== ""){
    filter.hashTags = findHashTags.value.split(" ");
    b=true;
  }
  closeButton.addEventListener("click", closeFiltering);
  pager.getPhotos(filter);
}
function closeFiltering(event) {
 let fields = document.querySelectorAll(".Search-form p");
  let findDescription = fields[0].querySelector("input");
  let findCity = fields[1].querySelector("input");
  let findHashTags = fields[2].querySelector("input");
   findDescription.value="";
   findCity.value = "";
   findHashTags.value = "";
   }
let adminLog = document.getElementsByClassName("admin")[0];
adminLog.addEventListener("click", adminLogIn);
let formLog = document.getElementsByClassName("loginAdmin")[0];
let editButt = document.getElementsByClassName("editButton")[0];
let delButt = document.getElementsByClassName("deleteButton")[0];
let adminPic = document.getElementsByClassName("supervisor")[0];
let editForm = document.getElementsByClassName("edit-post")[0];

function adminLogIn(event){
  event.preventDefault();
 formLog.style.display = "grid";
  let login = formLog.querySelectorAll("input")[0];
  let password = formLog.querySelectorAll("input")[1];
  if (login.value !== "" && password.value !== "") {
    pager.logIn(login.value);
   // exitButton.removeEventListener("click", logining);
    //exitButton.addEventListener("click", exit);
   adminPic.style.display = "grid";
   formLog.style.display = "none";
   let user = document.getElementsByClassName("user")[0];
    user.style.display = "none";
    delButt.style.display = "grid";
    editButt.style.display = "grid";
    editForm.style.display="grid";
    // formLogin.style.display = "inline-block";
  }
}
let userButton = document.getElementsByClassName("user")[0];
let userForm = document.getElementsByClassName("menu_line")[0];
let userPic = document.getElementsByClassName("userPic")[0];
userButton.addEventListener("click", userProfile);
function userProfile(){
  userForm.style.display = "grid";
  userPic.style.display = "grid";
  adminLog.style.display = "none";
  editForm.style.display = "none";
}

let back = document.getElementsByClassName("back")[0];
back.addEventListener("click", LogOut);
function LogOut(){
userButton.style.display="grid";
 userPic.style.display = "none";
 userForm.style.display="none";
 adminLog.style.display = "grid";
 adminPic.style.display="none";
 formLog.style.display="none";
 delButt.style.display="none";
 editButt.style.display="none";
 editForm.style.display = "none";
}



//let editPopUp = document.querySelector(".edit-post");
//let settingsButtons = document.querySelectorAll(".menu-settings ul li");
let editSetting = document.getElementsByClassName("editButton")[0];
//let deleteSetting = settingsButtons[1];
//let editDescr = editPopUp.querySelector("textarea");
//let photo = editPopUp.querySelector("img");
let editButton = editForm.querySelector(".confirm-edit");
editButton.addEventListener("click", editing);
function editing(event) {
  event.preventDefault();
  event.stopPropagation();
  post = pager.getPost(editForm.id);
  editForm.id = undefined;
  let newPost = post;
    if (confirm("Вы действительно хотите редактировать пост?")) {
      let editHashtags = editForm.querySelector("input");
      if(editHashtags.value !== "")
  newPost.hashTags = editHashtags.value.split(" ");
  else newPost.hashTags = [];
      pager.editPost(post.id, newPost);
      pager.getPhotos({});
      editForm.style.display = "none";  
       }
}