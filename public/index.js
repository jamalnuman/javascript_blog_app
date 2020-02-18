axios.get('http://localhost:3000/api/posts').then(function(response){ //making a call to my backend
   var posts = response.data; //the return of the response is now saved to the variable posts 
   console.log(posts); //this prints the response to the console
   var test = document.querySelector('#grabme'); //i am grabbing the element that i want to change
   console.log(test); 
   test.innerHTML = posts[1].body //after grabbing the element, i can now change the element..i am assigning the value of the element to posts[0].title...remember the post is an array of posts from line 3...i can now iterate through the array of posts
 });

//data is similar to parse...in that the response from the api call is in json, but with .data there is a conversion of the response from json to javascript
//posts[1].body: this is from the js object which has behaviors and attributes...that is why you can call .body on line 6