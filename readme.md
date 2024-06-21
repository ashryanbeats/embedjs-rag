# Getting started with EmbedJS for RAG

This repo serves to help you get started with the EmbedJS library (`@llm-tools/embedjs`) for implementing RAG in your own Node.js applications.

## Requirements

- Node.js 20+
- npm 10+
- An OpenAI API key

## Install

Install the repo and its dependencies like this:

```bash
git clone REPO_URL
cd embedjs-rag
npm install
```

## Configure

Create a new file called `.env`:

```bash
touch .env
```

In your new `.env` file, add a variable for your OpenAI API key and add your key:

```text
OPENAI_API_KEY=your_key_here
```

## Usage

You can run the script with or without prompt as a command line argument:

```bash
npm start # No prompt (the script has a default)
npm start "What does Ash write about?"
```

The output will print in your terminal.
