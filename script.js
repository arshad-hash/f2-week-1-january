/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let aree = [
    { id: 7, name: "joh", age: "15", profession: "fitter" },
    { id: 5, name: "jac", age: "29", profession: "electrician" },
    { id: 6, name: "kare", age: "12", profession: "welder" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((a)=>{
       
        if(a.profession=="developer")
        {
            console.log(a.name);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((a)=>{
       
        if(a.profession=="developer")
        {
            console.log(a.name);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let person ={id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(person);
    console.log(arr);
    
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((a,i)=>{
       
        if(a.profession=="admin")
        {
            arr.splice(i,1);
        }
    }); console.log(arr)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let one =arr.concat(aree);
    console.log(one);
  }
 