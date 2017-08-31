function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var child = document.getElementById('grand-node');
  var nextChild = child.children[0];
  while(nextChild) {
    child = nextChild;
    nextChild = child.children[0];
  }
  return child;
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');
  for(var i = 0; i < rankedList.length; i++) {
    var children = rankedList[i].children;
    for(var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}