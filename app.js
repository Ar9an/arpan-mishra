let ctrls = document.querySelectorAll(".controls");
      buttons.forEach(function (btn) {

        btn.addEventListener("click", function (event) {

            const color = event.target.innerText

            document.body.style.backgroundColor = color

        })

    })