/*

Assignment Description
You are tasked with building a social media app using Object-Oriented Programming (OOP) concepts in JavaScript. 
Your app should allow users to create profiles, connect with friends, share content, and interact with other users. 
You should use the following OOP concepts in your implementation: inheritance, encapsulation, polymorphism, and abstraction.

*/

class User {
  constructor(name, email, password, dateOfBirth, location, profilePicture) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.location = location;
    this.profilePicture = profilePicture;
    this.posts = [];
    this.groups = [];
  }

  createPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);
  }

  likePost(post) {
    post.likes.push(this);
  }

  commentPost(post, content) {
    const comment = new Comment(this, content);
    post.comments.push(comment);
  }

  joinGroup(group) {
    group.members.push(this);
    this.groups.push(group);
  }

  leaveGroup(group) {
    const index = group.members.indexOf(this);

    if (index !== -1) {
      group.members.splice(index, 1);
    }

    const userIndex = this.groups.indexOf(group);
    if (userIndex !== -1) {
      this.groups.splice(userIndex, 1);
    }
  }
}

class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = [];
    this.comments = [];
  }
}

class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}

// Create a new User object and assign it to a variable
const newUser = new User('LAKSHMIKANT', 'fullstacktrainer@gmail.com', 'password123', '12/10/1998', 'Bengaluru', 'lucky.jpg');

console.log(newUser);

// User {
//   name: 'LAKSHMIKANT',
//   email: 'fullstacktrainer@gmail.com',
//   password: 'password123',
//   dateOfBirth: '12/10/1998',
//   location: 'Bengaluru',
//   profilePicture: 'lucky.jpg',
//   posts: [],
//   groups: []
// }