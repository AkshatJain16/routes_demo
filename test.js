const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (req.url == '/') {

        // Read the most recent message from the file

        fs.readFile('FormValues.txt', (err, data) => {

            let storedData = '';

            if (!err) {
                storedData = data.toString();
            }

            res.setHeader('Content-type', 'text/html');

            res.end(
                `
                <p>${storedData}</p>

                <form action="/message" method="POST">
                <label>Name: </label>
                <input type="text" name="username">
                <button type="submit">Add</button>
                </form>
                `
            );
        });

    } else if (req.url == '/message' && req.method == 'POST') {

        let dataChunks = [];

        req.on('data', (chunks) => {
            dataChunks.push(chunks);
        });

        req.on('end', () => {

            let buffer = Buffer.concat(dataChunks);
            let formData = buffer.toString();

            const formValues = formData.split('=')[1];

            // Replace previous message with the new one
            fs.writeFile('FormValues.txt', formValues, (err) => {

                if (err) {
                    console.log(err);
                    return;
                }

                // Redirect back to the form
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    }
});

let port = 3000;

server.listen(port, () => {
    console.log('server is running');
});