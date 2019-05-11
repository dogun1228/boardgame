const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}\\public\\client.html`)
})

app.use(express.static(`${__dirname}\\public`))

class Character {
	constructor(x, y, color) {
		this.x = x
		this.y = y
		this.color = color
	}
	move(x, y) {
		this.x += x
		this.y += y
	}
}

let chars = new Map()

function main(socket) {
	console.log('user connected: ', socket.id)
	const name = `user ${socket.id}`
	io.to(socket.id).emit('change name', name)

	chars.set(socket.id, new Character(50, 50, '#00FF00'))
	io.emit('update', Array.from(chars))

	socket.on('disconnect', () => {
		console.log('user disconnected: ', socket.id)
		chars.delete(socket.id)
		io.emit('update', Array.from(chars))
	})

	socket.on('move', (x, y) => {
		chars.get(socket.id).move(x, y)
		io.emit('update', Array.from(chars))
		console.log(`moved ${socket.id} to ${chars.get(socket.id).x}, ${chars.get(socket.id).y}`)
	})
}

io.on('connection', main)

http.listen(3000, () => {
	console.log('server on!')
})
