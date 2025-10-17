const dateofBirth= "12/12/1980"

const getstudentName = () =>
{
    return " write your name here"
}
const getCampusName = () =>
{return ("uel Campus")}
// exporting function & variable outside the module
exports.getName=getstudentName
exports.Location=getCampusName
exports.dob=dateofBirth
//how to export function with parameter
exports.Studentgrade=(marks)=>
{
    if (marks>50 && marks <70) return ("B grade")
        else
    return("A grade)")
}