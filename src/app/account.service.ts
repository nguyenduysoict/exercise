import { Post } from './post';
import { Account } from './account';

export class AccountService {

    loggedIn: boolean;
    loggedPost = false;
    activeAcc: Account;
    accounts: Account[] = [
        new Account(
            'admin',
            'admin',
            []
        )
    ];


    showAcc() {
        console.log(this.accounts);
    }

    addAccount(acc: Account) {
        this.accounts.push(acc);
    }

    findAccount(username: string, password: string) {
        for (let index = 0; index < this.accounts.length; index++) {
            const element = this.accounts[index];
            if ( username === element.username && password === element.password) {
                this.loggedIn = true;
                console.log('found');
                this.activeAcc = this.accounts[index];
                break;
            } else {
                this.loggedIn = false;
            }
        }
    }

    findLogPost = (post: Post) => {
        for (let index = 0; index < this.activeAcc.logPost.length; index++) {
            const temp = this.activeAcc.logPost[index].id;
            if (post.id === temp) {
                return this.loggedPost = true;
            } else {
                this.loggedPost = false;
            }
        }
    }

    addLogPost = (post: Post) => {
        this.activeAcc.logPost.push(post);
        this.loggedPost = true;
    }

    removeLogPost = (post: Post) => {
        for (let index = 0; index < this.activeAcc.logPost.length; index++) {
            const temp = this.activeAcc.logPost[index].id;
            if (post.id === temp) {
                this.activeAcc.logPost.splice(index, 1);
                this.loggedPost = false;
            }
        }
    }
}
