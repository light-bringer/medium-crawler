
const axios   = require('axios').default;
const { Parser } = require("htmlparser2");
const { DomHandler } = require("domhandler");
const cheerio = require('cheerio');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
  }
};

// request('https://medium.com/topic/popular', options=options, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


axios.get('https://medium.com/topic/popular', ).then((data)=> {
  //console.log('axios', data);
  const rawHtml = data.data;

  const handler = new DomHandler(function(error, dom) {
    if (error) {
        // Handle error
    } else {
        // Parsing completed, do something
        console.log(dom);
    }
});
const parser = new Parser(handler);
parser.write(rawHtml);
parser.end();
let newdata = cheerio.load(rawHtml);
console.log(newdata)
// console.log("NORMALIZED")
// console.log(rawHtml.normalize("NFKD"));

});
// String.prototype.normalize("NFKD");