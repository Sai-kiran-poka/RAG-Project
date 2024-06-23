# Chatbot Application

This is a React-based chatbot application that utilizes OpenAI's GPT model to generate responses to user inputs. The chatbot interface allows users to communicate with an AI in real-time.

## Features

- User-friendly chat interface
- Real-time response generation using OpenAI's GPT model
- Timestamps for each message
- Loading indicator while the AI generates a response

## Getting Started

### Prerequisites

- Node.js and npm installed
- OpenAI API key

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/chatbot-app.git
    cd chatbot-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenAI API key:

    ```
    VITE_APP_OPENAI_API_KEY=your_openai_api_key
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

### Usage

- Open your browser and go to `http://localhost:3000`.
- Type a message in the input box and press Enter or click the send button.
- The chatbot will respond in real-time.

### Project Structure

- `src/components/GenerateAns.js`: Main component handling the chat interface and API calls.
- `src/components/Loader.js`: Loader component displayed while waiting for the AI response.
- `public/index.html`: Main HTML file.
- `src/index.js`: Entry point of the application.

### Dependencies

- `axios`: For making HTTP requests.
- `react`: JavaScript library for building user interfaces.
- `react-icons`: Collection of icons for React.
- `vite`: Next-generation front-end tooling.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License.
