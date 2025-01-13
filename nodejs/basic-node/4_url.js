const url = require('url');

const { URL } = url;   //구조분
// 해 할당
const myURL = new URL('https://docs.github.com/ko/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop');


// console.log('url ==>> ', url);
console.log('URL ==>> ', URL);
console.log('myUrl', myURL);
console.log('utl.format()', url.format('myUrl'));



