const { fileURLToPath } = require('url');
const { readFile, writeFile } = require('fs');
const path = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

readFile(path.join(__dirname, 'emp.json'), 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    let customers = JSON.parse(data);

    writeFile(path.join(__dirname,'customers.json'), JSON.stringify(customers), 'utf-8', (err,data) => {
        if (err) {
            throw err;
        }
        console.log('Data written successfully');
    });
});
