var data = [{
    start:0,
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
    duration: 20,
    title: "Push up branch"
}
];

let start;
let duration=0;
let dataArray=[];
let temp = true;

for(i=0;i<data.length;i++){
    for(j=i+1;j<data.length-1;j++){
        if(data[j].start>data[j+1].start){
            var tempvalue=data[j];
            data[j]=data[j+1];
            data[j+1]=tempValue;
        }
    }
}

for(i=0;i<data.length-1;i++){  
    let difference = data[i+1].start-data[i].start;
    if(data[i].duration>difference){
        dataArray.push(i);
        dataArray.push(i+1);
    }
}
for( i=0;i<data.length;i++){      
    let newDiv=document.createElement("div");
    if(dataArray.includes(i)){
        if(temp == false){
            temp = true;
        }
        else{
            newDiv.style.width="45%";
            newDiv.style.left="45%";
            newDiv.style.zIndex="2";
            newDiv.style.borderBottom="2px solid white";
            temp = false;
        }       
    }
    else{
        temp = true;
    }
    duration=data[i].duration + "px";
    start=data[i].start + "px";
    newDiv.style.height=duration ;
    newDiv.style.top=start ;
    newDiv.innerHTML=data[i].title;
    newDiv.classList.add("newDiv")
    document.getElementById("timeline").appendChild(newDiv);
}
    
   
   
