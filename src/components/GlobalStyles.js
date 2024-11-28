import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(120deg, #00c6ff, #0072ff); /* Aqua and blue gradient */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-size: 4rem;
    color: #fff;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
  }

  input {
    padding: 15px;
    font-size: 1.2em;
    border-radius: 30px;
    border: 2px solid #fff;
    margin: 10px;
    width: 250px;
    outline: none;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    transition: all 0.3s ease-in-out;
  }

  input:focus {
    background-color: rgba(255, 255, 255, 0.6);
    border-color: #00ffcc;
  }

  button {
    padding: 15px 25px;
    font-size: 1.2em;
    background-color: #00ffcc;
    color: #0072ff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 20px;
  }

  button:hover {
    background-color: #0072ff;
    color: #fff;
    transform: scale(1.05);
  }

  .weather-container {
    text-align: center;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
  }

  .weather-icon {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    animation: fadeIn 1s ease-in-out;
  }

  .weather-info {
    margin-top: 20px;
    font-size: 1.4em;
  }

  .weather-info span {
    font-weight: bold;
    color: #00ffcc;
  }

  /* Keyframe animation for weather icon */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyles;
