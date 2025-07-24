# BEE-sem5-2025-
This repo contains daily practiced code related backened and javascript.


#  JavaScript Async & Promise Demo

This project demonstrates how JavaScript handles asynchronous functions, delays, and Promises. It includes examples of using `setTimeout`, blocking code, function calls, and Promise handling.

---

##  Code Overview

### 1. **Logging and Delay**

```js
console.log("hello");
```

* Prints "hello" immediately.

### 2. **Blocking Delay Function**

```js
function delay() {
    let currenttime = new Date().getTime();
    while(new Date().getTime() - currenttime < 4000) {
        // Blocks the thread for 4 seconds
    }
    console.log("delay done");
}
```

* A custom delay function that blocks the main thread for 4 seconds (not recommended in real applications).
* Used later in a `setTimeout`.

### 3. **setTimeout with Delay**

```js
setTimeout(delay, 0);
```

* Schedules `delay()` function to run **after the current call stack is empty**.
* Even though timeout is `0`, the `delay` function will run **after** the rest of the synchronous code is done.

### 4. **More Logs and Function Calls**

```js
console.log("bye");
function sum(a, b) {
    console.log(a + b);
}
sum(2, 3); // Logs 5
sum(4, 5); // Logs 9
```

* "bye" is printed immediately.
* Then, two sums are calculated and printed.

### 5. **Promise-based Multiply Function**

```js
function multiply(a, b) {
    return new Promise((resolve, reject) => {
        if(a > 10) {
            resolve(a * b);
        } else {
            reject("a is less than 10");
        }
    });
}
```

* This function returns a **Promise**.
* If `a > 10`, the promise is **resolved** with the result `a * b`.
* Otherwise, it is **rejected** with an error message.

### 6. **Using the Multiply Promise**

```js
multiply(11, 6)
.then((result) => {
    console.log(result); // Logs 66
})
.catch((err) => {
    console.log(err);
});
```

* Since `11 > 10`, it logs `66`.
* This runs **before** the `setTimeout` callback even though that had `0ms` delay because Promises have higher priority in the **event loop**.

---

##  Output Order Explained

```bash
hello
bye
5
9
66
delay done  # (after 4 seconds)
```

* `hello`, `bye`, and the sums are **synchronous**.
* The Promise (`66`) is resolved **before** the `setTimeout` runs.
* `delay done` appears **after 4 seconds**, due to the blocking delay inside `setTimeout`.

---

## Key Concepts Covered

* JavaScript's **Event Loop** and **Call Stack**
* How **`setTimeout()`** behaves with blocking code
* Writing and handling **Promises**
* Understanding **synchronous vs asynchronous** code flow


