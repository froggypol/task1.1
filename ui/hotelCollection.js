class hotelCollection{
    constructor(posts){
        let _posts = posts;
        this.setPosts = function(posts){
        	_posts = posts;
        };
        this.getPosts = function(){
        	return _posts;
        };
    }
 getPage(skip = 0, top = 5, filterConfig={}){
 	if(typeof(skip)==="object"){
 		filterConfig = skip;
 		skip = 0;
 	}
 	if(typeof(top)==="object"){
 		filterConfig = top;
 		top = 5;
 	}
 		if(Number.isNaN(top)){
 		top = 5;
 	}
//?????????????????????????????????????????????????????
let res = [];
    res = this.getPosts().slice(skip, skip + top);
//????????????????????????????????????????????
    res.sort(function compareStars(a, b){return a.stars - b.stars})
    if(filterConfig !== ''){
        res = res.filter(function(element){
            for(let key in filterConfig){
                switch (key) {
                    case 'name':
                    if(element.name === filterConfig.name) return true;
                    break;
                    case 'location':
                    if(element.location === filterConfig.location) return true;
                    break;
                    case 'wifi_zones':
                     if(element.wifi_zones === filterConfig.wifi_zones) return true;
                    break;
                    case 'stars':
                    if(element.stars === filterConfig.stars) return true;
                    break;
                    case 'gym':
                     if(element.gym === filterConfig.gym) return true;
                    break;
                    default:
                        return false;
                }
            }
        });
    }
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

   /*  edit(id, photoPost){
        let post = this.get(id);
        if(PostCollection._validate(post) == true){
        for(let key in photoPost){
            post[key] = photoPost[key];
        }
        this.getPosts().sort(function compareDates(a, b){return a.createdAt - b.createdAt});
        return true;
    }
    return false;
    }*/

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
        if(this._validate(post) === true){
            oldPost.push(post);
            oldPost.sort(function compareStars(a, b){return a.stars - b.stars})
            return true;
        }
        else return false;
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
            const element = this.getPosts()[index];
            if(post.createdAt < element.createdAt)
                return index - 1;
        };
        return -1;
    }
}