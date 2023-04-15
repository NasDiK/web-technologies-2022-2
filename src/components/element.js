export class Element {
    #el = null
    #post = null
    #getPost = null
    #comments = null
    #getComment = null
  
    constructor(el, getPost, getComment, comments) {
      this.#el = el
      this.#getPost = getPost
      this.#comments = comments
      this.#getComment = getComment
    }
  
    async init() {
      const url = new URL(window.location.href)
      this.#post = + url.searchParams.get('post')
      await this.loadItems()
      await this.loadComments()
    }
  
    async loadItems() {
      const items = await this.#getPost(this.#post)
      this.renderPost(items)
    }
  
    async loadComments() {
      const comments = await this.#getComment(this.#post)
      this.renderComments(comments)
    }
    renderPost(items) {
      let html = ''
        html += `
            <p>User id: ${items.userId}</p>
            <p>Post id: ${items.id}</p>
            <p>Post header: ${items.title}</p>
            <p>Post content: ${items.body}</p>`
      console.log(html)
      this.#el.innerHTML = html
    }
    renderComments(items) {
      let html = ''
      for (let i in items){
        html += `
          <div class="comment">
          <h3>${items[i].name}</h3>
          <p>${items[i].email}</p>
          <p>${items[i].body}</p></div>`
      }
      this.#comments.innerHTML = html
    }
  }