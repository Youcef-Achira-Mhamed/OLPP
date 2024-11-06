// Sidebar toggle
document.querySelector(".menu-icon").addEventListener("click", function() {
    const sidebar = document.querySelector("aside");
    sidebar.classList.toggle("hidden");
});

// Redirect to login page
const loginSignupButton = document.getElementById('loginSignupButton');
loginSignupButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Display user's photo if logged in
window.addEventListener('DOMContentLoaded', async () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userPhoto = localStorage.getItem('userPhoto');
    
    const loginSignupButton = document.querySelector('.right-section button');
    const accountCircleIcon = document.querySelector('.right-section .account-circle');
    const notificationsIcon = document.querySelector('.right-section .notifications');

    if (isLoggedIn === 'true') {
        loginSignupButton.style.display = 'none';

        const profileImage = document.createElement('img');
        profileImage.src = userPhoto;
        profileImage.alt = 'User Photo';
        profileImage.className = 'user-photo';
        accountCircleIcon.replaceWith(profileImage);
        
        notificationsIcon.style.display = 'inline';
    } else {
        loginSignupButton.style.display = 'inline';
        accountCircleIcon.style.display = 'none';
    }

    // Fetch and display courses in the thumbnail section
    await fetchCourses();
    
});

// Fetch and display courses
async function fetchCourses() {
    try {
        const response = await axios.get(`http://localhost:5000/home/get-12-course/${localStorage.getItem('username')}`);
        console.log('pass ... ');
        if (response.status === 200) {
            const courses = response.data;
            console.log(courses);
            displayCourses(courses);
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

// Append fetched courses to the thumbnail grid
function displayCourses(courses) {
    const thumbnailGrid = document.querySelector('.thumbnail-grid');

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('thumbnail');

        courseDiv.innerHTML = `
            <img src="${course.thumbnail}" alt="${course.title}">
            <h3 class="thumbnail-title">${course.title}</h3>
        `;

        thumbnailGrid.appendChild(courseDiv);
    });
}
