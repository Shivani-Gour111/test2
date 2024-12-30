// Async function jo data ko API se fetch karega
async function fetchTaskData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'; // Example API URL (single todo item)
  
    try {
    
      const response = await fetch(url);
  
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const task = await response.json();
  
  
      console.log('Task Details:');
      console.log(`ID: ${task.id}`);
      console.log(`Title: ${task.title}`);
      console.log(`Completed: ${task.completed}`);
  
    } catch (error) {
  
      console.error('Error fetching task data:', error);
    }
  }
  fetchTaskData();
  