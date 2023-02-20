//inicializacion contador
let count = 0;

//seleccionar valores y botones
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach (function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrementar")){
            count--;
        }else if (styles.contains("incrementar")){
            count++;
        } else {
            count = 0;
        }
        if (count > 0){
            value.style.color = "green";
        }else if (count < 0){
            value.style.color = "red";
        }else {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});