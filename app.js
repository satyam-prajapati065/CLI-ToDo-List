import realline from "readline";

const rl = realline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];
const showMenu = () => {
  console.log("\n 1: Add Task");
  console.log("\n 2: View Task");
  console.log("\n 3: Exit");
  rl.question("Choose an option:", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter the Task:", (task) => {
      todos.push(task);
      console.log("Task Added:", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\n Your Todo List");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Good Bye");
    rl.close();
  } else {
    console.log("Invalid Option. Please Try Again...");
    showMenu();
  }
};

showMenu();
