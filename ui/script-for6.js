
let pager = (function(){
   let userName = "";
   let hPosts = new hotelCollection([
{

    id: "2",
    name:"Beijin",
    location:"Gleab",    
    gym:"ADD Great Day",
    stars:"3",
    wifi_zones:"sss",
    hashTags:["#cool", "#comfort", "#relax"],
}
]);

    return {

        getUserName(){
            return this.userName;
        },

        setPageUser(){
            // pageView = new View(user);
            View._setUser();
            },
        setPosts(posts){
            hPosts = new hotelCollection(posts);
            this.createPage();
        },

         addPost(post) {
        if (hPosts.add(post)){
           // this.getPhotos({});
            return true;
        }
        return false;
    },
        getPhotos(filterConfig, skip = 0, top = 10){
        //View.clear();
        let result = hPosts.getPage(filterConfig, skip = 0, top = 10);
        for(let i = 0; i<result.length; i++)
            View.showPost(result[i]);
    },
        createPage(){ 
            hPosts.getPage(0,hotelCollection.getPostsCount() -1).forEach(element => {
                View.showPost(element);
            });
        },
        removePost(id){
            if(hPosts.remove(id)){
                View.removePost(id);
                return true;
            }
            return false;
        },
        editPost(id, post){
            if(hPosts.edit(id,post)){
                View.editPost(id, post);
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
    
        editPost(id, post){
            if(hPosts.edit(id,post)){
                View.editPost(id, post);
                return true;
            }
            return false;
        },
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
pager.logIn("psoudf");
pager.addPost({
    id: "1",
    name:"Astoria",
    location:"Gleb",    
    gym:"ADD Great Day",
    stars:"4",
    wifi_zones:"sss",
    hashTags:["#cool", "#comfort", "#relax"]
}
    );
 pager.addPost({
    id: "3",
    name:"Rennessans",
    location:"Gleb",    
    gym:"ADD Great Day",
    stars:"5",
    wifi_zones:"sss",
    hashTags:["#cool", "#comfort", "#relax"]
    }); 
 pager.addPost({
    id: "2",
    name:"Beijin",
    location:"Gleab",    
    gym:"ADD Great Day",
    stars:"3",
    wifi_zones:"sss",
    hashTags:["#cool", "#comfort", "#relax"], 
    }); 
// pager.getPhotos({});
 pager.removePost("1");
// pager.getPhotos({});
pager.editPost("2", 
    { stars: '4', location:'boo',}  ); 
pager.getPhotos({});