

const counter = document.getElementById("counter");

 let count = 0;
 function incrementValue() {
    count++;
    counter.innerText = count;
}
 function decValue() {
    count--;
    counter.innerText = count;
 } 



// const a = 5;
// const b = 9;
// console.log("----------value of a------:", a);

// try {
//     a = 6;
// console.log("----------value of a------:", a);
// } catch(error) {
//     console.log(error);
// }


// console.log("----------value of b------:", b);

// function myPromise(resolve, reject){
//     let delay = 1000000;
//     while (delay--);

//     reject("hello world");
// }
    const mypromise = new Promise(solve);

    function solve(fun1, fun2) {
        // code...
        let n = 999;
        
        while(n--)
        fun1("Data");
    }

    // console.log(mypromise);

    console.log("------A-------");
    console.log(mypromise);
    console.log("------B-------");


