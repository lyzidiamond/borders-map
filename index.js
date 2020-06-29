const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

console.log(__dirname)

app.use((express.static(path.join(__dirname, 'public'))))

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => console.log(`example app listening at ${PORT}`))


/*
i want the map to stay the same
and i want the sidebar to update on click
from a server, probs
no! in memory

*/