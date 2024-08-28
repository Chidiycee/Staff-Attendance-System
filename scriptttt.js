const users = [];

// Function to add a user
function addUser() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const placeOfBirth= document.getElementById('placeOfBirth').value;
    const gender = document.getElementById('gender').value;
    const department = document.getElementById('department').value;
    const status = document.getElementById('status').value;
   

    // Check iffields are filled
    if (firstName === '' || lastName === '' || dateOfBirth === '' || placeOfBirth === ''  ) {
        alert('Please fill in both the name and email fields.');
        return;
    }

    // Create a user object with initial attendance set to 'Absent'
    const user = {
        name: name,
        email: email,
        attendance: 'Absent', // Default attendance
        date: '', // Default date
        time: '' // Default time
    };

    // Add the user object to the users array
    users.push(user);

    // Update the user select dropdown
    updateUserSelect();

    // Display the updated list of users
    displayUsers();

    // Clear form fields
    document.getElementById('register-staff-form').reset();
}

// Function to update the user select dropdown
function updateUserSelect() {
    const userSelect = document.getElementById('username');
    uusername.innerHTML = '<option value="">-- Select a User --</option>'; // Reset options

    users.forEach((user, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = user.name;
        userSelect.appendChild(option);
    });
}

// Function to update attendance, date, and time when a user is selected
function updateAttendance() {
    const selectedIndex = document.getElementById('username').value;
    if (selectedIndex !== '') {
        // Get the current date and time
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        // Update attendance, date, and time for the selected user
        users[selectedIndex].attendance = 'Present';
        users[selectedIndex].date = date;
        users[selectedIndex].time = time;

        // Display the updated list of users
        displayUsers();
    }
}

// Function to display all users in the table
function displayUsers() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    users.forEach(user => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const attendanceCell = document.createElement('td');
        const dateCell = document.createElement('td');
        const timeCell = document.createElement('td');

        nameCell.textContent = user.name;
        emailCell.textContent = user.email;
        attendanceCell.textContent = user.attendance;
        dateCell.textContent = user.date;
        timeCell.textContent = user.time;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(attendanceCell);
        row.appendChild(dateCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
    });
}