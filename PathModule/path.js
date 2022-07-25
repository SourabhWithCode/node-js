let path = require('path');
// console.log(path.dirname('/Volumes/Install macOS Monterey/macbook/Node-Js/PathModule/path.js'));
// /Volumes/Install macOS Monterey/macbook/Node-Js/PathModule

console.log(path.extname('/Volumes/Install macOS Monterey/macbook/Node-Js/PathModule/path.js'));
console.log(path.basename('/Volumes/Install macOS Monterey/macbook/Node-Js/PathModule/path.js'));
console.log(path.parse('/Volumes/Install macOS Monterey/macbook/Node-Js/PathModule/path.js'));
let myPath = (path.parse('/Volumes/Install macOS Monterey/macbook/Node-Js/PathModule/path.js'));
console.log(myPath.name);