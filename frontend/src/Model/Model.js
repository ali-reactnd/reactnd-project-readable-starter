import RandomString from "randomstring";

export class Category {
    constructor(name, path){
        this.name = name;
        this.path = path;
    }
}

export class Content {
    constructor(id, timestamp, body, author, voteScore, deleted){
        this.id = id;
        this.timestamp = timestamp;
        this.body = body;
        this.author = author;
        this.voteScore = voteScore;
        this.deleted = deleted;
    }

    edit(body, author){
        this.body = body;
        this.author = author;
    }

    remove(){ this.deleted = true; }
    upVote(){ this.voteScore += 1; }
    downVote(){ this.voteScore -= 1; }
} 

export class Post extends Content {
    constructor(id, timestamp, title, body, author, category, voteScore, deleted, commentCount){
        super(id, timestamp, body, author, voteScore, deleted);
        this.title = title;
        this.category = category;
        this.commentCount = commentCount;
    }
}

export class Comment extends Content {
    constructor(id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted){
        super(id, timestamp, body, author, voteScore, deleted);
        this.parentId = parentId;
        this.parentDeleted = parentDeleted;
    }
}

export class ContentFactory {

    static initVoteScore () {
        return 1;
    }

    static initDeleted(){
        return false;
    }

    static genUniqueID() {
        return RandomString.generate(22);
    }

    static genTimeStamp() {
        return Date.now();
    }

    static makeNewPost(title, body, author, category) {
        return new Post(this.genUniqueID(), this.genTimeStamp(), title, body, author, category, this.initVoteScore(), this.initDeleted(), 0);
    }

    // NOTE: the comment count on the post associated to the comment is NOT modified.
    static makeNewComment(parentId, body, author) {
        return new Comment(this.genUniqueID(), parentId, this.genTimeStamp(), body, author, this.initVoteScore(), this.initDeleted(), false);
    }
}