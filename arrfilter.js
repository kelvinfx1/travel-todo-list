const posts = [
    {userId: 1, id: 1, body: "First blog post"},
    {userId: 2, id: 2, body: "Second blog post"},
    {userId: 3, id: 3, body: "Third blog post"},
    {userId: 4, id: 4, body: "Fourth blog post"},
    {userId: 5, id: 5, body: "Fifth blog post"}

];


let filtered = posts.filter(firstPost => firstPost.body === "Fifth blog post");
console.log(filtered);

//e.g 2

const number = [1, 2, 3, 4, 5];

let filteredd = number.filter(num => (
    num < 3
));
console.log(filteredd);


