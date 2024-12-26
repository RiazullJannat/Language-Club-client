# Language Club - Client Side

This is the client-side repository for the Language Club application, a platform to find, book, and manage tutors and tutorials. It is built with React.js and integrates with a backend for authentication and data management.
# live link
https://language-club-b10ab.web.app/
---
## **Challenges Faced**
This application is feature-based, so building the application features presented challenges. Managing data and the server involved encountering and resolving numerous errors and bugs. These challenges were both demanding and exciting, providing a great learning experience.

## **Features**

### **General**
- Navbar with conditional login/logout functionality.
- Responsive design for seamless use across devices.
- Dark/Light theme toggle for user preference.

### **Pages**

1. **Home**:
   - Banner with a carousel.
   - Statistics section showing total tutors, reviews, languages, and users.
   - Language categories with clickable cards to view tutors.
   - Additional sections for extra content.

2. **Find Tutors**:
   - Displays all tutors with filtering by language.
   - Search functionality to find tutors by language.

3. **Tutor Details** *(Private)*:
   - Displays detailed tutor information.
   - Allows booking a tutor, saving data to the database.

4. **My Booked Tutors** *(Private)*:
   - Shows all tutors booked by the user.
   - Includes a review button to increment the tutor's review count.

5. **Add Tutorials** *(Private)*:
   - Form to add a tutorial.
   - Saves data to the database.

6. **My Tutorials** *(Private)*:
   - Lists tutorials added by the user.
   - Includes options to update or delete a tutorial.

7. **Authentication**:
   - Email/Password login.
   - Google Sign-in.
   - JWT-based private routes.

8. **Error Handling**:
   - Displays appropriate error messages.
   - Error page for invalid routes.

---

## **Technologies Used**

### **React Features**
- React Router for routing.
- Context API for global state management.
- Lazy loading for improved performance.

### **Styling**
- Tailwind CSS for UI components.
- DaisyUI for additional design elements.

### **Authentication**
- Firebase Authentication for email/password and Google login.
- JWT for secure private routes.