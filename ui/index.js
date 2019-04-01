const storage = (function(){
let hotelPosts =[
{
    id: '1',
    stars: '4',
    description: 'god hotel',
    author:'Renessans Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Minsk',
    wifi_zones:'5'
},
{
    id: '2',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Astoria Hotel',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'13'
},
{
    id: '3',
    stars: '4',
    description: 'Hotel in picturesque place of Minsk',
    author:'Beijin Hotel',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Minsk',
    wifi_zones:'4'
},
{
    id: '4',
    stars: '3',
    description: 'Hotel with good staff',
    author:'Minsk Hotel',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Minsk',
    wifi_zones:'2'

},
{
    id: '5',
    stars: '3',
    description: 'Hotel in Grodno',
    author:'Grodno_tourist',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Grodno',
    wifi_zones:'1'
},

{
    id: '6',
    stars: '2',
    description: 'Hotel in Belgorod',
    author:'Belgorod Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Belgorod',
    wifi_zones:'0'
},
{
    id: '7',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5'
},
{
    id: '8',
    stars: '4',
    description: 'Vitebsk_home',
    author:'Vitebsk_tourism',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Vitebsk',
    wifi_zones:'8'
},
{
    id: '9',
    stars: '2',
    description: 'Hotel with good staff in Brest',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Brest',
    wifi_zones:'3'
},
{
    id: '10',
    stars: '2',
    description: 'Hotel in Mogilev',
    author:'Trip.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Mogilev',
    wifi_zones:'1'
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
validatePost:function(hotelPost){
      if (!hotelPost.hasOwnProperty('description')
        || !hotelPost.hasOwnProperty('wifi_zones')
        || !hotelPost.hasOwnProperty('author')
        || !hotelPost.hasOwnProperty('photoLink')
        || !hotelPost.hasOwnProperty('id')
        || !hotelPost.hasOwnProperty('city')
        || !hotelPost.hasOwnProperty('stars')
        ) return false;
        if (typeof hotelPost.description !== 'string'
        || typeof hotelPost.author !== 'string'
        || typeof hotelPost.photoLink !== 'string'
        || typeof hotelPost.city !== 'string'
        ||typeof hotelPost.stars !== 'string'
        || typeof hotelPost.id !== 'string'
        || typeof hotelPost.wifi_zones !== 'string'
      ) return false;

return  true;
},
addHotel:function(hotel){
    if(this.validatePost(hotel)===true){
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
            if(hotel !== undefined){
                var index =hotelPosts.indexOf(hotel);
                hotelPosts.splice(index, 1);
            }
}
}
})();
console.log(storage.getHotel('1'));
console.log(storage.getHotelArray(0, 10));
console.log(storage.getHotelArray(5, 5));
console.log(storage.getHotelForCity('Minsk', 0, 10));
console.log(storage.validatePost({
    id: 'kkk',
    stars: '2',
    description: 'Hotel with good staff in Brest',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Brest',
    wifi_zones:'3'
}));
console.log(storage.addHotel({
    id: '11',
    stars: '4',
    description: 'Hotel in the heart of Mogilev',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Mogilev',
    wifi_zones:'15'
}));
console.log(storage.getHotel('2'));
console.log(storage.editHotelPost('2',{description: 'new description' }));
console.log(storage.getHotel('2'));
console.log(storage.removeHotel('1'));
console.log(storage.getHotelArray(0, 10));
