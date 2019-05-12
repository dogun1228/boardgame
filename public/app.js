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
		canvas.drawRect(char.x, char.y, 30, 30, char.mainColor, true, 'fill')
		canvas.drawCircle(char.x, char.y, 10, char.subColor)
		console.log(char)
	})
})

$('#setColor').click(() => {
	let mainColor = prompt('메인 색을 입력하세요', '#000000')
	let subColor = prompt('보조 색을 입력하세요', '#FFFFFF')
	socket.emit('setColor', mainColor, subColor)
})
