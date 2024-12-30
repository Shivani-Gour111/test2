const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                const tableBody = document.querySelector('#data-table tbody');
                
                data.forEach(user => {
                    const row = document.createElement('tr');
                    const cellId = document.createElement('td');
                    cellId.textContent = user.id;
                    const cellName = document.createElement('td');
                    cellName.textContent = user.name;
                     const cellUsername = document.createElement('td');
                    cellUsername.textContent = user.username;
                    const cellEmail = document.createElement('td');
                    cellEmail.textContent = user.email
                    row.appendChild(cellId);
                    row.appendChild(cellName);
                    row.appendChild(cellUsername);
                    row.appendChild(cellEmail);
                    tableBody.appendChild(row);
            });
            })
            .catch(error => {
                console.error('Error fetching data:', error);g
            });