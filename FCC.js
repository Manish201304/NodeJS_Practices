const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error('Error reading file:', err.message);
    }
    console.log(result);
    const f1 = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error('Error reading file:', err.message);
        }
        console.log(result);
        const f2 = result;
        writeFile('./content/third.txt',
            `here is the results: ${f1}, ${f2}`, { flag: 'a', encoding: 'utf8' }, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            }
        )
    });
});