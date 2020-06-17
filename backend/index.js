const app = require('express')()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const errorHandler = () => {
    return null
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})