class hotelList{
	_hotels;
	 constructor(hotelList = []) { 
    this._hotels = hotelList.slice(); 
    } 
    clear() { 
    this._hotels = []; 
    } 
    get(id) { 
    if (typeof id !== "string") { 
    console.log("incorrectt arguments"); 
    return undefined; 
    } 
    var num = Number.parseInt(id, 10); 
    var found = hotelPosts.find(function (element) { 
    return element.id === id; 
    }) 
    if (!found) { 
    console.log("no such element with id"); 
    return undefined; 
    } 
    return found; 
    } 
}
    let hotelPosts =[
{
    id: '1',
    stars: '4',
    description: 'god hotel',
    author:'Renessans Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Minsk',
    wifi_zones:'5',
    hashtags: ["#Minsk", "#Belarus", "#travel"]
},
{
    id: '2',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Astoria Hotel',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'13',
    hashtags: ["#Petersburg", "#Russia", "#freetime"]
},
{
    id: '3',
    stars: '4',
    description: 'Hotel in picturesque place of Minsk',
    author:'Beijin Hotel',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Minsk',
    wifi_zones:'4',
    hashtags: ["#Minsk", "#Belarus", "#modern"]
},
{
    id: '4',
    stars: '3',
    description: 'Hotel with good staff',
    author:'Minsk Hotel',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Minsk',
    wifi_zones:'2',
    hashtags: ["#Minsk", "#Belarus", "#travel"]

},
{
    id: '5',
    stars: '3',
    description: 'Hotel in Grodno',
    author:'Grodno_tourist',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Grodno',
    wifi_zones:'1',
    hashtags: ["#Grodno", "#Belarus", "#comfort"]
},

{
    id: '6',
    stars: '2',
    description: 'Hotel in Belgorod',
    author:'Belgorod Hotel',
    photoLink: 'http://congressminsk.by/wp-content/uploads/sites/4/2014/11/34012151.jpg',
    city:'Belgorod',
    wifi_zones:'0',
    hashtags: ["#Belgorod", "#Russia", "#hotel"]
},
{
    id: '7',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: ["#Petersburg", "#Russia", "#travel"]
},
{
    id: '8',
    stars: '4',
    description: 'Vitebsk_home',
    author:'Vitebsk_tourism',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Vitebsk',
    wifi_zones:'8',
    hashtags: ["#Vitebsk", "#Belarus", "#homeland"]
},
{
    id: '9',
    stars: '2',
    description: 'Hotel with good staff in Brest',
    author:'Traveler.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Brest',
    wifi_zones:'3',
    hashtags: ["#Brest", "#Belarus", "#enjoy"]
},
{
    id: '10',
    stars: '2',
    description: 'Hotel in Mogilev',
    author:'Trip.com',
    photoLink: 'https://exp.cdn-hotels.com/hotels/17000000/16320000/16310400/16310370/1292bd4f_z.jpg',
    city:'Mogilev',
    wifi_zones:'1',
    hashtags: ["#Mogilev", "#Belarus", "#city"]
}
];
 let test = new hotelList(hotelPosts);
 console.log(test.get("10"));  
