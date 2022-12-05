

const J_1 = require('./dictionary_json/1.json');
const J1_LEXICAL_ENTRY = J_1.LexicalResource.Lexicon.LexicalEntry

const J_2 = require('./dictionary_json/2.json');
const J2_LEXICAL_ENTRY = J_2.LexicalResource.Lexicon.LexicalEntry

const J_3 = require('./dictionary_json/3.json');
const J3_LEXICAL_ENTRY = J_3.LexicalResource.Lexicon.LexicalEntry

const J_4 = require('./dictionary_json/4.json');
const J4_LEXICAL_ENTRY = J_4.LexicalResource.Lexicon.LexicalEntry

const J_5 = require('./dictionary_json/5.json');
const J5_LEXICAL_ENTRY = J_5.LexicalResource.Lexicon.LexicalEntry

const J_6 = require('./dictionary_json/6.json');
const J6_LEXICAL_ENTRY = J_6.LexicalResource.Lexicon.LexicalEntry


const J_7 = require('./dictionary_json/7.json');
const J7_LEXICAL_ENTRY = J_7.LexicalResource.Lexicon.LexicalEntry


const J_8 = require('./dictionary_json/8.json');
const J8_LEXICAL_ENTRY = J_8.LexicalResource.Lexicon.LexicalEntry

const J_9 = require('./dictionary_json/9.json');
const J9_LEXICAL_ENTRY = J_9.LexicalResource.Lexicon.LexicalEntry

const J_10 = require('./dictionary_json/10.json');
const J10_LEXICAL_ENTRY = J_10.LexicalResource.Lexicon.LexicalEntry

const J_11 = require('./dictionary_json/11.json');
const J11_LEXICAL_ENTRY = J_11.LexicalResource.Lexicon.LexicalEntry

const hangul = require('./dictionary_json/Hangul.json');

let kWord = '가' //WHAT WE ARE TRANSLATING

let letterArray;

divideSections(kWord);

// BEGINNING OF ANALYIZING WORDS
function divideSections(kWord){
  let splitWord = kWord.split('');
  
  letterArray = splitWord[0];
  if (splitWord[0] === '-') {
    letterArray = splitWord[1];
  };
}


let correctDoc;
let searchStart;
let searchEnd;

//FINDING AND ASSIGNING THE CORRECT DOC/LINES IN THE HANGUL.JSON DOC

for (const property in hangul) {
  for (const array in hangul[property]){
   for (let char = 0; char < hangul[property][array].length; char++){
     if (letterArray === hangul[property][array][char]){
      let hangulArray = hangul[property][array];  

        correctDoc = eval(hangulArray[hangulArray.length-1][0]);
        searchStart = eval(hangulArray[hangulArray.length-1][1]);
        searchEnd = eval(hangulArray[hangulArray.length-1][2]);
        
        koreanWord(kWord, correctDoc, searchStart, searchEnd);
        return 
     }
   }
  }
 }

//SEARCHING FOR THE WORDS' DEFINITIONS
function koreanWord(kWord, correctDoc, searchStart, searchEnd){
  let Word;
    for (searchStart; searchStart < searchEnd; searchStart++) {

      if (correctDoc[searchStart].Lemma.feat?.val === undefined){
        Word = correctDoc[searchStart].Lemma[0].feat.val;
      }else{
        Word = correctDoc[searchStart].Lemma.feat.val;
      }

      if(Word === kWord) {
        console.log(`=> ${kWord}: ${correctDoc[searchStart].Sense[1]?.Equivalent[5].feat[1].val 
          || correctDoc[searchStart].Sense.Equivalent?.[5].feat[2].val 
          || correctDoc[searchStart].Sense.feat.val}`)
      }
    }
}



