class __key {
	constructor() {
		this.__keys = new Set()
		this.__keyEvents = new Map()
	}

	keyTest(keyCode) {
		this.__keys.has(keyCode)
	}

	addKeyEvent(keyCode, callback) {
		this.__keyEvents.set(keyCode, callback)
	}

	onkeydown() {
		this.__keys.add(event.keyCode) //keys 셋에 키코드를 넣는다
		this.__keyEvents.has(event.keyCode) && this.__keyEvents.get(event.keyCode)() //keyEvents 맵에 키코드를 찾아보고 실행
	}

	onkeyup() {
		this.__keys.delete(event.keyCode) //키를 떼면 keys 셋에서 키코드를 제거
	}
}

const keyBinder = new __key()

window.onkeydown = keyBinder.onkeydown.bind(keyBinder)
window.onkeyup = keyBinder.onkeyup.bind(keyBinder)
