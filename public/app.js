const socket = io()
const canvas = new Canvas(document.getElementById('main'), '#F6cbd5')

socket.on('change name', name => {
	$('#name').html(name)
	console.log(name)
})

// w | up | 87
// a | left | 65
// s | down | 83
// d | right | 68
keyBinder.addKeyEvent(87, () => {
	socket.emit('move', 0, -4)
})

keyBinder.addKeyEvent(65, () => {
	socket.emit('move', -4, 0)
})

keyBinder.addKeyEvent(83, () => {
	socket.emit('move', 0, 4)
})

keyBinder.addKeyEvent(68, () => {
	socket.emit('move', 4, 0)
})

socket.on('update', chars => {
	canvas.clear()
	chars.forEach(element => {
		let char = element[1]
		canvas.drawCircle(char.x, char.y, 10, char.color)
		console.log(char)
	})
})
