setTimeout(() => console.log("From timeout"));

new Promise(async function (resolve, reject) {
  resolve("From Promise");
}).then(console.log);

/* Output: From Promise
           From timeout

    Our initial thought was `From Promise` would follow `From timeout` but 
    opposite happened.  So we conclude that Promise get higher priority
    than normal callbacks. So they get to callStack before other callbacks.

    Explanation: There are two separate queues for handling async 
    callbacks in JS Engine. `MacroTask Queue ` where normal callbacks are stored
    & `MicroTask Queue` where Promises are stored, so as soon as the 
    synchronous execution completes or the call stack becomes empty,
    the event loop will place the code blocks in `MacroTask Queue` one 
    after another to the call stack until it is empty and only then the 
    turn of `MacroTask Queue` comes.  
*/

async function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}
