class Canvas {
	constructor(canvas, background) {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')
		this.background = background
		this.ctx.fillStyle = background || '#FFFFFF'
		this.ctx.fillRect(0, 0, canvas.width, canvas.height)
	}
	drawCircle(x, y, radius, color) {
		this.ctx.fillStyle = color || '#000000'
		this.ctx.beginPath()
		this.ctx.arc(x, y, radius, 0, Math.PI * 2, true)
		this.ctx.fill()
	}
	clear() {
		this.ctx.fillStyle = this.background
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
	}
}
