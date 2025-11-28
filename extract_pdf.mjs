import fs from 'fs';
import pdf from 'pdf-parse';

async function readPdf(filename) {
    try {
        const dataBuffer = fs.readFileSync(filename);
        const data = await pdf(dataBuffer);
        console.log(`--- START OF ${filename} ---`);
        console.log(data.text);
        console.log(`--- END OF ${filename} ---`);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
    }
}

async function main() {
    await readPdf('partner_list.pdf');
    await readPdf('partner_list_landscape.pdf');
}

main();
