import Post from "./Post.mjs";

const newPost = new Post(
  "Today's Headline",
  "A 6.5 earthquake occurred in the Pacifc basin today at 3:35AM UTC."
);
newPost.publish();
