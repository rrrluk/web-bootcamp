var employee = {
  firstName: "Juhan",
  lastName: "Tuha",
  age: 33
};

console.log(employee);

console.log(employee.age);

employee.age += 1;
console.log(employee.age);

employee.lastName = "Meh";
console.log(employee.lastName);
console.log(employee);

var posts = [
  {
    title: "blog post 1",
    author: "Juhan",
    comments: ["woohoo", "sucks"]
  },
  {
    title: "blog post 2",
    author: "Plap"
  },
  {
    title: "blog post 3",
    author: "Tuha"
  }
];

console.log(posts);
console.log(posts);
console.log(posts[1]);
console.log(posts[1].title);
console.log(posts[0].comments[0]);
