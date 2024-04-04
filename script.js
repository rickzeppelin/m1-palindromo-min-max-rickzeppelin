function isPalindrome(str){
    let test = str.toLowerCase();
    let testNoSpace = test.replaceAll(" ", "");
    let testNoSpaceAndAccent = testNoSpace.replaceAll("á", "a");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("à", "a");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ã", "a");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("â", "a");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ä", "a");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("é", "e");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("è", "e");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ê", "a");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ë", "e");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("í", "i");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ì", "i");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("î", "i");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ï", "i");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ó", "o");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ò", "o");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("õ", "o");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ô", "o");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ö", "o");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ú", "u");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ù", "u");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("û", "u");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ü", "u");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ç", "c");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("ñ", "n");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll(",", "");
    testNoSpaceAndAccent = testNoSpaceAndAccent.replaceAll("-", "");
    let reverse = "";
    for (let i = testNoSpace.length-1; i >= 0; i--) {
        reverse = reverse + testNoSpaceAndAccent.charAt(i);
    }
    if (testNoSpaceAndAccent === reverse) {
        return true;
    }
    return false;
}

function arrayMaxMin(arr){
    /* Seu código aqui */
}
