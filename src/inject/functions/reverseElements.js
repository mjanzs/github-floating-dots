export default function(parent) {
  for (let i = 1; i < parent.childNodes.length; i++){
    parent.insertBefore(parent.childNodes[i], parent.firstChild);
  }
}
