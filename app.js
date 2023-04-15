// sample 1

function birthcalculator(){
    let a = new Date()
    let b = new Date()
    let date = +prompt("enter your birth date")
    let month = +prompt("enter your birth month like  0 for january and 11 for december ")
    let year = +prompt("enter your birth year")
    b.setDate(date)
    b.setFullYear(year)
    b.setMonth(month)
    let diff = (a.getTime() - b.getTime())/(1000*60*60*24*365.3)
     console.log("you are " + diff.toFixed(2) + "  years old")

}
birthcalculator();


// sample/ 2

function birthcalculator(date,month,year){
    var r = ["jan","feb","march","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    month = r.indexOf(month)
    let a = new Date()
    let b = new Date()
    b.setDate(date)
    b.setFullYear(year)
    b.setMonth(month)
    let diff = (a.getTime() - b.getTime())/(1000*60*60*24*365.3)
     console.log("you are "+ diff.toFixed(2) + "  years old")

}
birthcalculator(27,"dec",1999);



// sample 3
function birthcalculator(date,month,year){
    // var r = ["jan","feb","march","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    // month = r.indexOf(month)
    let a = new Date()
    let b = new Date()
    b.setDate(date)
    b.setFullYear(year)
    b.setMonth(month)
    let diff = (a.getTime() - b.getTime())/(1000*60*60*24*365.3)
     console.log("you are "+ diff.toFixed(2) + "  years old")

}
birthcalculator(27,11,1999);
