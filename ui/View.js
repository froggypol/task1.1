class View{
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
       // d.style.display= "align-self: flex-start";
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
        str = "";
        if(post.hashTags!==undefined)
        for(let item of post.hashTags)
            str+=item+" ";
      return content;
    }
    static showPost(post) {
    let template = document.querySelector("#photo-template");
    template.parentNode.appendChild(View._createPost(post));
  }
   static clear() {///?
    let full = document.getElementsByClassName("photos");
    for (let i = 0; i < full.length; i++) {
      while (full[i])
        full[i].parentNode.removeChild(full[i]);
    }
    
  }
}