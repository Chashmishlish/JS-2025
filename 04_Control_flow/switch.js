/* Switch-case statement => think it in this way
bht saaray locks hain humare pass, ek humare pass chabi hai 
jese locks jan, feb,...dec || key means month
jo bhi talah khul jayega us chabi se us talay ky code ko execute krden ge

switch (key) {
    case value:
        break;

    default:
        break;
}

JavaScript me by default switch statement me fall-through behavior hota hai.
Matlab agar aap break nahi lagayengi to jahan pe case match hoga uske baad ke sare cases execute ho jate hain jab tak break nahi milta. Isko fall-through kehte hain.

*/

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); //march
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("No match!");
        break;
}

