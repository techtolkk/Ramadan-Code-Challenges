



// ---------------1-Multiples of 3 or 5-------------

// marka hore waxas samynysa variable aad ku shubto sum ka
let sum = 0
// loopkan waxa uu inoo soo saraya numberksa u dhexeeya 0 - 10 ( 123456789) 
for (let i = 1; i < 10; i++) {

    // conditonkan wuxuu inoo hubinyaa laba shay 
    // hdi tiro ka mid ah ( 123456789) uu u qaybsamo 3 ama 5  wuxuu kudaraya sum ka 
    // sidoo kle modulatorka (%) wuxu hubinya hdii makra tiro loo qaybiyo 3 ama 5, 
    // hdii hadhaa soo hadho macnehedo waxa weye tiradasi uma qaybsamayso
    //then
    // hday u qaybsanto 3 ama 5 sumka waxad ku dartaa waxa (i) waxa ku jira 
    if (i % 3 === 0 || i % 5 === 0) {

        sum += i
    }


}

console.log(sum)

// -------------2-Counting Duplicates-------------

const text = "aabBcde"
// labdan loop waxan inoo qabanyan wuxu dhex maraya mid walba dhaman xarf kaste oo oo textka ku jira si aynu  barbardhigno xarafaha 
for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < i; j++) {
        //conditionkan wuxuu is barbardhigya labada xaraf ee labda loop maryaan 
        //tusale hdii text[i] uu legyy text[j] its a case insensitive it means text contain two same characters

        if (text[i].toLowerCase() === text[j].toLowerCase()) {


            console.log(`${text[i]} appear twice, case insensitive`)
        }
    }

}



//-----------3-Detect Pangram-------------

let mytext = 'The quick brown fox jumps over the lazy dog';

// first waxaan initial ku sameny variable ka koban all alphaberic  character

const AtoZ = 'abcdefghijklmnopqrstuvwxyz'
 
// seconly waxaan ka jebniy textkena sido kle waxan kasry spaceka kedib waxa u badly xarfo yaryar (lowarcase)
const textarray = mytext.split(' ').join('').toLowerCase()
 
// thirdly labda loop ka hore wuxuu midmid u dhex galya (textarray) ka ka labdna (AtoZ) 
// kedib conditionka ayaa is barbardhigya textarray iyo AtoZ
// hdi uu run noqdo wuxuu so celinya true
for (i = 0; i < textarray.length; i++) {
    for (j = 0; j < AtoZ.length; j++) {
        if (textarray[i].includes(AtoZ[j])) {
            console.log(true)
        }



    }
}


// ----------------------------------------4-Your Order, Please ------------
//Example: "is2 Thi1s T4est 3a" → "Thi1s is2 3a T4est"


// solutionkan wuxuu ka kobanyy sadex qybood 
// 1. si aynu u  sort greno textka first wan kala jabiyy  kedib waxa kaso sary numberka ku jira 
//  anigoo ku shuby numberki iyo textkiba  pair array 


const Ordertxt = "is2 Thi1s T4est 3a"
const newarray = []
  
const split = Ordertxt.split(' ')
for (i = 0; i < split.length; i++) {
    const match = split[i].match(/[1-4]/)
    if (split[i].includes(match[0])) {
        newarray.push([parseInt(match[0]), split[i]])

    }

}
 
 
// 2. mar labd waxn samyy labd loop oo dhexgalaya newarryga 
// kedib conditionka ayaa is barabrdhig ku samynya pairska hdii newarray[i][0] uu kayarado  newarray[j][0] wuxu kushub textga arraysorted = []
const arraysorted = []
for (i = 0; i < newarray.length; i++) { 
    for(j = 0; j < i; j++){
    if (newarray[i][0] < newarray[j][0]) {
         arraysorted.push(newarray[i], newarray[j])
    }
    }
}
//  console.log(arraysorted)
// 3. ugu dambyn waxaynu hysany arry sorted ah oo ka koban pairs [[2, 'is2']]..... saas oo kle ah 
// kedib waxy u samynyana loop dhexglya nasted arrayga si aan uga soo qdo textga kuna shubo arrayga cusb 
let textSorted = []
for(i = 0; i < arraysorted.length; i++){
    textSorted.push(arraysorted[i][1])
}
console.log(textSorted.join(' '))
 



// ------------------------------5- Array Diff ------------


const arry1 = [1, 2, 2, 2, 3]
const arry2 = [2]
const result = []

// waxaan samyny laba loop ka hore wuxuu dhex galya arry1 ka labdna array2 

for (i = 0; i < arry1.length; i++) {
    for (j = 0; j < arry2.length; j++) {
        // kedib conditionkan ayaa is barbardhigya array[i] iyo array[j]
        // hdi uu false noqdo waxan ku bush graynya result[] arryga 
        if (arry1[i] !== arry2[j]) {
            result.push(arry1[i])
        }
    }
}

console.log(result)







