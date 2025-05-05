// Task 1
function greeting(name){
    console.log(`${name} is a JS developer`);
}
greeting("Məhəmmədarif")

// Task 2
function user(userName){
    console.log(`${userName} is active now`);
}

user("Vaqif")
user("Kamran")
user("Kənan")

//Task 3
function max_num(a, b, c){
    if(a > b && a > c){
        console.log(a);
    }else if(b > a && b > c){
        console.log(b);
    }else if(c > a && c > b){
        console.log(c);
    }else{
        console.log("Invalid input");
    }
}

max_num(5, 6, 2)