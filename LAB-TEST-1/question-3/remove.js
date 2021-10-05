
import fs from 'fs'; 
import path from 'path'; 

if(fs.existsSync("Logs")) {
    fs.readdir("Logs", (err, files) => {
        if (err) throw err;

        for (const file of files) {
            
            const filepath = path.join("Logs", file);
            fs.unlink(filepath, err => {
                if (err) throw err;
            });
            console.log(`delete files...${file}`);
        }
        fs.rmdirSync("Logs");
    });
}