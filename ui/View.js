class View{
     static _setUser(){
        if(pager.getUserName()!==""){
            let list = document.getElementsByClassName("name")[0];
            list.innerHTML = pager.getUserName();
            list.style.display = "align-self: flex-start";
         }
    }
    //  static editPost(id, user){
    //     let content = document.getElementById(id);
    //     let a = content.getElementsByClassName("gym");
    //     a.innerHTML = `<div class="gym">${user.gym}</div>`;
    //     let b = content.getElementsByClassName("location");
    //     b.innerHTML = `<div class="location">${user.location}</div>`;
    //     let c = content.getElementsByClassName("stars");
    //     c.innerHTML = `<div class="stars">${user.stars}</div>`;
    //     let d = content.getElementsByClassName("wifi_zones");
    //     d.innerHTML = `<div class="wifi_zones">${user.wifi_zones}</div>`;
    //    let e = content.getElementsByClassName("hashtags");
    //    e.innerHTML = `<div class="hashtags">${user.hashTags}</div>`;
    // }

    static editPost(id, post) {
    let main = document.querySelector('.main-body');
    let node = document.querySelectorAll(".photos");
    for (let i of node) {
      if (i.id == post.id) {
        if (i !== null)
          main.replaceChild(View._createPost(post), i);
        break;
      }
    }
  }
     static removePost(id) {
    let template = document.getElementsByClassName("photos")[0].parentNode;
    let toDel = document.getElementById(id);
    if (toDel !== null) {
      template.removeChild(toDel);
    }
  }
    static _createPost (post){
        let template = document.getElementById("photo-template");
        let content = template.content.cloneNode(true);
        let post1 = content.querySelector(".photos");
        post1.id = post.id;
        let image = content.querySelector(".paragraph img");
        image.src = `${post.name.toLowerCase()}.jpg`;
        let name = content.querySelector(".name");
        name.innerHTML = post.name;
        let location = content.querySelector(".location");
        let str = "Location: " + post.location;
        location.innerHTML = str;
        let gym = content.querySelector(".gym");
        str = "GYM: " + post.gym;
        gym.innerHTML = str;
        let wifi = content.querySelector(".wifi_zones");
        str = "Wi-Fi: " + post.wifi_zones;
        wifi.innerHTML = str;
        let stars = content.querySelector(".stars");
        str = "Stars: " + post.stars;
        stars.innerHTML = str;
        let starsIcon = content.querySelector(".StarsIcon");
        starsIcon.src = `hotel${post.stars}.svg`;
        let hashtags = content.querySelector(".hashtags");
        let editButt = content.querySelectorAll(".confirm-edit")[0];
        let delButt = content.querySelectorAll(".deleteButton")[0];
        editButt.id = post.id;
        delButt.id = post.id;
        if(post.hashTags!==undefined)
            {
                str = "";
            for(let item of post.hashTags)
            str+=item+" ";
        hashtags.innerHTML = str;
    }
         let editForm = content.querySelector(".edit-post");
        //let editSetting = document.getElementsByClassName("editButton")[0];
        let editButton = content.querySelector(".confirm-edit");
        let editHashtags = editForm.querySelector("input");
       //  if (pager.getUser() === post.name) {
       //  //settings.style.display = "block";
       //  editForm.id = post.id;
       //  editButton.addEventListener("click", function(event) {
       //  event.preventDefault();
       //  editForm.id = post.id;
       // // editForm.style.display = "none";
       //  post.hashTags = editHashtags.value;
       //  pager.editPost(post.id,post);
        
    return content;
}
    static showPost(post) {
    let template = document.querySelector("#photo-template");
    template.parentNode.appendChild(View._createPost(post));
  }
   static clear() {
    let full = document.getElementsByClassName("photos");
    for (let i = 0; i < full.length; i++) {
      while (full[i])
        full[i].parentNode.removeChild(full[i]);
    }
    
  }
}