console.log("starting Note application");

const notes = require("./notes.js");
const yargs = require("yargs");

let title = yargs.argv.title;
let body = yargs.argv.body
let command = yargs.argv._[0];

if (command === "add") {
    console.log("Adding note")
    notes.addingNote(title, body);
}
else if (command === "remove") {
    console.log("Removing note");
    notes.removingNote(title);

}
else if (command === "read") {
    console.log("Reading note");
    notes.readingNote(title);
}
else if (command === "list") {
    console.log("Listing note");
    notes.listingNote(title);
}
else {
    console.log("unkown command was used !!!!")
}