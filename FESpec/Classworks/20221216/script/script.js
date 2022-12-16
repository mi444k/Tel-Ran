const addPostForm = document.querySelector(".add_post_form");
const postsDiv = document.querySelector(".posts");
let postData = [
  {
    title: "Заголовок поста",
    text: "Текст поста"
  }
];

addPostForm.addEventListener("submit", event => {
  event.preventDefault();

  const post = {
    title: event.target.title.value,
    text: event.target.text.value
  };
  postData.push(post);

  rerender();

  event.target.title.value = "";
  event.target.text.value = "";
});

function rerender() {
  postsDiv.innerText = "";
  let showEmptyPost = false;
  if (postData.length === 0) {
    postData.push({
      title: "Постов не найдено",
      text: ""
    });
    showEmptyPost = true;
  }
  for (let i = 0; i < postData.length; i++) {
    const post = postData[i];
    if (showEmptyPost === false && post.title === "Постов не найдено") continue;
    addPostCard(post.title, post.text);
  }
}

function deletePostCard(title) {
  const newData = [];
  postData.forEach(item => {
    if (item.title != title && item.title != "Постов не найдено")
      newData.push(item);
  });
  postData = newData;
}

function addPostCard(title, text) {
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("p");
  const newText = document.createElement("p");
  const newButton = document.createElement("div");

  newButton.addEventListener("click", event => {
    deletePostCard(title);
    rerender();
  });

  newDiv.append(newTitle, newText, newButton);

  newDiv.classList.add("item");
  newTitle.classList.add("itemTitle");
  newText.classList.add("itemText");
  newButton.classList.add("close-button");

  if (title === "Постов не найдено") newButton.classList.add("displayNone");

  newTitle.innerText = title;
  newText.innerText = text;

  postsDiv.append(newDiv);
}

rerender();
