const storage = (function(){
let hotelPosts =[
{
<<<<<<< HEAD
    id: '1',
=======
    name: '1',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '4',
    description: 'god hotel',
    author:'Renessans Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Minsk',
    wifi_zones:'5',
    hashtags: ["#Minsk", "#Belarus", "#travel"]
},
{
<<<<<<< HEAD
    id: '2',
=======
    name: '2',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Astoria Hotel',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'13',
    hashtags: ["#Petersburg", "#Russia", "#freetime"]
},
{
<<<<<<< HEAD
    id: '3',
=======
    name: '3',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '4',
    description: 'Hotel in picturesque place of Minsk',
    author:'Beijin Hotel',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Minsk',
    wifi_zones:'4',
    hashtags: ["#Minsk", "#Belarus", "#modern"]
},
{
<<<<<<< HEAD
    id: '4',
=======
    name: '4',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '3',
    description: 'Hotel with good staff',
    author:'Minsk Hotel',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Minsk',
    wifi_zones:'2',
    hashtags: ["#Minsk", "#Belarus", "#travel"]

},
{
<<<<<<< HEAD
    id: '5',
=======
    name: '5',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '3',
    description: 'Hotel in Grodno',
    author:'Grodno_tourist',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Grodno',
    wifi_zones:'1',
    hashtags: ["#Grodno", "#Belarus", "#comfort"]
},

{
<<<<<<< HEAD
    id: '6',
=======
    name: '6',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '2',
    description: 'Hotel in Belgorod',
    author:'Belgorod Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Belgorod',
    wifi_zones:'0',
    hashtags: ["#Belgorod", "#Russia", "#hotel"]
},
{
<<<<<<< HEAD
    id: '7',
=======
    name: '7',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: ["#Petersburg", "#Russia", "#travel"]
},
{
<<<<<<< HEAD
    id: '8',
=======
    name: '8',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '4',
    description: 'Vitebsk_home',
    author:'Vitebsk_tourism',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Vitebsk',
    wifi_zones:'8',
    hashtags: ["#Vitebsk", "#Belarus", "#homeland"]
},
{
<<<<<<< HEAD
    id: '9',
=======
    name: '9',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '2',
    description: 'Hotel with good staff in Brest',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Brest',
    wifi_zones:'3',
    hashtags: ["#Brest", "#Belarus", "#enjoy"]
},
{
<<<<<<< HEAD
    id: '10',
=======
    name: '10',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '2',
    description: 'Hotel in Mogilev',
    author:'Trip.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Mogilev',
    wifi_zones:'1',
    hashtags: ["#Mogilev", "#Belarus", "#city"]
}
];
return{
getHotel :function(id){
       for(let i=0;i<hotelPosts.length;i++){
           if (hotelPosts[i].id==id){
               return hotelPosts[i];
           }
       }
        },
getHotelArray: function(skip = 0, top = 10) {
    var photoHotels=new Array();
    var result=new Array();
    for (var i=0;i<hotelPosts.length;i++){
        photoHotels.push(hotelPosts[i]);
    }
     photoHotels.sort(function(a,b){return a.stars - b.stars});
        result = photoHotels.slice(skip, skip+top);
        return result;
    },
getHotelForCity:function(filterConfig = '' , skip = 0, top = 10 ){
    var photoHotels=new Array();
    var result=new Array();
    for (var i=0;i<hotelPosts.length;i++)
        photoHotels.push(hotelPosts[i]);
   if(filterConfig=='') {
     photoHotels.sort(function(a,b){return a.stars - b.stars});
        result = photoHotels.slice(skip, skip+top);
    }
    else{
        for(let i = 0; i < photoHotels.length ;  i++){
    if(photoHotels[i].city==filterConfig)
    result.push(photoHotels[i]);
    }  
    result.sort(function(a,b){return a.stars - b.stars});
}
return result;
},
getHotelForName:function(filterConfig = ''){
        for(let i = 0; i < hotelPosts.length ;  i++){
    if(hotelPosts[i].name==filterConfig)
    return true;
    }  
    return false;
},
validatePost:function(hotelPost){
      if (!hotelPost.hasOwnProperty('description')
        || !hotelPost.hasOwnProperty('wifi_zones')
        || !hotelPost.hasOwnProperty('author')
        || !hotelPost.hasOwnProperty('photoLink')
        || !hotelPost.hasOwnProperty('id')
        || !hotelPost.hasOwnProperty('city')
        || !hotelPost.hasOwnProperty('stars')
          || !hotelPost.hasOwnProperty('hashtags')
        ) return false;
        if (typeof hotelPost.description !== 'string'
        || typeof hotelPost.author !== 'string'
        || typeof hotelPost.photoLink !== 'string'
        || typeof hotelPost.city !== 'string'
        ||typeof hotelPost.stars !== 'string'
        || typeof hotelPost.id !== 'string'
        || typeof hotelPost.wifi_zones !== 'string'
        || !Array.isArray(hotelPost.hashtags)
        ) return false;

return  true;
},
addHotel:function(hotel){
    if(this.validatePost(hotel)===true && this.getHotelForName(hotel.name)===false){
        hotelPosts.push(hotel);
        return true;
    }
    else
        return false;
},
editHotelPost:function(id, toEdit){
    let hotel = this.getHotel(id);
        if(this.validatePost(hotel)==true){
            hotel.description = toEdit;
            return true;
        }
        else
            return false;
},
removeHotel: function(id){
            let hotel = this.getHotel(id);
            var index;
            if(hotel !== undefined){
                index = hotelPosts.indexOf(hotel);
                hotelPosts.splice(index, 1);
                return true;
            }
            return false;
}
}
})();
console.log(storage.getHotel('1'));
console.log(storage.getHotelArray(0, 10));
console.log(storage.getHotelArray(5, 5));
console.log(storage.getHotelForCity('Minsk', 0, 10));
console.log(storage.validatePost({
    id: '1',
    stars: '2',
    description: 'Hotel with good staff in Brest',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Brest',
    wifi_zones:'3',
    hashtags: ["#hello", "#traveller"]
}));

console.log(storage.addHotel({
<<<<<<< HEAD
     id: '1',
=======
    id: '1',
>>>>>>> a394426aef7519bbb951836c2f8487227af7b5f9
    stars: '2',
    description: 'Hotel with good staff in Brest',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Brest',
    wifi_zones:'3',
    hashtags: ["#hello", "#Belarus", "#Minsk", "#traveller"]
}));
console.log(storage.getHotel('jjj'));
console.log(storage.editHotelPost('2',{description: 'new description' }));
console.log(storage.getHotel('6'));
console.log(storage.removeHotel('6'));