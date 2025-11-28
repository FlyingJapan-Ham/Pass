# Flying Pass - Walkthrough & Setup

I have successfully created the "Flying Pass" web application with an Airbnb-style mobile design.

## 📱 Features Implemented
-   **Mobile-First Design**: Optimized for mobile viewports with a sticky bottom navigation.
-   **Airbnb Aesthetic**: Clean typography, rounded corners, shadows, and a "red" primary color scheme.
-   **Home Page**:
    -   **Category Bar**: Horizontal scrolling list of categories (Cafe, Restaurant, etc.).
    -   **Listing Feed**: Cards showing partner images, ratings, and benefits.
-   **Detail Page**:
    -   **Hero Image**: Large immersive header image.
    -   **Info Section**: Rating, location, and description.
    -   **Benefit Card**: Highlighted "Flying Pass Benefit".
    -   **Sticky Footer**: "Use Pass" button always visible at the bottom.

## 🛠️ Setup Instructions
Since I could not automatically install dependencies in your environment, please run the following commands in your terminal to start the application:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    -   Click the link shown in the terminal (usually `http://localhost:5173`).
    -   **Tip**: Open the browser's Developer Tools (F12) and toggle "Device Toolbar" (Cmd+Shift+M) to view it in Mobile mode (e.g., iPhone 12/14 Pro) for the best experience.

## 📂 Project Structure
-   `src/components`: Reusable UI components (`Navbar`, `BottomNav`, `ListingCard`, etc.).
-   `src/pages`: Page views (`Home`, `Detail`).
-   `src/data`: Mock data for partners.
-   `src/index.css`: Global styles and CSS variables.

## 📸 Visuals (Expected)
-   **Home**: You will see a search bar at the top, categories below it, and a list of partners.
-   **Detail**: Clicking a partner takes you to a detailed view with a back button and a "Use Pass" footer.
