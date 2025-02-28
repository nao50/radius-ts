// generator/generate.ts
import * as fs from 'fs';
import * as path from 'path';

const dictionaryDir = path.join(__dirname, '../dictionary');
const outputDir = path.join(__dirname, '../src/attribute');

function generateAttributes(dictionaryFile: string) {
  const filePath = path.join(dictionaryDir, dictionaryFile);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const attributes: { name: string; code: number; type?: string }[] = [];

  lines.forEach(line => {
    if (line.trim().startsWith('ATTRIBUTE')) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 4) {
        const name = parts[1];
        const code = parseInt(parts[2], 10);
        const type = parts[3];
        if (!isNaN(code)) {
          attributes.push({ name, code, type });
        }
      }
    }
  });

  const rfcName = dictionaryFile.replace('dictionary.', '');
  let code = `// Generated from ${dictionaryFile}\n`;
  code += `import { RadiusPacket } from "../packet.js";\n\n`;
  
  // アトリビュート型の定義（ハイフンをアンダースコアに変換し、キーをシングルクォートで囲う）
  code += `export const ${rfcName}AttributeTypes = {\n`;
  attributes.forEach(attr => {
    const keyName = `'${attr.name.replace(/-/g, '_')}'`;
    code += `  ${keyName}: ${attr.code},\n`;
  });
  code += `} as const;\n\n`;
  code += `export type ${rfcName}AttributeType = typeof ${rfcName}AttributeTypes[keyof typeof ${rfcName}AttributeTypes];\n\n`;

  // アトリビュート操作メソッド
  code += `export const ${rfcName} = {\n`;
  attributes.forEach(attr => {
    const methodName = attr.name.replace(/-/g, '');
    const attrKey = `${rfcName}AttributeTypes['${attr.name.replace(/-/g, '_')}']`;
    code += `  get${methodName}(packet: RadiusPacket): Buffer | undefined {\n`;
    code += `    return packet.getAttribute(${attrKey});\n`;
    code += `  },\n\n`;
    code += `  set${methodName}(packet: RadiusPacket, value: string | Buffer): void {\n`;
    code += `    packet.addAttribute(${attrKey}, value);\n`;
    code += `  },\n\n`;
    code += `  delete${methodName}(packet: RadiusPacket): void {\n`;
    code += `    packet.deleteAttribute(${attrKey});\n`;
    code += `  },\n\n`;
    code += `  getAll${methodName}(packet: RadiusPacket): Buffer[] {\n`;
    code += `    return packet.getAllAttributes(${attrKey});\n`;
    code += `  },\n\n`;
    code += `  get${methodName}String(packet: RadiusPacket): string | undefined {\n`;
    code += `    const value = packet.getAttribute(${attrKey});\n`;
    code += `    return value?.toString('utf8');\n`;
    code += `  },\n\n`;
  });
  code += '};\n';

  const outputFileName = `${rfcName}.ts`;
  const outputFile = path.join(outputDir, outputFileName);
  fs.writeFileSync(outputFile, code, 'utf-8');
  console.log(`Generated: ${outputFile}`);
}

const dictionaryFiles = fs.readdirSync(dictionaryDir)
  .filter(file => file.startsWith('dictionary.'));
dictionaryFiles.forEach(generateAttributes);