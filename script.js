
function login() {
    let name = document.getElementById("name").value;
    if (name == "") return alert("Enter name");

    document.getElementById("student").innerText = name;
    document.getElementById("exam").style.display = "block";
}

function result() {
    let score = 0;
    if (document.querySelector('[name="q1"]:checked')?.value == "1") score++;
    if (document.querySelector('[name="q2"]:checked')?.value == "1") score++;

    document.getElementById("score").innerText = "Score: " + score + "/2";
}
