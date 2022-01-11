// ========================================================================== ARROW FUNCTIONS...I know this!

//================================ Basic Function

// function LilNacheaux(argument){
//     console.log(argument);
// }

// LilNacheaux("is a cat.");

// //================================ Arrow Function

// const LilNacheaux2 = (argument) => {
//     console.log(argument);
// }

// LilNacheaux2("is a cat.");

//     // if only one arg

//     const LilNacheaux3 = argument =>{
//         console.log(argument);
//     }

//     LilNacheaux3("gets one cup of food in the morning")

//     // if no arg

//     const LilNacheaux4 = () =>{
//         console.log("is the size of a kitten.")
//     }

//     LilNacheaux4();

//     // if only one arg and just returning the arg value

//     const LilNacheaux5 = argument => argument

//     LilNacheaux5("scatches our white chairs")

// ============================================================================================= CLASSES

// class Cats {
//     constructor(){
//         this.name = "Nacheaux";
//     }
// }

// const cats = new Cats();
// console.log(cats.name)

//     // in modern JS, you may also see it like this;
//     // I'm having difficulty enabling ES6/7 syntax in Visual Code Studio...must look into this

//     // class Cats2 {
//     //     name = "Nacheaux";
//     // }

//     // const cats2 = new Cats2();
//     // console.log(cats2.name)

//     // you can also pass methods

//     class Cats3 {
//         constructor(){
//             this.name = `Lil' Nacheaux`;
//             this.printCatsName = () =>{
//                 console.log(this.name)
//             }
//         }
//     }

//     const cats3 = new Cats3();
//     cats3.printCatsName();

// Using inheritance...I know this from React

// class KleinPets{
//     constructor(){
//         this.dog = "Miles";
//     }
//     printDog(){
//         console.log(this.dog)
//     }
// }

// class RoquesPets extends KleinPets{
//     constructor(){
//         super();
//         this.cat = `Lil' Nacheaux`
//     }
//     printCat(){
//         console.log(this.cat)
//     }
// }

// const allPets = new RoquesPets();
// allPets.printDog();
// allPets.printCat();

// ============================================================================================= SPREAD AND REST OPERATORS

// Using Spread...useful for "CLONING" arrays and objects

let oldArray = [1,2,3]
const newArray = [...oldArray,4,5,6]

    // as opposed to:

    const notQuiteNewArray = [oldArray,4,5,6] //an array within an array...no bueno!

    // console.log(oldArray, newArray, notQuiteNewArray)


// Can be used on objects too!

const oldObject = {
    cat: `Lil' Nacheaux`
}

const newObject = {
    ...oldObject,
    dog: "Miles"
}

// console.log(oldObject, newObject)



    // Be careful...objects and arrays are reference (not primitive, like variables) types
    // HOWEVER...spreads make copies, not references.
    // See Below:

    // const myCat = {
    //         cat: `Lil' Nacheaux`
    // }

    // const secondCat = myCat

    // const thirdCat = {
    //     ...myCat
    // }

    // console.log(secondCat)
    // console.log(thirdCat)

    // myCat.cat = "Sazzle"

    // console.log(secondCat)
    // console.log(thirdCat)

// and Using Rest operators
    // used less often... Jeremy note: doesn't allow for naming all argument variables, which can lead to sloppy code:

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));


// ============================================================================================= REFRESHER ON MAPS
        // Not next gen JS, just good to refresh after Rest operator

        const numbers = [1,2,3];

        const doubleNumArray = numbers.map((num)=>{
            return num * 2;
        });
        
        console.log(numbers)
        console.log(doubleNumArray)


// ============================================================================================= DESTRUCTURING

    // allows you to easily access the values of arrays or objects and assign them to variables.

    const anArray = [1,2,3]

    const [a,b] = anArray;

    // console.log(a,b)
    // console.log(anArray)

    const anotherArray = [4,5,6]
    const [d, ,f] = anotherArray;
    // console.log(d,f)
    // console.log(anotherArray)

    // Also works with Objects...obvi

    const myObj ={
        name: `Lil' Nacheaux`,
        age: '5 in cat years/30 in human years'
    }

    const {name} = myObj;

    // console.log(name)
    // console.log(age)
    // console.log(myObj)

    // allows us to condense code...check this out:

    const printName = (personObj) => {
        console.log (personObj.name)
    }

    printName({name: `Lil' Nacheaux`, age: 'mind your business'});

        // this forces us to write "person.obj"
        // BUT:

        const printNameRedux = ({favoriteSnack}) =>{
            console.log(favoriteSnack)
        }

        printNameRedux({name: `Lil' Nacheaux`, age: 'none of your business', favoriteSnack: 'tuna'})

