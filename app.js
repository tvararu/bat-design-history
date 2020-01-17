require('dotenv').config()

const path = require('path')
const express = require('express')
const resize = require('./lib/resize')

const port = process.env.PORT || 8000
const staticDir = path.join(__dirname, 'public')

const app = express()

app.use(express.static(staticDir, {
  extensions: 'html',
  index: ['index.html', 'index.htm']
}))

app.all('/publish-teacher-training/:path', function (req, res) {
  res.redirect(`/publish-teacher-training-courses/${req.params.path}`)
})

app.all('/apply-teacher-training/:path', function (req, res) {
  res.redirect(`/apply-for-teacher-training/${req.params.path}`)
})

app.get('/image/:size/*.:ext', (req, res) => {
  const format = req.params.ext
  const allowedFormats = ['heic', 'heif', 'jpeg', 'jpg', 'png', 'raw', 'tiff', 'webp']

  // Calculate path to image file on disk
  const imagePath = req.path.replace(/image\/(\d+)(x)?(\d+)?/i, 'images')
  const image = path.join(staticDir, imagePath)

  // Don’t resize SVG images
  if (!allowedFormats.includes(format)) {
    res.redirect(imagePath)
    return
  }

  // Extract the resizing parameters
  // URL can provide just a width e.g. image/400/image.png
  // or also a height e.g. image/480x240/image.png
  const sizeString = req.params.size
  const widthString = sizeString.split('x')[0]
  const heightString = sizeString.split('x')[1]

  // Parse size values to integers, if possible
  let width, height
  if (widthString) {
    width = parseInt(widthString)
  }
  if (heightString) {
    height = parseInt(heightString)
  }

  // Set the content-type of the response
  res.type(`image/${format || 'png'}`)

  // Get the resized image
  resize(image, format, width, height).pipe(res)
})

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
