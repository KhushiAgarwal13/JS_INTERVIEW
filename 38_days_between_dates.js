const calculateDaysBetweenDates = (d1,d2)=>{

    let date1 = new Date(d1);
    let date2 = new Date(d2);

    let diff= date2- date1;   // IN MILLISECONDS

    console.log(diff)


    return diff/(24*60*60*1000)
// 24*60*60*1000 MILLISECONDS =  1 DAY
// DIFF  MILLISECONDS           = 1 * DIF / 24*60*60*1000
} 


console.log(calculateDaysBetweenDates("2024-01-01" , "2024-01-31"))
