export class Post {
    constructor(
        public id: string,
        public title: string,
        public tag: string,
        public content: string,
        public mainContent: string,
        public author: string,
        public imgPath: string,
        public likeCount: number,
        public shareCount: number
    ) {
        this.id = id;
        this.title = title;
        this.tag = tag;
        this.content = content;
        this.mainContent = mainContent;
        this.author = author;
        this.imgPath = imgPath;
        this.likeCount = likeCount;
        this.shareCount = shareCount;

    }

}
