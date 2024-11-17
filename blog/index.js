import express from "express";
import bodyParser from "body-parser";
let port = 3000;
let posts=[];

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs", { posts: posts });
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});


app.get("/About", (req, res) => {
  res.render("contact.ejs");
});

app.get("/Edit/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.find(p => p.id == postId);
  if (post) {
    res.render('edit.ejs', { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.get("/show/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts.find(p => p.id == postId);
  if (post) {
    res.render('show.ejs', { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/submit", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.render("home.ejs", { posts: posts });
});

app.post("/edit/:id", (req, res) => {

  const postId = req.params.id;
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;

  const postedit = posts.find(p => p.id == postId);
  if (postedit) {
    postedit.title = updatedTitle;
    postedit.content = updatedContent;
  }
  res.render("home.ejs", { posts: posts });
});

app.post("/Delete/:id", (req, res) => {
  const postId = req.params.id;
  posts = posts.filter(post => post.id != postId);
  res.render("home.ejs", { posts: posts });

});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});