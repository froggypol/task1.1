class hotelCollection {
    constructor(posts){
        this._posts = posts;
        this.setPosts = function(posts){
        	this._posts = posts;
        };
        
    }

  getPosts(){
      	return this._posts;
        }

 getPage(filterConfig, skip = 0, top = 5, ){
 	if(typeof(skip)==="object"){
 		filterConfig = skip;
 		skip = 0;
 	}
 	if(typeof(top)==="object"){
 		filterConfig = top;
 		top = 5;
 	}
 		if(Number.isNaN(top)||top === 0){
 		top = 5;
 	}
let res = [];
    res = this.getPosts().slice(skip, skip + top);
    res = res.sort(function compareStars(a, b){return a.stars - b.stars});
    //if(Object.keys(filterConfig).length>0){
      //if(filterConfig!==undefined){//?
       if (filterConfig.hasOwnProperty('city')) {
      res = res.filter(post => post.name === filterConfig.city);
    }
    if (filterConfig.hasOwnProperty('hashTags')) {
        for (let i = 0; i < filterConfig.hashTags.length; ++i) {
          res = res.filter(post => post.hashTags.find(post => 
          	post.toLowerCase() === filterConfig.hashTags[i].toLowerCase()));
        }
    }
//}
    return res;
    }

    _validate(hotelPost) { 
    if (hotelPost.name === '' ) return false;
    if (hotelPost.location === '' )return false;
    if (hotelPost.gym === "")return false; 
    if (hotelPost.stars === '') return false;
    if (hotelPost.wifi_zones === '') return false; 
     return true; 
    }    
    edit(id, photoPost){
        let post = this._get(id);
        let ar = this.getPosts();
        if(this._validate(post) == true){
        for(let key in photoPost){
            post[key] = photoPost[key];
        }
        this.getPosts().sort(function compareDates(a, b){return a.stars - b.stars});
        return true;
    }
    return false;
    }

    /* remove(id){
        let post = this.get(id);
        if(post !== undefined){
            let index = this.getPosts().indexOf(post);
            this.getPosts().splice(index, 1);
            return true;
        }
        return false;
    }*/

     add(post){
        let oldPost = this.getPosts();
        if(this._validate(post) && this._containPost(post)==false){
            oldPost.push(post);
            oldPost.sort(function compareStars(a, b){return a.stars - b.stars})
           	this.setPosts(oldPost);
            return true;
        }
        else return false;
    }
    _containPost(post){
    	let myPosts = this.getPosts();
    	for(let i = 0 ; i < myPosts.length;i++){
    		if(myPosts[i].name==post.name)
    			return true;
    	}
    	return false;
    }
     clear(){
        let array = this.getPosts();
        while (array.length > 0) {
            this.remove(array.pop())
        }
    }
    getPostsCount(){
        return this.getPosts().length + 1;
    }
    getPostPosition(post){
        for (let index = 0; index < this.getPosts().length; index++) {
            const element = this.this.getPosts()[index];
            if(post.createdAt < element.createdAt)
                return index - 1;
        };
        return -1;
    }
     remove(id){
        let post = this._get(id);
        if(post !== undefined){
            let index = this.getPosts().indexOf(post);
            this.getPosts().splice(index, 1);
            return true;
        }
        return false;
	}
	_get(id){
		let posts = this.getPosts();
		for(let i = 0; i < posts.length; i++){
			if(posts[i].id==id)
				return posts[i];
		}
	}
}