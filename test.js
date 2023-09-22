import fs from 'node:fs/promises';

const readPJSon = async (path) => {
   const pjsonPath =new URL('./package.json', import.meta.url).pathname;
    const pjson = await fs.readFile(pjsonPath, 'utf-8');
    return JSON.parse(pjson);
}

console.log(await readPJSon());