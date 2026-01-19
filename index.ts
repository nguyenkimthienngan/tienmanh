import { mul, sub, div } from './utils'
import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  const a = { a: 5, b: 10 }
  const b = { a: 3, b: 7 }
  res.json({
    sub: sub(a),
    mul: mul(a, b),
    div: div(a)
  })
})
app.listen(port, () => {
  console.log(`port: ${port}`)
})
