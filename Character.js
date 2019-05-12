module.exports = class Character {
	constructor(x, y, mainColor, subColor) {
		this.x = x
		this.y = y
		this.mainColor = mainColor
		this.subColor = subColor
	}
	setColor(mainColor, subColor) {
		this.mainColor = mainColor
		this.subColor = subColor
	}
	move(x, y) {
		this.x += x
		this.y += y
	}
}
