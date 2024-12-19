function greet(){
    var greeting;
    time=new Date().getHours()
    if(time<12){
        greeting="Good Morning"
    }
    else if (time<17){
        greeting="Good Afternoon"
    }
    else{
        greeting="Good Evening"
    }
    document.getElementById("p1").innerHTML="The  current  time is "+time+" the greeting is " +greeting
}