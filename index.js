const exp = require('express')
const app = exp()

app.get('/teste', (req, res)=> {
    res.send("felipe bobão")
})


app.get('/alunos', (req, res)=> {
    res.send("oliver gay viado")
})

app.listen(3000, ()=>{console.log("Server ON")})    