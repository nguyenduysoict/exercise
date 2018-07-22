import { Post } from './post';
import { Account } from './account';

export class AccountService {

    loggedIn: boolean;
    loggedPost: boolean;
    indexAccount: number;
    accounts: Account[] = [
        new Account(
            'admin',
            'admin',
            [],
            'https://www.atomix.com.au/media/2015/06/atomix_user31.png'
        )
    ];


    showAcc() {
        console.log(this.accounts);
    }

    addAccount(acc: Account) {
        this.accounts.push(acc);
    }

    findAccount(username: string, password: string) {
        for (this.indexAccount = 0; this.indexAccount < this.accounts.length; this.indexAccount++) {
            const element = this.accounts[this.indexAccount];
            if (username === element.username && password === element.password) {
                this.loggedIn = true;
                break;
            } else {
                this.loggedIn = false;
            }
        }
    }

    getAccountId = () => {
        return this.accounts[this.indexAccount].username;
    }

    getAccountPicture = () => {
        return this.accounts[this.indexAccount].picturePath;
    }

    checkLogPost = (post: Post) => {
        if (this.accounts[this.indexAccount].logPost.length === 0) {
            return this.loggedPost = false;
        } else {
            for (let index = 0; index < this.accounts[this.indexAccount].logPost.length; index++) {
                const temp = this.accounts[this.indexAccount].logPost[index].id;
                console.log(temp);
                if (post.id === temp) {
                    this.loggedPost = true;
                    break;
                } else {
                    this.loggedPost = false;
                    console.log('vao false');
                }
            }
        }

    }

    getLogPost = () => {
        return this.accounts[this.indexAccount].logPost;
    }

    addLogPost = (post: Post) => {
        this.accounts[this.indexAccount].logPost.push(post);
        console.log(this.accounts[this.indexAccount].logPost);
    }

    removeLogPost = (post: Post) => {
        for (let index = 0; index < this.accounts[this.indexAccount].logPost.length; index++) {
            const temp = this.accounts[this.indexAccount].logPost[index].id;
            if (post.id === temp) {
                this.accounts[this.indexAccount].logPost.splice(index, 1);
            }
        }
        console.log(this.accounts[this.indexAccount].logPost);
    }
}
