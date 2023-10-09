function calculateGrade(mark) {
    let grade;
  //to read true if the conditions in the case are met
    switch (true) {
        case mark >= 80:
            grade = "A";
            break;// if true prints A
        case mark >= 60 && mark < 80:
            grade = "B";
            break;// if true prints B
        case mark >= 50 && mark < 60:
            grade = "C";
            break;// if true reads C
        case mark >= 40 && mark < 50:
            grade = "D";
            break;// if true reads D
        default:
            grade = "E";
            break;// all other grades not listed in the above will fall under E
    }
    console.log(mark, grade)
  
  }
  console.log(calculateGrade(24));