const fs=require("fs");

let fetchNote=()=>{
try {
    return JSON.parse(fs.readFileSync("note.txt"))
} catch (error) {
    return []
}
}

var logNote = (note) => {
    console.log("********************************");
    console.log(`"Title:" ${note.title}`);
    console.log(`"Body:" ${note.body}`);
  }

let addingNote=(title,body)=>{
    let notes=fetchNote();
    let note={
        title,
        body
    };

  let   double = notes.filter((note) => note.title === title);
    if (!double.length){
        notes.push(note);
        fs.writeFileSync("note.txt",JSON.stringify(notes))
        logNote(note);
    }
    else {
        console.log("STOP: Title already exists.")
    }
    
}
let removingNote=(title)=>{
    let notes=fetchNote();
    let filternote=notes.filter((note)=>note.title !== title);
    fs.writeFileSync("note.txt",JSON.stringify(filternote))
}

let readingNote=(title)=>{
    let notes=fetchNote();
    let read =notes.filter((note)=> note.title === title );
     logNote(read[0]);
    // console.log(`Title: ${read[0].title}`);
    // console.log(`Body: ${read[0].body}`);
}
 let listingNote=(title)=>{
     let notes=fetchNote();
     notes.forEach((note)=>(logNote(note)))
 }
module.exports={
addingNote,
removingNote,
readingNote,
listingNote,
}