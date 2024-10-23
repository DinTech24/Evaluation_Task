var data = [{
    start:180,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];



var duration_array = [];
var start_array = [];
var startData =[];
var durArray = [];
var s = 8;
for(let i in data){
    duration_array.push(data[i].duration +"px");
    start_array.push(data[i].start +"px");
    startData.push(data[i].start);
    durArray.push(data[i].duration);
    var start_time = data[i].start;
    var duration = data[i].duration;
    var event = data[i].title;

}

// startData.sort((n1,n2)=>n1-n2);
console.log(startData);
for(i=0;i<data.length;i++){
    let newDivision = document.createElement("div");
    newDivision.style.height = duration_array[i];
    newDivision.style.top= start_array[i];
    newDivision.innerText = data[i].title;
    newDivision.classList.add("newDiv");
    if(i==data.length-1 && startData[i]-startData[i-1]<31){
        newDivision.style.marginLeft="50%";
        newDivision.style.width="50%";
        newDivision.style.zIndex="2";
        newDivision.style.borderBottom = "5px solid white";
    }
    
    if(((startData[i])+(durArray[i]))>(startData[i+1]) && ((startData[i-1])+(durArray[i-1]))<(startData[i])){
        newDivision.style.marginLeft="50%";
        newDivision.style.width="50%";
        newDivision.style.zIndex="2";
        newDivision.style.borderBottom = "5px solid white";
    }
    document.getElementById("timeline").appendChild(newDivision);
}



