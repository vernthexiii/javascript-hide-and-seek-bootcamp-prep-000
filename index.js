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
