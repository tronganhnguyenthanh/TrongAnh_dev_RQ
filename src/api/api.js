export const getPost = async () => {
 let res = await fetch("https://jsonplaceholder.typicode.com/posts")
 return res.json()
}

export const getPostDetail = async (id) => {
 let postId = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 return postId.json()
}

export const filterPostById = async (id) => {
 let filterPostId = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
 console.log("id", id);
 return filterPostId.json()
}
