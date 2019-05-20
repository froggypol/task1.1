let pager = (function(){
   let userName = "";
   let hPosts = new hotelCollection([
    {
    id: "2",
    name:"Beijin",
    location:"Nezavisimosti 5",    
    gym:"No GYM",
    stars:"3",
    wifi_zones:"No wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"]
    },
{
    id: "1",
    name:"Astoria",
    location:"Gleb",    
    gym:"ADD Great Day",
    stars:"4",
    wifi_zones:"7 wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"]
},
{   id: "4",
    name:"Minsk",
    location:" pr.Nezavisimosti 152/87a",    
    gym:"No GYM",
    stars:"3",
    wifi_zones:"4 wi-fi zones",
    hashTags:["#comfort", "#Minsk", "#Belarus"]
    },
  {
    id: "3",
    name:"Rennessans",
    location:"Nekrasova street 221/7a",    
    gym:"5 GYMs",
    stars:"5",
    wifi_zones:"5 wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"]
}
  ]);
    return {

        getUser(){
            return userName;
        },
        logIn(username) {
        userName = username;
        //this.showUserInfo(userName, "images/2.jpg");
        this.getPhotos({});
        },
        showUserInfo(username, photolink) {
      View.showUserInfo(photolink, username);
         },

     logOut() {
      userName = "";
      this.getPhotos({});
        },
        setPageUser(){
            View._setUser();
            },
        setPosts(posts){
            hPosts = new hotelCollection(posts);
            this.createPage();
        },
        getPost(id) {
        return hPosts._get(id);
        },
         addPost(post) {
        if (hPosts.add(post)){
            return true;
        }
        return false;
    },
        getPhotos(filterConfig, skip = 0, top = 10){
        View.clear();
        let result = hPosts.getPage(filterConfig, skip = 0, top = 10);
        for(let i = 0; i<result.length; i++)
            View.showPost(result[i]);
        return result;
    },
        createPage(){ 
            hPosts.getPage(0,hotelCollection.getPostsCount() -1).forEach(element => {
                View.showPost(element);
            });
        },
        removePost(id){
            if(hPosts.remove(id)){
                View.removePost(id);
                this.save();
                return true;
            }
            return false;
        },
         save(){
        let posts = [];
        posts = this.getPhotos({});
        let strPosts = JSON.stringify(posts);
        localStorage.setItem("postList", strPosts);
    },
     restore(){
      let webPosts = JSON.parse(localStorage.getItem("postList"));
      //webPosts.forEach(post=>post.createdAt = new Date(post.createdAt));
      hPosts = new hotelCollection(webPosts);
           // p.createdAt = new Date(p.createdAt);
        //posts.sort(function compareDates(a, b){return a.createdAt - b.createdAt});
        //this.setPosts(posts);
    },
    start(){
      if(localStorage["postList"]!=="a")
      this.restore();
      else
      localStorage["postList"] = JSON.stringify(this.getPhotoposts());
      //main.logIn("cat");
    },
        editPost(id, post){
            if(hPosts.edit(id,post)){
                View.editPost(id, post);
                this.save();
                return true;
            }
            return false;
        },
        createPage(){ 
            hPosts.getPage(0,hPosts.getPostsCount() -1).forEach(element => {
                View.showPost(element);
            });
        },

        logIn(username){
            this.userName = username;
        },
    
        // editPost(id, post){
        //     if(hPosts.edit(id,post)){
        //         View.editPost(id, post);
        //         return true;
        //     }
        //     return false;
        // },

 addPhotoPost(post) {     
        if (hPosts.add(post)){      
            this.getPhotos({});        
            return true;        
        }         return true;
        return false;      
         }
     }
  
}());
if(localStorage["postList"]===undefined)
localStorage.setItem("postList","a");
pager.start();
pager.addPost({
    id: "4",
    name:"Minsk",
    location:" pr.Nezavisimosti 152/87a",    
    gym:"No GYM",
    stars:"3",
    wifi_zones:"4 wi-fi zones",
    hashTags:["#comfort", "#Minsk", "#Belarus"]
});
//pager.getPhotos({});
//pager.removePost("2");
//pager.getPhotos({});
//pager.editPost("1", 
//  { stars: '4', location:'boo',}  ); 
pager.getPhotos({});