const fs = require("fs");
const { execSync } = require("child_process");

const markdownFile = "EXPLORATION.md";
const testFiles = [
  { topic: "Validação de String", testPath: "src/__test__/001.test.ts" },
];

let markdownContent = fs.readFileSync(markdownFile, "utf8");

testFiles.forEach(({ topic, testPath }) => {
  try {
    execSync(`npx jest ${testPath} --silent`, { stdio: "ignore" });
    markdownContent = markdownContent.replace(
      new RegExp(`## .*${topic}.*🚧`, "g"),
      `## ${topic} ✅ **Concluído**`
    );
  } catch {
    markdownContent = markdownContent.replace(
      new RegExp(`## .*${topic}.*✅`, "g"),
      `## ${topic} 🚧 **Em progresso**`
    );
  }
});

fs.writeFileSync(markdownFile, markdownContent);
console.log(`Arquivo ${markdownFile} atualizado.`);
