class __key__ {
	constructor() {
		this.__keys__ = new Set([])
		this.__keyEvents__ = new Map()
	}

	keyTest(keyCode) {
		this.__keys__.has(keyCode)
	}

	addKeyEvent(keyCode, callback) {
		this.__keyEvents__.set(keyCode, callback)
	}

	onkeydown() {
		this.__keys__.add(event.keyCode) //keys 셋에 키코드를 넣는다
		this.__keyEvents__.has(event.keyCode) && this.__keyEvents__.get(event.keyCode)() //keyEvents 맵에 키코드를 찾아보고 실행
	}

	onkeyup() {
		this.__keys__.delete(event.keyCode) //키를 떼면 keys 셋에서 키코드를 제거
	}
}

const keyBinder = new __key__()

window.onkeydown = keyBinder.onkeydown.bind(keyBinder)
window.onkeyup = keyBinder.onkeyup.bind(keyBinder)
