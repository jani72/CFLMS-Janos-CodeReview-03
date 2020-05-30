function calculateInsurance() {
    var fname=document.getElementById("fname").value;
    var age=document.getElementById("Age").value;
    var horsepower=document.getElementById("horsepower").value;
    var country=document.getElementById("Country").value;
    console.log(country);
    switch(country){
        case("Austria"):
        var insurance=horsepower * 100 / age +50;
        break;
        case("Hungary"):
         var insurance=horsepower * 120 / age +100;
        break;
        case("Greece"):
        var insurance=horsepower * 100 / age +50;
        break;
        
     
    }
    document.getElementById("result").innerHTML= insurance;

}

/* 
(20) Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

For Austria : insurance = horse_power x 100 / age   + 50;

For Hungary: insurance = horse_power x 120 / age  + 100;

For Greece: insurance = horse_power x 150 / (age+3)  + 50;




*/ 



