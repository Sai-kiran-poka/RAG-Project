### README for FastAPI LLM-based Query API

# FastAPI LLM-based Query API

This project sets up a FastAPI application that leverages a language model to handle inquiries related to animals' laws, acts, and overall well-being. It uses various modules for loading, processing, and querying a document to generate responses based on input questions.

## Overview of Modules

### FastAPI
- **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python.

### Pydantic
- **Pydantic**: Used for data validation and settings management using Python type annotations.

### LangChain Community Modules
- **Chroma**: A vector store used to store and retrieve document embeddings.
- **PyPDFLoader**: Loads PDF documents.
- **RecursiveCharacterTextSplitter**: Splits the document into manageable chunks for processing.

### LangChain Schema & Core
- **StrOutputParser**: Parses the output from the language model.
- **RunnablePassthrough**: A utility to pass data through the chain.
- **ChatPromptTemplate**: Defines the prompt template used to interact with the language model.

### HuggingFace
- **HuggingFaceEndpoint**: Interacts with the HuggingFace model endpoint.
- **HuggingFaceEmbeddings**: Embeddings model from HuggingFace.

### Additional Modules
- **os**: Provides a way of using operating system dependent functionality.
- **huggingface_hub**: Used for logging into HuggingFace to access the models.

## Project Initialization

### Prerequisites

- Python 3.8+
- Pip (Python package installer)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/fastapi-llm-query.git
    cd fastapi-llm-query
    ```

2. Create a virtual environment and activate it:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```


### Running the Application

1. Ensure you have the PDF document (`animal.pdf`) in the project directory.
2. Start the FastAPI server:
    ```sh
    uvicorn main:app --reload
    ```

### Testing the API

Use a tool like Postman or cURL to test the API endpoint:

```sh
curl -X POST http://127.0.0.1:5000/api/query -H "Content-Type: application/json" -d '{"question":"What are the animal laws in India?"}'
```

### Project Structure

```
fastapi-llm-query/
│
├── main.py                 # Main application file
├── animal.pdf              # PDF document to be processed
├── requirements.txt        # Project dependencies
├── chroma_db_animals_huggingface/  # Directory to store vectorstore data
├── venv/                   # Virtual environment directory
└── README.md               # This README file
```

### Dependencies

- `fastapi`
- `pydantic`
- `langchain-community`
- `langchain-core`
- `langchain-huggingface`
- `uvicorn`
- `huggingface-hub`

