    // --> Maps
    const nums_1 = [1,2,3,4,5];

    const multiplyThree = nums.map((num, idx, arr)=>{
        return num * 3 + idx;
        // return num > 2;
        // return idx + num;

    })

    console.log(multiplyThree);

    // --> Filter
    const moreThanTwo = nums.filter((num, idx, arr)=>{
        return num > 2;
        // return num * 3 + idx;
        // return idx + num;
    })

    console.log(moreThanTwo);

    // --> Reduce

    const sum = nums.reduce((acc, curr, idx, arr) => {
        return acc + curr;
        // return curr > 2;
        // return curr * 3 + idx;
    },1)

    console.log(sum);
    
    var numbers = [1, 2, 3, 4];
    numbers = numbers.map(num => num * 2);

    console.log(numbers); // [2, 4, 6, 8]

    // --> PolyFill for map()

    Array.map((num,i,arr)=>{})

    Array.prototype.myMap = function (callback){
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(callback(this[i], i, this))
    }
     return temp;
    }

    const nums_2 = [1,2,3,4,5];

    const multiply_three = nums.myMap((element)=>{
        return element * 3;
    });

    console.log(multiply_three)

    // --> polyFill For Filter 

    Array.prototype.Filter = function(callBack){
        let temp = [];

        for(let i=0;i<this.length;i++){
            if(callBack(this[i], i, this)){
                temp.push(this[i])
            }
        }

        return temp;
    }

    let nums = [1,2,4,5,6];

    const even_number = nums.Filter((value)=>{
        // if(value%2==0){
        //     return value;
        // }

        return value%2==0
    })

    console.log(even_number);

    // --> polyFill for Reduce

    Array.prototype.Reduce = function (callBack,initial_value){
        var accumulator = initial_value;
        for(let i=0; i<this.length; i++){
            accumulator = accumulator?callBack(accumulator,this[i], i, this):this[i];
        }
        return accumulator;
    }

    let nums_3 = [1,2,3,4,5,6,7,8];

    const odd_sum = nums.Reduce((acc,value)=>{
            return value + acc;
    },0)

    console.log(odd_sum);

    // question --> Unacadmey JS interview Question
    // --> map vs forEach

    const arr = [2,5,3,4,7];

    const map_result = arr.map((ar)=>{
        return ar+2;
    }).filter()

    const forEach_result = arr.forEach((ar, i)=>{
        arr[i] =  ar+2;
    })

    console.log(map_result);
    console.log(forEach_result);
    console.log(arr)

    // --> output based question

    let students = [
        {Name: "Arun Verma", rollNumber: 1, Marks: 80},
        {Name: "Harsh Sanwal", rollNumber: 2, Marks: 69},
        {Name: "Jagrit Sharma", rollNumber: 3, Marks: 35},
        {Name: "Manjeet Saini", rollNumber: 4, Marks: 55}
    ];
    

    // --> Print the Name of Student in UpperCase

    let Names_1 = [];
    for(let i=0; i<students.length; i++){
        Names.push(students[i].Name.toUpperCase());
    }

    console.log(Names);

    const Names_2 = students.map((student)=>student.Name.toUpperCase());

    console.log(Names);


    // --> Question : 2 => Print Names Who have more then 60 marks

    let Names_3 = students.filter((student)=>student.Marks>60).map((student)=>student.Name);

    console.log(Names)


     // --> Question : 3 => Print Names Who have more then 60 marks && roll less then 3

    let Names_4 = students.filter((student)=> student.Marks>90 && student.rollNumber<3).map((student)=>student.Name)

    console.log(Names);


    // --> question: 4 => sum of all student marks

    let Names_5 = students.reduce((acc, student) => acc + student.Marks ,0)

    console.log(Names);


    // --> question: 5 =>  Print Details Who have more then 60 marks

    let Names = students.filter((student)=>student.Marks>60)

    console.log(Names)


    // --> question: 6 => Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

    
    let Total_Marks = students.map((student)=>{
        if(student.Marks<60){
            student.Marks+=20;
        }
        return student;
    })
    .filter((student)=>student.Marks>60)
    .reduce((acc,student)=> student.Marks + acc ,0)

    console.log(Total_Marks)