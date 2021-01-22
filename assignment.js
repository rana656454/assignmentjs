
//https://github.com/rana656454/assignmentjs


// Kilometer to meter covert 

function kilometerToMeter(walkDistance) {

  if (isNaN(walkDistance)){
        return "Please input a valid Number"
    }

    else if(walkDistance<0){
        return "distance cannot be negative"
    }
    else{
     var meterwalkDistance = walkDistance*1000
     return meterwalkDistance 
    }    
}

console.log (kilometerToMeter(1))





// Budget Calculator

function budgetCalculator(watch,mobile,laptop) {


if(isNaN(watch)||isNaN(mobile)||isNaN(laptop)){

    return " plese input a valid number"
}

else if(watch<0 || mobile<0 ||laptop<0)
{
    return "Price cannot be negative"
}

else{
   var watchPrice=50
   var mobilePrice=100
   var laptopPrice=500

   var budgetForWatch = watchPrice*watch

   var budgetForMobile = mobilePrice*mobile

   var budgetForlaptop = laptopPrice*laptop

   var totalBudget=budgetForWatch+budgetForMobile+budgetForlaptop

   return totalBudget
}
}


console.log(budgetCalculator(1,2,5))


// hotel cost


function hotelCost(totalDay){
    if (isNaN(totalDay)){
        return "Please input a valid Number"
    }

    else if(totalDay<=0){
        return "Day cannot be negative"
    }
    else{
    if(totalDay>0 && totalDay<=10){
        totalCost = totalDay*100
    }

    else if(totalDay>10 && totalDay<=20){
        var firstPackage = 10*100
        var secondPackage = (totalDay-10)*80
        totalCost = firstPackage+secondPackage 
    }

    else {
        var firstPackage = 10*100
        var secondPackage = 10*80
        var thirdPackage = (totalDay-20)*50
        totalCost = firstPackage+secondPackage+thirdPackage
    }

    return totalCost

}

}



console.log(hotelCost(100))


// Mega Friend

function megaFriend(myFriend) {
  
    if(!Array.isArray(myFriend)){
        return "this is not a arry. myFriend must be a array"
    }

   else if(myFriend.length<=0){
       return "this is empty array"
 }


else{
    var maxlengthName = 0
    var maxName = ""
    for(var i=0; i<=myFriend.length-1; i++){

     var lengthName = myFriend[i].length

     if(maxlengthName<lengthName){
         maxlengthName=myFriend[i].length
         maxName=myFriend[i]
        
     }
          
    }

    return maxName

}
  
}


console.log(megaFriend(["rana","dfdff","ffdfdf","tt dd ff","qq","fffffffffff"]))



