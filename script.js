let age = 16;
if (age < 18){
    welcome();
    function welcome() {
        alert("Helllo");
    }
    welcome();
}else{
    function welcome() {
        alert("Greetings");
    }
}
welcome();