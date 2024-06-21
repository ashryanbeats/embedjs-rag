import "dotenv/config";
import path from "path";
import {
  RAGApplicationBuilder,
  SIMPLE_MODELS,
  OpenAi3SmallEmbeddings,
  WebLoader,
} from "@llm-tools/embedjs";
import { LanceDb } from "@llm-tools/embedjs/vectorDb/lance";
import { LmdbCache } from "@llm-tools/embedjs/cache/lmdb";

const getPrompt = () => {
  const args = process.argv.slice(2);
  let prompt = `${args[0]}`;

  if (args.length === 0) {
    prompt = "What does Ash write about?";
  }

  return prompt;
};

const prompt = getPrompt();

console.log("Prompting with:", prompt);

const ragApplication = await new RAGApplicationBuilder()
  .setModel(SIMPLE_MODELS["OPENAI_GPT3.5_TURBO"])
  .setEmbeddingModel(new OpenAi3SmallEmbeddings())
  .setVectorDb(new LanceDb({ path: path.resolve("./db") }))
  .setCache(new LmdbCache({ path: path.resolve("./cache") }))
  .addLoader(new WebLoader({ urlOrContent: "https://www.ashryan.io" }))
  .build();

console.log("Application built.");

const res = await ragApplication.query(`${args[0]}`);

console.log(`
${res.result}

Sourced from:
${res.sources.map((url) => "-" + url).join("\n")}
  `);
