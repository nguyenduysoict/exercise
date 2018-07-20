export class Post {
    constructor(public id: string,
        public title: string,
        public tag: string,
        public content: string,
        public imgPath: string,
        public likeCount: number,
        public shareCount: number) {
        this.title = title;
        this.tag = tag;
        this.content = content;
        this.imgPath = imgPath;
        this.likeCount = likeCount;
        this.shareCount = shareCount;

    }

}
