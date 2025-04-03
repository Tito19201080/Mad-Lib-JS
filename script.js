// Mad Lib

document.getElementById("btn").addEventListener("click", madLib)
function madLib() {
    let schoolsubject = document.getElementById("school-in").value;
    let color = document.getElementById("color-in").value;
    let noun = document.getElementById("noun-in").value;

    let msg = `In ${schoolsubject} class, our teacher was wearing a ${color} ${noun}`

    document.getElementById("output").innerHTML = msg;
}