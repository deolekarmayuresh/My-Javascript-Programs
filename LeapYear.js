// code snippet for calculating leap year

function isLeap(year) {

    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return ("It's a Leap Year");
            }else{
                return ("Not a Leap Year");
            }
        }else{
            return ("It's a Leap Year");
        }
    }else{
        return ("Not a Leap Year");
    }
}

// isLeap(2002);