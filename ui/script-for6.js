
let pager = (function(){
<<<<<<< HEAD
   let hPosts = new hotelCollection([
{
    id: '1',
    stars: '4',
    description: 'god hotel',
    author:'Renessans Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Minsk',
    wifi_zones:'5',
    hashtags: ["#Minsk", "#Belarus", "#travel"]
}]);
    return {
        setPageUser(user){
            pageView = new View(user);
=======
   let userName = "";
   let hPosts = new hotelCollection([]);

    return {
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
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
            this.getPhotos({});
=======
           // this.getPhotos({});
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
>>>>>>> 797fa673a64887dbd94c1184611c5cd231051f2d
            return true;
        }
        return false;
    },
<<<<<<< HEAD
    getPhotos(filterConfig, skip = 0, top = 10){
        //View.clear();
        let result = hPosts.getPage(filterConfig, skip = 0, top = 10);
        for(let i = 0; i<result.length; i++)
            View.showPhotos(result[i]);
    },
        createPage(){ 
            hPosts.getPage(0,hotelCollection.getPostsCount() -1).forEach(element => {
                pageView.showPost(element);
=======
        getPhotos(filterConfig, skip = 0, top = 10){
        View.clear();
        let result = hPosts.getPage(filterConfig, skip = 0, top = 10);
        for(let i = 0; i<result.length; i++)
            View.showPost(result[i]);
    },
        createPage(){ 
            hPosts.getPage(0,hotelCollection.getPostsCount() -1).forEach(element => {
                View.showPost(element);
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
            });
        },
        removePost(id){
            if(hPosts.remove(id)){
<<<<<<< HEAD
                pageView.removePost(id);
=======
                View.removePost(id);
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
                return true;
            }
            return false;
        },
        editPost(id, post){
            if(hPosts.edit(id,post)){
<<<<<<< HEAD
                pageView.editPost(id, post);
=======
                View.editPost(id, post);
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
                return true;
            }
            return false;
        },
        createPage(){ 
            hPosts.getPage(0,hPosts.getPostsCount() -1).forEach(element => {
<<<<<<< HEAD
                pageView.showPost(element);
            });
        },
=======
                View.showPost(element);
            });
        },

        logIn(username){
            this.userName = username;
        },
    
        editPost(id, post){
            if(hPosts.edit(id,post)){
                View.editPost(id, post);
                return true;
            }
            return false;
        },
<<<<<<< HEAD

 addPhotoPost(post) {     
        if (hPosts.add(post)){      
            this.getPhotos({});        
            return true;        
        }         return true;
        return false;      
         },
  
    }
}());
//pager.logIn("psoudf");
=======
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    }
}());

 //pager.setPageUser("Gleb");
//pager.setPosts( [
//     {id: '1',
//     description: 'Great Day',
//     createdAt: new Date('2005-10-20T23:00:00'),
//     author: 'Ivanov',
//     photoLink: 'Minsk.JPG',
//     likes : ["Petrov","Sidorov"],
//     hashTags : ["#sunny"]
//    },

 //    {id: '2',
//     description: 'Me and my friends',
//     createdAt: new Date('2016-01-23T23:15:00'),
//     author: 'Petrov',
//     photoLink: 'Minsk.JPG',
//     likes : ["Grealish","Sidorov"],
//     hashTags : ["#MU","#WIN","#HardWay","#roadtofinal","#goodluck"]
//    },

 //    {id: '4',
//     description: 'Great Player',
//     createdAt: new Date('2001-03-12T11:11:00'),
//     author: 'Gleb',
//     photoLink: 'Minsk.JPG',
//     likes : ["Petrov","Grealish","Sidorov","Snow"],
//     hashTags : ["#color"]

 //    }]);
<<<<<<< HEAD
pager.addPost({
name: "5",
location:"Gleb",
gym:"ADD Great Day",
stars:"Minsk2.JPG",
wifi_zones:"sss"});
//pager.removePost("5")
//pager.editPost("4", {id: '4',
//     description: 'Great Player',
//     createdAt: new Date('2001-03-12T11:11:00'),
//     author: 'Gleb',
//     photoLink: 'Minsk2.JPG',
//     likes : ["Petrov","Grealish","Sidorov","Snow"],
//     hashTags : ["#color", "#my city"]
//    }); 
=======
pager.logIn("psoudf");
>>>>>>> 797fa673a64887dbd94c1184611c5cd231051f2d
pager.addPost({
    id: "1",
    name:"Astoria",
    location:"Gleb",    
    gym:"ADD Great Day",
    stars:"4",
    wifi_zones:"7 wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"]
}
    );
pager.addPost({

    id: "2",
    name:"Beijin",
    location:"Nezavisimosti 5",    
    gym:"No GYM",
    stars:"3",
    wifi_zones:"No wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"],
});
 pager.addPost({
    id: "3",
    name:"Rennessans",
    location:"Nekrasova street 221/7a",    
    gym:"5 GYMs",
    stars:"5",
    wifi_zones:"5 wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"]
    }); 
 pager.addPost({
    id: "2",
    name:"Beijin",
    location:"pr.Pobedy 23/a",    
    gym:"ADD Great Day",
    stars:"3",
    wifi_zones:"11 wi-fi zones",
    hashTags:["#cool", "#comfort", "#relax"], 
    }); 
<<<<<<< HEAD
 pager.addPost({
    id: "4",
    name:"Minsk",
    location:" pr.Nezavisimosti 152/87a",    
    gym:"No GYM",
    stars:"3",
    wifi_zones:"4 wi-fi zones",
    hashTags:["#comfort", "#Minsk", "#Belarus"], 
    }); 
 pager.addPost({
    id: "2",
    name:"Beijin",
    location:"pr.Pobedy 23/a",    
    gym:"no GYM",
    stars:"3",
    wifi_zones:"11 wi-fi zones",
    hashTags:["#comfort", "#Minsk", "#Belarus"], 
    }); 
//pager.getPhotos({});
//pager.removePost("2");
//pager.getPhotos({});
//pager.editPost("1", 
//  { stars: '4', location:'boo',}  ); 
pager.getPhotos({});
=======
// pager.getPhotos({});
 pager.removePost("1");
// pager.getPhotos({});
pager.editPost("2", 
    { stars: '4', location:'boo',}  ); 
pager.getPhotos({});
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
>>>>>>> 797fa673a64887dbd94c1184611c5cd231051f2d
