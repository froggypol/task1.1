class hotelList{

constructor(photoPosts) {
this._photoPosts = photoPosts.filter(post=>PostCollection.validate(post));
this._sortPostsByDate = function compare(left, right) {	 
            return right.createdAt - left.createdAt;	  
        }	
}
	static _isCorrectHashtags(array){	
        if(Array.isArray(array)){	
            if(Array.prototype.every.call(array,item=>(typeof(item) == 'string')&& (item.charAt(0) === '#') )){	
                return true;	
            }	
        }	
        return false;	
    };	

     static _isCorrectLikes(array){	
        if(Array.isArray(array)){	
            if(Array.prototype.every.call(array,item=>(typeof(item) == 'string'))){	
                return true;	
            }	
        }	
        return false;	
    };
}