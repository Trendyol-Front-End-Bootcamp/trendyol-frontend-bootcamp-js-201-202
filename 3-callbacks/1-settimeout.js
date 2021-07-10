function anotherFunc() {
  console.log("Zamani geldiginde calisacagim");
}

function logWithDelay() {
  anotherFunc();
  
}

setTimeout(logWithDelay, 2000);
console.log("Ben aninda calisacagim");

/**
 *  callstack        callback queue        web api / cpp api
 *
 *                                                          
 *
 *    
 *
 *  
 *      
 *  
 * 
 *  
 */
