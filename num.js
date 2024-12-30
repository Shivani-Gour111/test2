
function Task(taskName, url) {
  let randomTime = Math.floor(Math.random() * 5000) + 1000; // 1 se 5 second ke beech
  console.log(`${taskName} started...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (randomTime > 7000) {
        reject(`${taskName} failed!`);
      } else {
        // Fetch request ko USE KIYA hain
        fetch(url)
          .then(response => {
            if (!response.ok) {
              reject(`${taskName} failed due to network issue!`);
            } else {
              return response.json();  
            }
          })
          .then(data => {
            resolve(`${taskName} completed successfully in ${randomTime / 1000} seconds!\nData fetched:\n${JSON.stringify(data, null, 2)}`);
          })
          .catch(error => {
            reject(`${taskName} failed due to an error: ${error}`);
          });
      }
    }, randomTime);
  });
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';


Task('Data Processing', url)
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errorMessage => {
    console.log(errorMessage); // Agar task fail ho
  });
