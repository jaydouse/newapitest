const { OpenAI } = require("openai");



const openai = new OpenAI({apiKey:"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"});

async function main() {
  const completion_new = await openai.completions.create({
    "id": "chatcmpl-123",
    "object": "chat.completion",
    "created": 1677652288,
    "model": "gpt-3.5-turbo-0613",
    "choices": [{
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\n\nHello there, how may I assist you today?",
      },
      "finish_reason": "stop"
    }],
    "usage": {
      "prompt_tokens": 9,
      "completion_tokens": 12,
      "total_tokens": 21
    }
  })

  // const completion = await openai.completions.create({
  //   model: "gpt-3.5-turbo-instruct",
  //   prompt: "tell me what day it is",
  //   max_tokens: 7,
  //   temperature: 0,
  // });

  console.log(completion_new);
}
main();