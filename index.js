import inquirer from "inquirer";

// Define supported languages and their corresponding greetings
const greetings = {
  English: "Hello, World!",
  French: "Bonjour, le Monde!",
  Spanish: "¡Hola, Mundo!",
  German: "Hallo, Welt!",
  Italian: "Ciao, Mondo!",
  Japanese: "こんにちは、世界！",
  Chinese: "你好，世界！",
  Russian: "Привет, мир!",
  Korean: "안녕, 세상!",
  Arabic: "مرحبًا بالعالم!",
}

async function HelloWorld() {
  // Prompt user for preferred language
  const answers = await inquirer.prompt({
    name: "language",
    type: "list",
    message: `Please pick your preferred language:`,
    choices: Object.keys(greetings),
  });

  const selectedLanguage = answers.language
  const greeting = greetings[selectedLanguage];

  // Print the greeting
  console.log(greeting);
}

HelloWorld();