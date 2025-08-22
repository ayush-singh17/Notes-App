# Notes App

A **frontend-only Notes application** built with **React**, **Chakra UI**, and **React Router**. This app allows users to create, edit, delete, pin, search, and manage notes efficiently. It also includes a simple login system (frontend simulation) and local note saving.  

---

## Features

- **Add & Edit Notes** – Easily create new notes or modify existing ones.  
- **Delete Notes** – Remove unwanted notes.  
- **Pin Notes** – Keep important notes at the top.  
- **Search Notes** – Quickly find notes by keywords.  
- **Login Simulation** – Basic login functionality (frontend only).  
- **Save Notes** – Notes persist locally during the session.  
- **Navigation** – Responsive sidebar navigation using React Router.  
- **Responsive Design** – Works smoothly on desktop and mobile devices.  

---

## Technologies Used

- **React** – Frontend framework  
- **Chakra UI** – Component library for UI styling  
- **React Router** – For navigation  
- **CSS** – Custom styling for layout and components  

---

## Project Structure
```
src/
├── App.js # The main file that holds all the app's logic and handles what you see on the screen.
├── Header.js # The top part of the app with the search bar and the "new note" button.
├── Nav.js # The menu on the side that helps you get around.
├── main.js # This handles the different pages you can visit, like the home screen and the notes page.
├── Homepage.js # This is the main screen where you see all your notes laid out.
├── NoteCard.js # The little clickable box for each individual note.
├── Components/ # This folder has all the other pieces that make the app work.
│   ├── Notes.js # The actual page where you write and edit your notes.
│   ├── login.js # The login screen.
│   ├── Color.js # The color picker tool.
│   ├── Font.js # The font selector tool.
│   └── Size.js # The font size selector tool.
└── index.js # The starting point for the entire app!
```
---

## Installation & Setup

1. Clone the repository:  
   ```bash
   git clone <repo-url>

2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
4. Open in your browser:
   ```bash
   http://localhost:3000

## Notes

The app currently does **not include dark mode** due to time and compatibility constraints. Dark mode can be added in the future using **Chakra UI’s theme system** or **next-themes**.

All features work fully in **light mode**.

---

## Future Enhancements

- Dark mode support  
- Persistent login using backend or local storage  
- Note categories or tags  
- Note editing/deletion confirmation  
- Export notes to PDF or other formats  

---

## License

This project is **open-source** and free to use.

---

This version:

- Is properly formatted in Markdown.  
- Has **all relevant project details**.  
- Mentions dark mode as an optional enhancement.  
- Is clean and professional for submission.  

If you want, I can also create a **slim “one-page” version** suitable for GitHub project showcase that’s **very concise and neat**.  

Do you want me to do that?
