import { Post } from './post';

export class Account {
    constructor( public username: string,
        public password: string,
        public logPost: Post[],
        public picturePath: string
        ) {
        this.username = username;
        this.password = password;
        this.logPost = logPost;
        this.picturePath = picturePath;
    }
}
