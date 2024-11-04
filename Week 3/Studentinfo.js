const dateofbirth= "01/10/2002";

const getstudentname = () =>{
    return "Tenzing Norkay Sherpa"
}
const getcampusname = () =>{
    return " University of East London"
}
// exporting function and variable outside the moduel
exports.getName =getstudentname;
exports.Location =getcampusname;
exports.dob =dateofbirth;

//lets export function with parameter
exports.Studentgrade=(marks)=>
    {
    if (marks>40 && marks <70) return ("b+ grade")
    else
    return ("A grade)")
    }