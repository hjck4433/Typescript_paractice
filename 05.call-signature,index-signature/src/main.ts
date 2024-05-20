interface getLikeNumber {
  // call signature
  (like: number): number;
}

interface Post {
  // index signature
  [key: string]: unknown;
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post1: Post = {
  id: 1,
  title: "post1",
  getLikeNumber(like: number) {
    return like;
  },
};

post1.getLikeNumber(1);

post1["description"] = "description1";
post1["pages"] = 300;

interface Names {
  // index        // value
  [item: number]: string;
}

const userNames: Names = ["John", "kim", "Joe"];
