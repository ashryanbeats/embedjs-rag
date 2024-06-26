# Getting started with EmbedJS for RAG

This repo serves to help you get started with the EmbedJS library (`@llm-tools/embedjs`) for implementing RAG in your own Node.js applications.

## RAG resources

- ["Applied AI Software Engineering: RAG" on The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/rag?utm_source=post-email-title&publication_id=458709&post_id=144625800&utm_campaign=email-post-title&isFreemail=true&r=37d10&triedRedirect=true&utm_medium=email): a solid primer if you're looking a high-level explantion of RAG for app developers
- ["RAG in Node.js with EmbedJS"](https://www.ashryan.io/rag-in-node-js-with-embedjs/): an article I wrote that discusses this repo in a bit more depth
- [llm-tools/embedJs on GitHub](https://github.com/llm-tools/embedJs): the library this RAG example uses

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
