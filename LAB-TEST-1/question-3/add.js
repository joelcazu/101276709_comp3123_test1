
import fs from 'fs';
if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

for(let i = 0; i < 10; i++) {
    const filename = `log${i}.txt`;
    fs.writeFile(filename, 'some text', (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(filename);
}

