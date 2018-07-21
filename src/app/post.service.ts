import { Post } from './post';
import { Subject } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class PostService {

    postResults: Post[];
    detailPost: Post;
    public postChanged: Subject<Post[]> = new Subject();
    private posts: Post[] = [
        new Post (
            'P001',
            'Love it, Change it or Leave it',
            '#love, #change',
            // tslint:disable-next-line:max-line-length
            'You are a fresh graduate and work for more than 12 months in an IT company with some boring coding tasks... The tasks are unchallenging. Day in, day out you are bored to death with outsourcing stuffs that are not in your interest.',
            // tslint:disable-next-line:max-line-length
            'Some youngsters who came freshly out college or university work in an IT company as their very first job. They wonder themselves that what they \'ve studied in College or University are now "useless". They confuse the learning foundation (creative thinking, schematic working and systematic planning) with the perfunctory learning. What they \'ve studied all the years (e.g. C++ as programming tool, LINUX as the working platform and MySQL as the repository DB) is just some technical means to form, to build up their global foundation. Their confusion makes them frustrated. With the time they get bored. The fact is that no company in the world would hire a young man or a young woman for the job which is exactly tailored to his/her "studied" profession (C++, LINUX and MySQL), but for his/her global foundation which distinguishes him/her from the "unlearned": creative thinking, schematic working, systematic planning. And if a youngster wrongly values the perfunctory learning more than the learning foundation he would be forever bored with all that what he does.',
            'http://www.markslife.com/images/phocagallery/Wallpapers2017/thumbs/phoca_thumb_l_201726.jpg',
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
            'Đến đây nếu chúng ta lấy x,y của chuột gắn bằng position của emplement thì sai bét , vì để lấy position của emplement ta dùng offsetTop,offsetLeft đúng không , hãy quay lại với hình ảnh h1,h2,h3,h4,h5,h6 các bạn nghĩ Top của h6 là bao nhiêu ?nhiều người sẽ nghĩ top > 0 nhưng thực ra nó = 0 đấy,còn h5 thì top = 15 . Vẫn đề ở đây là gì vấn đề là top của các emplement trên không tính từ đầu trang web mà tính từ border bottom của chữ Let Create , đến đây thì vẫn đề nó dễ hơn một xúy vì chỉ cần lấy vị trí của nó rồi cộng với khoảng cách từ border top đến đầu trang là ok nhưng lấy top một emplement thì nó dễ để lấy nhiều thì sẽ cần đến array vậy đến đây ta phải làm sao ? , sẽ có mấy thằng (hơi xúc phạm ) nghĩ là :"MÉO gì mà làm sao ? dùng cái offsetTop get là xong .Thằng admin blog viết ngu vãi ! :smile::smile:" ,( tự chửi mình cảm giác tủi thân vãi ) nghĩ như thằng này thì nó không ổn chút nào vì trong lúc di chuyển emplement thì hệ thống cần update position của emplement thì nó mới có thể tạo một hiệu ứng khi di chuyển , đấy nên khi di chuyển thì offsetTop sẽ thay đổi nên hậu quả sẽ là chuột sẽ đi lệch so với emplement với khoảng cách rất ngu người ! , vậy phải làm sao ? chúng ta cần làm như này',
            // tslint:disable-next-line:max-line-length
            'http://static1.squarespace.com/static/5478e059e4b04a873e34cd68/551ece00e4b0240b3f8c3450/551ece26e4b0240b3f8c36f8/1428082214060/photodune-3520393-value-s.jpg?format=original',
            0,
            0,
        )
    ];

    getPosts() {
        return [...this.posts];
    }

    getPost(index: number) {
        return this.posts[index];
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.postChanged.next([...this.posts]);
    }
    passPostDetail = (post: Post) => {
        this.detailPost = post;
    }
    getPostDetail = () => {
        return this.detailPost;
    }
    searchPost = (searchKey: string) => {
    this.postResults = [];
    for (let index = 0; index < this.posts.length; index++) {
        const element = this.posts[index].title.toLowerCase();
        if (element.search(searchKey.toLowerCase()) !== -1) {
            this.postResults.push(this.posts[index]);
        }
    }
    return this.postResults;
    }

    increasePostLike(id: String) {
        const post = this.posts.find(
            (s) => {
                return s.id === id;
            }
        );
        if (post) {
            post.likeCount++;
        }
    }
    increasePostShare(id: String) {
        const post = this.posts.find(
            (s) => {
                return s.id === id;
            }
        );
        if (post) {
            post.shareCount++;
        }
    }
}
