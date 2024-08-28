

function openNav(evt, tabName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    
  }
  


// To save data

 // Array to store user objects
 const users = [];

 // Function to add a user
 function addUser() {
     // Get form values
     const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value; 

    const name = firstName+ " " + lastName;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const placeOfBirth= document.getElementById('placeOfBirth').value;
    const gender = document.getElementById('gender').value;
    const department = document.getElementById('department').value;
    const status = document.getElementById('status').value;
   

      // Check if fields are filled
    if (firstName === '' || lastName === '' || dateOfBirth === '' || placeOfBirth === ''  ) {
      alert('Please check inputs again, information are required.');
      return;
  }

     // Create a user object with initial attendance set to 'Absent' and date/time as null
     const user = {
        name:name,
         dateOfBirth : dateOfBirth,
         placeOfBirth:placeOfBirth,
         gender:gender,
         department:department,
         status:status,
         attendance: 'Absent', // Default attendance
         date: 'null',         // Placeholder for date
         time: 'null'          // Placeholder for time
     };

     // Add the user object to the users array
     users.push(user);

     // Update the user select dropdown
     updateUserSelect();

     // Clear form fields
     document.getElementById('register-staff-form').reset();

     // Display the updated list of users in the main table
     displayMainUserTable();
 }

 // Function to update the user select dropdown
 function updateUserSelect() {
     const userSelect = document.getElementById('userSelect');
     userSelect.innerHTML = '<option value="">-- Select a User --</option>'; // Reset options

     users.forEach((user, index) => {
         const option = document.createElement('option');
         option.value = index;
         option.textContent = user.name;
         userSelect.appendChild(option);
     });
 }

 // Function to show the selected user details and update their status
 function showSelectedUser() {
     const selectedIndex = document.getElementById('userSelect').value;
     if (selectedIndex !== '') {
         // Update the selected user's attendance to 'Present' and set date and time
         const now = new Date();
         users[selectedIndex].attendance = 'Present';
         users[selectedIndex].date = now.toLocaleDateString();
         users[selectedIndex].time = now.toLocaleTimeString();

         // Display the updated list of all users, showing the selected user with 'Present' and others with 'Absent'
         displaySelectedUsersTable();
    //  } else {
    //      alert('Please select a user first.');
     }
 }

 // Function to display all users in the main table (Name and Email only)
 function displayMainUserTable() {
     const tableBody = document.querySelector('#infoTable tbody');
     tableBody.innerHTML = ''; // Clear existing rows

     users.forEach(user => {
         const row = document.createElement('tr');
         const nameCell = document.createElement('td');
         const dateOfBirthCell = document.createElement('td');
         const placeOfBirthCell = document.createElement('td');
         const  genderCell = document.createElement('td');
         const departmentCell = document.createElement('td');
         const statusCell = document.createElement('td');

         nameCell.textContent = user.name;
         dateOfBirthCell.textContent = user.dateOfBirth;
         placeOfBirthCell.textContent = user.placeOfBirth;
         genderCell.textContent = user.gender;
         departmentCell.textContent = user.department;
         statusCell.textContent = user.status;

         row.appendChild(nameCell);
         row.appendChild(dateOfBirthCell);
         row.appendChild(placeOfBirthCell);
         row.appendChild(genderCell);
         row.appendChild(departmentCell);
         row.appendChild(statusCell);
         tableBody.appendChild(row);
     });
 }

 // Function to display all users in the selected user details table
 function displaySelectedUsersTable() {
     const tableBody = document.querySelector('#attendanceTable tbody');
     tableBody.innerHTML = ''; // Clear existing rows

     users.forEach(user => {
         const row = document.createElement('tr');
         const nameCell = document.createElement('td');
         const dateOfBirthCell = document.createElement('td');
         const attendanceCell = document.createElement('td');
         const dateCell = document.createElement('td');
         const timeCell = document.createElement('td');

         nameCell.textContent = user.name;
         dateOfBirthCell.textContent = user.status;
         attendanceCell.textContent = user.attendance;
         dateCell.textContent = user.date;
         timeCell.textContent = user.time;

         row.appendChild(nameCell);
         row.appendChild(dateOfBirthCell);
         row.appendChild(attendanceCell);
         row.appendChild(dateCell);
         row.appendChild(timeCell);
         tableBody.appendChild(row);
     });
 }