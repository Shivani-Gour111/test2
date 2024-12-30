
// // Ek function jo kisi task ko simulate karega
// function performTask(taskName, url) {
//   console.log(`${taskName} started...`);
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         return Promise.reject(`${taskName} failed due to network issue!`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       return `${taskName} completed successfully! \n Data fetched: \n${JSON.stringify(data, null, 2)}`;
//     })
//     .catch(error => {
//       return `${taskName} failed due to an error: \n${error}`;
//     });
// }

// const url = 'https://jsonplaceholder.typicode.com/posts/1';
// performTask('Data Processing', url)
//   .then(successMessage => {

//     console.log(successMessage);
//   })
//   .catch(errorMessage => {

//     console.log(errorMessage);
//   });
