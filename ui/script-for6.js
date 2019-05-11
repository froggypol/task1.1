
let pager = (function(){
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
            },
        setPosts(posts){
            hPosts = new hotelCollection(posts);
            this.createPage();
        },

         addPost(post) {
        if (hPosts.add(post)){
            this.getPhotos({});
            return true;
        }
        return false;
    },
    getPhotos(filterConfig, skip = 0, top = 10){
        //View.clear();
        let result = hPosts.getPage(filterConfig, skip = 0, top = 10);
        for(let i = 0; i<result.length; i++)
            View.showPhotos(result[i]);
    },
        createPage(){ 
            hPosts.getPage(0,hotelCollection.getPostsCount() -1).forEach(element => {
                pageView.showPost(element);
            });
        },
        removePost(id){
            if(hPosts.remove(id)){
                pageView.removePost(id);
                return true;
            }
            return false;
        },
        editPost(id, post){
            if(hPosts.edit(id,post)){
                pageView.editPost(id, post);
                return true;
            }
            return false;
        },
        createPage(){ 
            hPosts.getPage(0,hPosts.getPostsCount() -1).forEach(element => {
                pageView.showPost(element);
            });
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