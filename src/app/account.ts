import { Post } from './post';

export class Account {
    constructor( public username: string,
        public password: string,
        public logPost: Post[]
        ) {
        this.username = username;
        this.password = password;
        this.logPost = logPost;
    }
}
