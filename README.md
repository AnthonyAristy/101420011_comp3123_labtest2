101420011_comp3123_labtest2
Overview
This project is part of the COMP3123 Lab Test 2, developed for demonstrating knowledge and skills in React, API integration, and frontend development. The primary objective of this project is to fetch and display real-time weather data based on user input, leveraging the OpenWeatherMap API.

Features
City Search: Users can input a city name to fetch weather details.
Weather Information: Displays temperature, humidity, wind speed, and weather description for the selected city.
Real-time Data: Fetches live weather data from the OpenWeatherMap API.
Styling: The application is styled using Styled Components to create a visually appealing and responsive interface.
Error Handling: Displays an error message if the weather data fetch fails.
Technologies Used
React: JavaScript library for building the user interface.
Axios: Promise-based HTTP client for making API requests.
Styled-Components: CSS-in-JS tool for styling React components.
OpenWeatherMap API: API for fetching real-time weather data.
Setup and Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/101420011_comp3123_labtest2.git
Install Dependencies: Navigate to the project directory and install the required dependencies:

bash
Copy code
cd 101420011_comp3123_labtest2
npm install
Create .env File: Create a .env file in the root of the project directory and add your OpenWeatherMap API key:

plaintext
Copy code
REACT_APP_API_KEY=your_api_key_here
Run the Project: After installing the dependencies and setting up the environment variables, run the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application in action.

Usage
Upon launching the app, you'll see an input field where you can type the name of a city.
After typing the city name, click on the "Search" button to fetch the weather data.
The weather details, including temperature, humidity, wind speed, and weather condition, will be displayed for the selected city.
If there is an error (e.g., incorrect city name or API failure), an error message will be shown on the screen.