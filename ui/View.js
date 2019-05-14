class View{
    constructor(user){
        this._user = user;
        this._setUser(user);
    }

     _setUser(user){
        if(!!user){
            let list = document.getElementsByClassName("name")[0];
            list.innerHTML = user.name;
            list.style.display = "align-self: flex-start";
            this._aboutUser(user);
           // this._deleteInputer(user);
           // this._createAddButton();

         }
    }
     _aboutUser(user){
        let a = document.getElementById("gym");
        a.innerHTML = `<div id="gym">${user.gym}</div>`;
        let b = document.getElementById("location");
        b.innerHTML = `<div id="location">${user.location}</div>`;
        let c = document.getElementById("stars");
        c.innerHTML = `<div id="stars">${user.stars}</div>`;
        let d = document.getElementById("wifi_zones");
        d.innerHTML = `<div id="wifi_zones">${user.wifi_zones}</div>`;
        d.style.display= "align-self: flex-start";
    }
    removePost(id){
        let list = document.getElementById("photos");
        let elem = document.getElementById("postNumber" + id);
        list.removeChild(elem);
    }
    _createPost (post){
        let newPost = `<div>${post.name}</div>
        <div>${post.location}</div>`;
      return newPost;
    }
    showPost(post){    
        let list = document.getElementById("lenta");
        let li = document.createElement('li');
        li.name = post.name;
        li.innerHTML = this._createPost(post);
        list.appendChild(li);
        this._addUserFilter(post);
    }
     static _setUser(){
        if(pager.getUserName()!==""){
            let list = document.getElementsByClassName("name")[0];
            list.innerHTML = pager.getUserName();
            list.style.display = "align-self: flex-start";
         }
    }
     static editPost(id, user){
        let a = document.getElementsByClassName("gym");
        a.innerHTML = `<div class="gym">${user.gym}</div>`;
        let b = document.getElementsByClassName("location");
        b.innerHTML = `<div class="location">${user.location}</div>`;
        let c = document.getElementsByClassName("stars");
        c.innerHTML = `<div class="stars">${user.stars}</div>`;
        let d = document.getElementsByClassName("wifi_zones");
        d.innerHTML = `<div class="wifi_zones">${user.wifi_zones}</div>`;
       let e = document.getElementsByClassName("hashtags");
       e.innerHTML = `<div class="hashtags">${user.hashTags}</div>`;
    }
     static removePost(id) {
    let template = document.getElementsByClassName("photos").parentNode;
    let toDel = document.getElementById(id);
    if (toDel !== null) {
      template.removeChild(toDel);
    }
  }
    static _createPost (post){
        let template = document.getElementById("photo-template");
        let content = template.content.cloneNode(true);
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
        if (name.innerHTML === post.name) {
        //settings.style.display = "block";
        editForm.id = post.id;
        editButton.addEventListener("click", function(event) {
        event.preventDefault();
        editForm.id = post.id;
        editForm.style.display = "grid";
        post.hashTags = editHashtags.value;
        
    });
      
    }
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