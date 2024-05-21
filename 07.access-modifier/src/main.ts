class Post {
  // public - 어디서든 접근 가능 / default 값
  // protected - 클래스 내, 상속받은 자식 클래스에서 접근 가능
  // private - 클래스 내에서만 접근 가능
  // private id: number = 0;
  // protected title: string = "";

  constructor(private id: number = 0, protected title: string = "") {
    // this.id = id;
    // this.title = title;
  }

  getPost() {
    return `postId ${this.id}, postTitle: ${this.title}`;
  }
}
class PostB extends Post {
  getPost() {
    // Protected 이기 때문에 접근 가능
    return this.title;
  }
}

const post: Post = new Post(1, "title 1");
