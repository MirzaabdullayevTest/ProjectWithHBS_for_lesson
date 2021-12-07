const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url);  // qaysi url ga so'rov berilayapti
    if (req.url === '/') {
        res.write('Serverdan javob qaytdi')
        res.end()
    }

    if (req.url === '/books') {
        res.write(JSON.stringify(['Diqqat', 'Million dollarlik xatolar', 'Marketing 5.0']))
        res.end()
    }
})

server.listen(3000, () => {
    console.log('Server 3000 portda ishlayapti...');
})