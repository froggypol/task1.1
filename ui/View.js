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
}