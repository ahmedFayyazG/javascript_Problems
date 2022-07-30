// const numbers  = [12,22,33,44,55,66,77,88];

// let arr = [];

// const toString = (num) => {
//     arr.push(num)
// }

// numbers.forEach(toString)

// var str= ""
// for(let i=0; i< arr.length; i++){
//         str = str.concat(arr[i])
// }


// console.log(str)


//  //Strings Concatinations


// const DiceRoll = () => {
//     let roll = Math.floor(Math.random() * 7);

//     console.log(roll);
//     return roll
// }

// DiceRoll()

//____________________________________________________________________________________

const isValid = (password, userName) => {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(userName) !== -1;

    console.log(!tooShort && !hasSpace && !tooSimilar)
    return !tooShort && !hasSpace && !tooSimilar;
}


// isValid("89323 23423", "Bakra321")

//Password Validation
//____________________________________________________________________________________________________________

                            //Average Value in an array of numbers. 
const Average = (num) => {
    let sum = 0;
   for(let i = 0 ; i < num.length; i++){
        sum = sum + num[i]
   }
   console.log(sum / num.length)
}

// Average([75, 76,80,95,100])
//____________________________________________________________________________________________________________


const isPangram = (str) => {
    //Use Splice, indexOf, toLowerCase, loop.
    let loweredCase = str.toLowerCase()
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
      if (!loweredCase.includes(char)) {
          console.log("Fasla")
          return false;
      }
  }
    console.log('True');
    return true;


}
// isPangram("We promptly judged antique ivory buckles for the next prize")
        //Panagram
//____________________________________________________________________________________________________________

 
const numbers = [20, 21,22, 23 ,25 , 26, 27 ]


const double = (num) => {
    console.log(num * num);
    return (num * num);
}
// numbers.forEach(double)

//____________________________________________________________________________________________________________
const bookes = [{
title: "adam",
authors: ["abdul", "haseeb"],
ratings: 3.5

},
{
    title: "Chemistry",
    authors: ["Sabir", "Shakir"],
    ratings: 3.5
},
{
    title: "Math",
    authors: ["Ravina", "Tandon"],
    ratings: 3.5
},
{
    title: "Computer",
    authors: ["Tera", "Data"],
    ratings: 3.5
}
]
const Print = (obj) => {
    console.log(
        "Title:" ,obj.title, "Author:", (obj.authors)
    )
}

// bookes.forEach(Print)

//____________________________________________________________________________________________________________


// let movies = ["A", "AF", "AFNAN" , "FAYYAZ"];
// let movieays  = movies.map(m => {
//     return m.toLowerCase()
// })
// let movue = movieays.find(movue => {
//     // let found = movue.includes("james")
//   let found =  movue.indexOf("afnans") == 0;
//     return found
// })

// if (movue) {
//     console.log("Movbie Found")
// }
// else {
//     console.log("404")
// }

//____________________________________________________________________________________________________________
//Filters

//  const nums = [34, 5, 4, 9, 99, 123, 3432, 93, 63, 085, 88]

//  const ods = nums.filter(n => n % 2 === 1)  
//  console.log(ods)


// let movies = ["A", "AF", "AFNAN" , "FAYYAZ"];
// const name = movies.filter(n => n !== "AF");

// console.log(name);



const books = [{
    title: "adam",
    authors: ["abdul", "haseeb"],
    ratings: 2.5
    
    },
    {
        title: "Chemistry",
        authors: ["Sabir", "Shakir"],
        ratings: 5
    },
    {
        title: "Math",
        authors: ["Ravina", "Tandon"],
        ratings: 3.5
    },
    {
        title: "Computer",
        authors: ["Tera", "Data"],
        ratings: 1.5
    }
    ]


    // const myBooks = books.filter(n => n.authors.includes("Sabir"))
    // console.log(myBooks)

//____________________________________________________________________________________________________________
const price = [400, 300, -20, 1111, 9999.22, 10];

const sort = price.sort((a,b ) => a - b);

// console.log(sort);

//____________________________________________________________________________________________________________
// Reduce

const price2 = [400, 300, -20, 1111, 9999.22, 10];

let max = 500
const result =  price2.reduce((accumulator, cv) => {
    
    return cv;
    // return accumulator
})

console.log(result);

//____________________________________________________________________________________________________________
//Spreads
 const Dog = {
     name: "Labradour",
     age: "6 months"
 }

 const Cat = {
    name: "Persian",
    age: "4 months"
 }

const Pets = [{...Dog.name},[...Cat.age]]

// console.log(Pets);
//____________________________________________________________________________________________________________
//Destructuring

//  console.log(FN("Ahmed", "Fayyaz", "Perfect", "Owns 3 HEavyBikes")); 






//____________________________________________________________________________________________________________

// const Table = {
//     mountain: ["M", "as", "asdw3", "asdefeg"],
//     print: function(delay = 1000) {
//         setTimeout(() => {
//         console.log(this.mountain.join(", "));
//         }, delay)
//     }
// }

// Table.print()




// Names("Ahmed", "Ali", "Hassan", "Jalil" , "Mustafa");


//____________________________________________________________________________________________________________

// let list = [{title: "Red Red"} , {title: "Lawn"},  {title: "Lawn"}];
// const addcolors = (title, colors) => {
// colors.push({title: title});
// return colors;
// }

// (addcolors("ajraki", list));
// (addcolors("atrangi", list));
// (addcolors("satrangi", list));
// (addcolors("ashrafi", list));

// console.log(list.length);

//____________________________________________________________________________________________________________
