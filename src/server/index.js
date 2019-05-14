const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const Character = require('./Character.js')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.get('/', (req, res) => {
	res.sendFile(`${__dirname.replace('\\server', '')}\\client\\client.html`)
})

app.use(express.static(`${__dirname.replace('\\server', '')}\\client`))

const characters = new Map()

io.on('connection', client => {
	console.log(`user connected: ${client.id}`)

	io.to(client.id).emit('change name', `user ${client.id}`)

	characters.set(client.id, new Character(50, 50, '#000000', '#FFFFFF'))
	io.emit('update', Array.from(characters))

	const disconnect = () => {
		console.log('user disconnected: ', client.id)
		characters.delete(client.id)
		io.emit('update', Array.from(characters))
	}

	const move = (x, y) => {
		characters.get(client.id).move(x, y)
		io.emit('update', Array.from(characters))
		console.log(`moved ${client.id} to ${characters.get(client.id).x}, ${characters.get(client.id).y}`)
	}
	const setColor = (mainColor, subColor) => {
		characters.get(client.id).setColor(mainColor, subColor)
		io.emit('update', Array.from(characters))
	}
	client
		.on('disconnect', disconnect)
		.on('move', move)
		.on('setColor', setColor)
})

module.exports = server
