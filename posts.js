import {Element} from '/src/components/Element.js'

const getPost = async (postId) => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(async res => {
    return res.json()
  }).catch(err => alert(err));
}

const getComments = async (postId) => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(async res => {
    return res.json()
  }).catch(err => alert(err));
}

const init = async () => {
  const postEl = document.getElementById('post');
  const commentsEl = document.getElementById('comments');
  let post = new Element(postEl, getPost, getComments, commentsEl);
  await post.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  await init();
}