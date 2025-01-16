const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop example//
for (let i=0; i<studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//while loop example//
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT)  {
        console.log(studentReport[i]);
    }
    i++;
}

//forEach loop example//
studentReport.forEach(function(item) {
    if (item < LIMIT) {
        console.log(item);
    
    }
});

//for...in loop example //
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }