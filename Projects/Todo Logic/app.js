let option = prompt("What would you like to do?");
let todo = [];

while (option !== "quit") {
  if (option === "new") {
    todo.push(prompt("Enter new todo"));
  } else if (option === "list") {
    console.log("**********");
    for(let item in todo){
        console.log(`${item}: ${todo[item]}`);
    }
    console.log("**********");
  } else if (option === "delete") {
    let index = parseInt(prompt("Enter index of todo to delete"));
    if(index){
        todo.splice(index, 1);
    }
  }

  option = prompt("What would you like to do?")
}
