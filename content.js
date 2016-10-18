var elements = document.getElementsByTagName('*');
console.log('in content.js:', elements);

for(let i = 0; i < elements.length; i++) {
  let elem = elements[i];

  for(let j = 0; j < elem.childNodes.length; j++) {
    let node = elem.childNodes[j];

    if(node.nodeType === 3) {
      let text = node.nodeValue;
      let drumpfText = text.replace(/Trump/gi, 'Drumpf');

      if(drumpfText !== text) {
        elem.replaceChild(document.createTextNode(drumpfText), node);
      }
    }
  }
}