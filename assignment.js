
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

//console.log (kilometerToMeter(1))





// Budget Calculator

function budgetCalculator(buyWatch,buyMobile,buyLaptop) {


if(isNaN(buyWatch)||isNaN(buyMobile)||isNaN(buyLaptop)){

    return " plese input a valid number"
}

else if(buyWatch<0 || buyMobile<0 ||buyLaptop<0)
{
    return "Price cannot be negative"
}

else{
   var watchPrice=50
   var mobilePrice=100
   var laptopPrice=500

   var budgetForWatch = watchPrice*buyWatch

   var budgetForMobile = mobilePrice*buyMobile

   var budgetForlaptop = laptopPrice*buyLaptop

   var totalBudget=budgetForWatch+budgetForMobile+budgetForlaptop

   return totalBudget
}
}


//console.log(budgetCalculator(1,2,5))


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

function megaFriend(myFriends) {
  
    if(!Array.isArray(myFriends)){
        return "this is not a arry. myFriend must be a array"
    }

   else if(myFriends.length<=0){
       return "this is empty array"
 }


else{
    var maxlength = 0
    var maxlengthName = ""
    for(var i=0; i<=myFriends.length-1; i++){

     var lengthName = myFriends[i].length

     if(maxlength<lengthName){
         maxlength=myFriends[i].length
         maxlengthName=myFriends[i]
        
     }
          
    }

    return maxlengthName

}
  
}


//console.log(megaFriend(["rana","dfdff","eeeeeeeeee","ffdfdf","tt dd ff","qq","gggggggggg","ffffffffff","hhhhhhhhhh"]))



