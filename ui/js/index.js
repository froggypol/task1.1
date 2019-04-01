(function(){
let hotelPosts =[
{
    id: '1',
    stars: '4',
    desription: 'Renessans Hotel',
    createdAt:new Date ('2019-01-01T22:20:00'),
    author:'?',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg'
},
{
    id: '2',
    stars: '5',
    desription: 'Astoria Hotel',
    createdAt:new Date ('2019-01-01T22:15:00'),
    author:'Astoria-piter',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg'
},{
    id: '3',
    stars: '4',
    desription: 'Beijin Hotel',
    createdAt:new Date ('2019-01-01T22:22:00'),
    author:'Beijin-Minsk',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg'
},
function getPhotoPosts(skip,top=''){
    var hotel1=new Array();
    let j=false;
    for (var i=0;i< hotelPosts.length;i++){
        hotel1.push(photoPosts[i]);
    }
     hotel1.sort(function(a,b){return a.stars - b.stars});
    else{
            hotel1 = hotel1.filter(function(element){
           if (element.author==filterConfig.author) 
           return true ;
           else return false;
            });
        }
        var hotel=hotel1.slice(skip,skip+top);
        return photoHotel;
    }
 function getPhotoPost(id){
       for(let i=0;i<hotelPosts.length;i++){
           if (photoPosts[i].id==id){
               return photoPosts[i];
           }
        }
    }
];
