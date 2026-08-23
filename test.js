const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if(req.url=='/'){
        //form

        res.setHeader('Content-type', 'text/html');

        res.end(
            `
            <form action="/message" method="POST">
            <label>Name: </label>
            <input type="text" name="username"></input>
            <button type="submit">Add</button>
            </form>
            
            `
        )
    }else{
        if(req.url=='/message'  && req.method==='POST'){
            res.setHeader('Content-type','text/html');

            let dataChunks=[];
            req.on('data',(chunks)=>{
      
                dataChunks.push(chunks);
            })

            req.on('end',()=>{
                let buffer = Buffer.concat(dataChunks);
                console.log(buffer);

                let formData = buffer.toString();
                console.log(formData);

                const formValues = formData.split('=')[1];

                fs.writeFile('FormValues.txt', formValues, (err)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    
                    res.statusCode = 302 //redirected
                    res.setHeader('Location', '/');
                    res.end();
                })
            })
        }
        else{
            if(req.url==='/read'){
                //read from the file

                fs.readFile('FormValues.txt',(err,data)=>{
                    console.log(data.toString());

                    res.end(
                        `
                        <h1>${data.toString()}</h1>
                        `
                    );
                })
            }
        }
    }
})

let port =3000;
server.listen(port, ()=>{
    console.log('server is running');
})