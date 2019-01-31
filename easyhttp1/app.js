const http = new easyHTTP;
//
// //Get Posts
// // http.get('http://localhost:3000/quotes',
// // function(err, posts) {
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(posts);
// //   }
// // });
//
//
//
// /*
// //Get Single Post
// http.get('http://localhost:3000/quotes/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
// */
//
//
// // const data =    {
// //       "id": 14,
// //       "QuoteTexte": "Look deep into nature, and then you will understand everything better. Albert Einstein\r\n",
// //       "likes": 4,
// //       "dislikes": 3
// //     };
//
// // Create Post
// // http.post('http://localhost:3000/quotes/', data,
// // function(err, post) {
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });
// //
// const data =    {
//       "id": 1,
//       "QuoteTexte": "Edited quote text",
//       "likes": 4,
//       "dislikes": 3
//     };
//
// // //Update Post
// http.put('http://localhost:3000/quotes/2', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// http.delete('http://localhost:3000/quotes/14', function(err, response) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
http.get("http://localhost:3000/users/")
.then(data => console.log(data))
.catch(err => console.log(err));