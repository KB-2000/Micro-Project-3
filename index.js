const food = require('./food.json')

// list all the food items

food.map((foods)=>{
    console.log(foods.foodname);
});

// list all the food items with category vegetables
function list1(category){
    food.map((foods)=>{
        if(foods.category==category){
        console.log(foods.foodname);
        }
    })
}
// list all the food items with category vegetables
list1("Vegetable");

// list all the food items with category fruit
list1("Fruit");

// list all the food items with category protien
list1("Protein");

// list all the food items with category nuts
list1("Nuts");

// list all the food items with category grains
list1("Grains");

//  list all the food items with category dairy
list1("Dairy");

// list all the food items with calorie above 100

food.map((foods)=>{
    if(foods.calorie>100){
    console.log(foods.foodname);
    }
})

// list all the food items with calorie below 100

food.map((foods)=>{
    if(foods.calorie<100){
    console.log(foods.foodname);
    }
})

// list all the food items with highest protien content to lowest


food.sort((a,b)=>{return b.protiens - a.protiens})
food.forEach((foods)=>{
    console.log(foods.foodname);
})

// list all the food items with lowest cab content to highest


    food.sort((a,b)=>{return a.cab - b.cab})
    food.forEach((foods)=>{
        console.log(foods.foodname);
    })