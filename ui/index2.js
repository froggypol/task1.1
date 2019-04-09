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
    remove(id) { 
    if (typeof id !== "string") { 
    console.log("incorrectt arguments"); 
    return undefined; 
    } 
    if (!this.get(id)) { 
    console.log("no such element with id"); 
    return false; 
    } 
    const remIndex = hotelPosts.indexOf(this.get(id)); 
    hotelPosts.splice(remIndex, 1); 
    return true; 
    } 
    static validate(hotelPost) { 
    if (!hotelPost) { 
    return false; 
    } 
    if (!('wifi_zones' in hotelPost && 'hashtags' in hotelPost && 'author' in hotelPost && 'photoLink' in hotelPost && 'city' in hotelPost && 'id' in hotelPost && 'description' in hotelPost && 'stars' in hotelPost)) { 
    return false; 
    } 
    if (hotelPost.id === '' || typeof hotelPost.id !== 'string') { 
    return false; 
    } 
    if (hotelPost.description === '' || typeof hotelPost.description !== 'string' || hotelPost.description.length > 200) { 
    return false; 
    } 
    if (!(hotelPost.city !== 'string') || hotelPost.city === "") { 
    return false; 
    } 
    if (hotelPost.author === '' || typeof hotelPost.author !== 'string') { 
    return false; 
    } 
    if (hotelPost.photoLink === '' || typeof hotelPost.photoLink !== 'string') { 
    return false; 
    }
    if (hotelPost.wifi_zones === '' || typeof hotelPost.wifi_zones !== 'string') { 
    return false; 
    }
    if (hotelPost.stars === '' || typeof hotelPost.stars !== 'string') { 
    return false; 
    } 
    if (hotelPost.hashtags === null) { 
    return false; 
    } 
    return true; 
    }    
    add(hotelPost) { 
    if (!hotelList.validate(hotelPost)) { 
    return false; 
    } 
    hotelPost.id = "" + (hotelPosts.length + 1); 
    hotelPosts.push(hotelPost); 
    return true; 
    } 
    
    edit(id, hotelPost) { 
    if (!this.get(id)) { 
    return false; 
    } 
    let obj = this.get(id); 
    if ('hashtags' in hotelPosts) { 
    obj.hashTags = hotelPost.hashTags; 
    } 
    if ('photoLink' in hotelPosts) { 
    obj.photoLink = hotelPosts.photoLink; 
    } 
    if ('description' in hotelPost) { 
    obj.description = hotelPost.description; 
    } 
    if (!hotelList.validate(obj)) { 
    return false; 
    } 
    this.get(id) === obj; 
    return true; 
    } 
     static _checkObject(post) { 
    return !!post; 
    }   
    getPage(skip = 0, top = 10, filterConfig = {}) { 
    let foundPosts = this._hotels.sort((post1, post2) => post2.stars- post1.stars); 
    if (filterConfig) { 
    if (Object.prototype.hasOwnProperty.call(filterConfig, 'city')) { 
    foundPosts = foundPosts.filter(post => post.city.includes(filterConfig.city)); 
    } 
    else if (Object.prototype.hasOwnProperty.call(filterConfig, 'hashtags')) { 
    if (filterConfig.hashtags.length !== 0) { 
    foundPosts = foundPosts.filter((post) => { 
    for (let i = 0; i < filterConfig.hashtags.length; i++) { 
    for (let j = 0; j < post.hashtags.length; j++) { 
    if (post.hashtags[j] === filterConfig.hashtags[i]) { 
    return true; 
    } 
    } 
    } 
    return false; 
    }); 
    } 
    } 
    } 
    foundPosts = foundPosts.slice(skip, skip + top); 
    if (hotelList._checkObject(foundPosts) && foundPosts.length !== 0) { 
    return foundPosts; 
    }   
    return null; 
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
console.log(test.get("1"));
console.log(test.remove("1"));
console.log(hotelList.validate({id: '7',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: ["#Petersburg", "#Russia", "#travel"]
}));
console.log(hotelList.validate({id: '7',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: null
}));
console.log(hotelList.validate({id: '',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: ["#Petersburg", "#Russia", "#travel"]
}));
console.log(test.add({id: '',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: ["#Petersburg", "#Russia", "#travel"]
}));
console.log(test.add({id: '11',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: null
}));
console.log(test.add({id: '11',
    stars: '5',
    description: 'Hotel in St.Petersburg',
    author:'Peter Hotel*****',
    photoLink: 'https://fotex.biz/images/foto/7812005010.jpg',
    city:'St.Petersburg',
    wifi_zones:'5',
    hashtags: ["#Petersburg", "#Russia", "#travel"]
}));
console.log(test.get("9"));
console.log(test.edit("9", {description: 'new description'}));
console.log(test.get("9"));
console.log(test.getPage(5, 10));
console.log(test.getPage(0, 10, {city:"Minsk"}));
console.log(test.getPage(0, 10,
{hashtags: ["#Petersburg", "#Russia", "#travel"]}));