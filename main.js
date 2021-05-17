// Task 1
class Backpack {

    // properties 
    constructor(size, color){
        this.size = size;
        this.color = color;
        this.items = [];
        this.open = false;
    }

    // methods 
    openBag() {
        this.open = true;
        console.log("the bag is open: " + this.open);
    }

    closeBag(){
        this.open = false;
        console.log("the bag is open: " + this.open);
    }

    putIn(item){
        if(this.open = true){
            this.items.push(item);
            console.log(this.items);
        } else {
            console.log("bag is not open")
        }
    }

    takeOut(item){
        if (this.open = true){
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i] == item) {
                    this.items.splice(i, 1);
                    console.log(this.items);
                }
            }
        } else {
            console.log("bag is not open")
        }
    }
}


// Task 2
let backpack1 = new Backpack("small", "blue");
let backpack2 = new Backpack("medium", "red");
let backpack3 = new Backpack("large", "green");

// Task 3

backpack1.openBag();
backpack1.putIn("lunch");
backpack1.putIn("jacket");
backpack1.closeBag();
backpack1.openBag();
backpack1.takeOut("jacket");
backpack1.closeBag();

// console log to make sure class works
console.log(backpack1);   
console.log(backpack2);  
console.log(backpack3);  
