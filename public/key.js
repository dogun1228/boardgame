const __keys__ = new Set ([]);
const __keyEvents__ = new Map ();

window.onkeydown = () => {
  __keys__.add (event.keyCode); //keys 셋에 키코드를 넣는다
  __keyEvents__.has (event.keyCode) && __keyEvents__.get (event.keyCode) (); //keyEvents 맵에 키코드를 찾아보고 실행
};

window.onkeyup = () => {
  __keys__.delete (event.keyCode); //키를 떼면 keys 셋에서 키코드를 제거
};

function keyTest (keyCode) {
  __keys__.has (keyCode);
}

function addKeyEvent (keyCode, callback) {
  __keyEvents__.set (keyCode, callback);
}
