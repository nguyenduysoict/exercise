export class Post {
    public title: string;
    public tag: string;
    public content: string;
    public imgPath: string;
    public likeCount: number;
    public shareCount: number;

    constructor(title: string, tag: string,
        content: string, imgPath: string, likeCount: number, shareCount: number) {
        this.title = title;
        this.tag = tag;
        this.content = content;
        this.imgPath = imgPath;
        this.likeCount = likeCount;
        this.shareCount = shareCount;

    }

}
