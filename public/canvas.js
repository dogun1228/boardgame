class Canvas {
	/**
	 * 캔버스 Element를 받아서 관리해줍니다
	 * @param {canvas} canvas
	 * @param {color} background
	 */
	constructor(canvas, background = '#FFFFFF') {
		this.canvas = canvas
		this.ctx = canvas.getContext('2d')
		this.background = background
		this.setcolor(background)
		this.ctx.fillRect(0, 0, canvas.width, canvas.height)
	}
	/**
	 * x,y 좌표를 중심으로 하는 반지름이 radius인 원을 그립니다.
	 * @param {*} x
	 * @param {*} y
	 * @param {*} radius
	 * @param {*} color
	 */
	drawCircle(x, y, radius, color = '#000000') {
		this.setcolor(color)
		this.ctx.beginPath()
		this.ctx.arc(x, y, radius, 0, Math.PI * 2, true)
		this.ctx.fill()
	}
	/**
	 * x,y 좌표에서 시작하는 가로가 width, 세로가 height인 직사각형을 그립니다.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {color} color
	 * @param {boolean} center 참이라면, 대신 중심이 x,y인 직사각형을 그립니다.
	 * @param {string} mode 그리기 모드를 정합니다. fill, clear, stroke
	 */
	drawRect(x, y, width, height, color = '#000000', center = true, mode = 'fill') {
		if (center) {
			x -= width / 2
			y -= height / 2
		}
		this.setcolor(color)
		this.ctx[`${mode}Rect`](x, y, width, height)
	}
	/**
	 * 다음 그리기 색을 설정합니다.
	 * @param {color} color
	 * @private
	 */
	setcolor(color) {
		this.ctx.fillStyle = color
	}
	clear() {
		this.setcolor(this.background)
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
	}
}
