# Korean_Translator

This is a Korean translator that parses through a total of 12 JSON files to look for the correct definitions. The first 11 JSON files have over 50,000 Korean words translated in eight different languages. So far, this program only translates Korean to English. These are files from National Institute of Korean Language (국립국어원)'s Basic/Learner's Dictionary that was previously in XML format but was converted to JSON.

The last JSON file is the Korean alphabet, Hangul. This is used at the begining of the code. After breaking up the word and finding the first block of Korean, the characters are then iterated through this JSON file to find the correct Dictionary file, line start and line end. The code then goes to that file, matches the correct entry and then returns the definition. Currently, all homonym definitions will return indiscriminately.




National Institute of Korean Language (국립국어원)'s Basic/Learner's Dictionary: https://krdict.korean.go.kr/openApi/openApiInfo
