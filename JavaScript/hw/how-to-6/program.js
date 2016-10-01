// console.log("HELLO ES6");

// var name = process.argv[2]
//
// console.log(`Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`)

// var inputs = process.argv.slice(2);
// var result = inputs.map(input => input[0])
//                     .reduce((a,b) => a+b);
// console.log(`[${inputs}] becomes \"${result}\"`);

// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(() => {console.log(this.yelp)});
//     }
// };
// foot.kick();

// var numbers = process.argv.slice(2);
// var result = numbers.map(number => Number(number));
// var minNumbers = Math.min(...numbers);
// console.log(`The minimum of [${result}] is ${minNumbers}`)

// module.exports = function average(...args) {
//     var sum = args.reduce((a,b) => a+b,0);
//     return sum/args.length;
// };

// module.exports = function midpoint(lBound = 0, uBound =1) {
//     return (lBound + uBound)/2;
// };

// module.exports = function makeImportant(input, imp = input.length){
//   return input + '!'.repeat(imp);
// }

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(tpls, ...args) {
    var str = tpls[0];
    for (var i = 0; i < args.length; i++) {
        str = str + escape(args[i]) + tpls[i + 1];
    };
    return str;
}

function escape(raw) {
    return raw.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
};
