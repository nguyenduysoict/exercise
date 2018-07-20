import { Post } from './post';

export class PostService {
    private posts: Post[] = [
        new Post (
            'P001',
            'Love it, Change it or Leave it',
            '#love, #change',
            // tslint:disable-next-line:max-line-length
            'You are a fresh graduate and work for more than 12 months in an IT company with some boring coding tasks... The tasks are unchallenging. Day in, day out you are bored to death with outsourcing stuffs that are not in your interest.',
            'https://thumb7.shutterstock.com/thumb_large/267748/159002759/stock-photo-boy-leaning-on-boring-attitude-159002759.jpg',
            0,
            0,
        ),
        new Post (
            'P002',
            'Pass by reference and pass by value',
            '#reference, #value',
            // tslint:disable-next-line:max-line-length
            'Khi học một ngôn ngữ lập trình, một trong những thứ bạn phải nắm được đó là ngôn ngữ đó truyền biến vào hàm bằng cách nào, khi thao tác với biến đó trong hàm thì có ảnh hưởng tới biến nằm ngoài hàm hay không? Điều này là rất cần thiết để tránh những khó hiểu về sau, nhất là những người đang code một ngôn ngữ quen rồi nhảy sang ngôn ngữ khác học.',
            // tslint:disable-next-line:max-line-length
            'http://static1.squarespace.com/static/5478e059e4b04a873e34cd68/551ece00e4b0240b3f8c3450/551ece26e4b0240b3f8c36f8/1428082214060/photodune-3520393-value-s.jpg?format=original',
            0,
            0,
        )
    ];

    getPosts() {
        return this.posts.slice();
    }

    getPost(index: number) {
        return this.posts[index];
    }
}
