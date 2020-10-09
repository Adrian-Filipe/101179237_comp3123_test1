const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(mixedList){
    let newList = [];
    let tempString = "";
    let tempNum = 0;
    for(item in mixedList){
        if(typeof item === 'string'){
            for(i = 0; i < item.length; i++){
                tempNum = item.charCodeAt(i);
                tempNum = tempNum + 20;
                tempString += String.fromCharCode(tempNum);
            }
            newList.push(tempString)
            tempString = "";
        }
    }
    return newList;
}