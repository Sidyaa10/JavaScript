//Default Parameters
//Default parameters allow functions to have predefined values that are used if no arguments are passed to the function..

function writeCode(language = 'JavaScript'){
    console.log(`I am writing code in ${language}`);
}

writeCode('Python');
writeCode('C++');
writeCode('Java');
writeCode(); //default parameter will be used in this case which is JavaScript

//Another Example
function codeDetails(language='JavaScript', tool='VS Code'){
    console.log(`I am writing code in ${language} using ${tool}`);
}

codeDetails('Python');
codeDetails('Java','IntelliJ IDEA');
codeDetails('Ruby','Sublime Text');
codeDetails();

