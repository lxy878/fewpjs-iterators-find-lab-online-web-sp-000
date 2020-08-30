function superbowlWin(array){
  let win = array.find(obj => obj.result === 'W' );
  if (win) return win.year;
}
