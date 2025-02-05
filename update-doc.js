const fs = require("fs");
const { execSync } = require("child_process");

const markdownFile = "EXPLORATION.md";

// Mapeamento manual de tópicos e seus arquivos de teste
const testFiles = [
  { topic: "Validação de String", testPath: "src/__test__/001.test.ts" },
  { topic: "Validação de Números", testPath: "src/__test__/002.test.ts" },
  { topic: "Validação de Objetos", testPath: "src/__test__/003.test.ts" },
  { topic: "Validação de Array", testPath: "src/__test__/004.test.ts" },
  { topic: "Validação de Array de Objetos", testPath: "src/__test__/005.test.ts" },
  { topic: "Validação de Enums", testPath: "src/__test__/006.test.ts" },
  { topic: "Validação Encadeada", testPath: "src/__test__/007.test.ts" },
  { topic: "Validação de Estruturas Diferentes com Base em uma Chave", testPath: "src/__test__/008.test.ts" },
];

let markdownContent = fs.readFileSync(markdownFile, "utf8");

testFiles.forEach(({ topic, testPath }) => {
  try {
    execSync(`npx jest ${testPath} --silent`, { stdio: "ignore" });
    markdownContent = markdownContent.replace(
      new RegExp(`## .*${topic}.*🚧`, "g"),
      `## ${topic} ✅`
    );
  } catch {
    markdownContent = markdownContent.replace(
      new RegExp(`## .*${topic}.*✅`, "g"),
      `## ${topic} 🚧`
    );
  }
});

fs.writeFileSync(markdownFile, markdownContent);
console.log(`Arquivo ${markdownFile} atualizado.`);
