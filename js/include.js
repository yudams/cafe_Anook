// head
fetch('/head.html')
    .then(response => response.text())
    .then(data => {
        document.head.innerHTML += data
    })
    .catch(error => consol.log("에러 : ", error))

// header
fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header_wrap").innerHTML += data
        // 모바일 메뉴 버튼 클릭했을 때 메뉴버튼 만들기
        let btn_gnb = this.document.querySelector("#btn_gnb")
        let hidden_gnb = this.document.querySelector(".hidden_gnb")
        let btn_close_gnb = this.document.querySelector("#btn_close_gnb")
        let header = document.querySelector("header")

        btn_gnb.addEventListener("click", function () {
            hidden_gnb.classList.add("on")
        })
        btn_close_gnb.addEventListener("click", function () {
            hidden_gnb.classList.remove("on")
        })

        setTimeout(() => {
            header.style.transition = "all .5s ease 0s"
            hidden_gnb.style.transition = "all .5s ease 0s"
        }, 100);

    })
    .catch(error => consol.log("에러 : ", error))

// footer
fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.documentElement.querySelector("footer").innerHTML += data
    })
    .catch(error => consol.log("에러 : ", error))

// fixed_menu
fetch('/fixed_menu.html')
    .then(response => response.text())
    .then(data => {
        document.documentElement.querySelector(".fixed_menu").innerHTML += data

        let fixed_menu = this.document.querySelector(".fixed_menu")
        let lastScrollTop = 0
        let hideTimeout

        setTimeout(() => {
            fixed_menu.style.transition = "all .6s ease 0s"
        }, 100);

        this.window.addEventListener("scroll", function () {

            // 스크롤 했을 때 실행되는 동작

            let scrollTop = this.document.documentElement.scrollTop
            // 위에서 스크롤바가 얼만큼 내려왔는지 계산해 변수에 저장

            // 2초 뒤에 함수가 실행(고정 메뉴가 사라짐)
            if (scrollTop < lastScrollTop) {
                // 마우스 휠을 위로 올렸을 때
                fixed_menu.classList.add("on")

                // 이미 존재하는 예약 타임이 있다면 제거
                if (hideTimeout) {
                    this.clearTimeout(hideTimeout)
                }

                hideTimeout = this.setTimeout(function () {
                    fixed_menu.classList.remove("on")
                }, 2000)
            } else {
                // 마우스 휠을 아래로 내렸을 때
                fixed_menu.classList.remove("on")
            }

            lastScrollTop = scrollTop
        })

        // 하단 메뉴에 마우스를 올리면 기존에 설정되어 있던 함수(2초 뒤에 사라지는 동작)이 취소됨
        fixed_menu.addEventListener("mouseover", function () {
            clearInterval(hideTimeout)
        })

        fixed_menu.addEventListener("mouseout", () => {
            hideTimeout = this.setTimeout(function () {
                fixed_menu.classList.remove("on")
            }, 2000)
        })

        let btn_top = this.document.querySelector("#btn_top")

        // 위로가기 버튼을 클릭하면 페이지 최상단으로 부드럽게 스크롤하여 이동되는 기능
        btn_top.addEventListener("click", function (e) {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
        })

        let design_ver = "client"


        let btn_admin = document.querySelector("#btn_admin")
        let admin_img = document.querySelector("#admin_img")

        btn_admin.addEventListener("click", function (e) {
            e.preventDefault()
            // a 태그를 클릭했을 때 스크롤바가 위로 이동되는 기본 기능을 억제하는 소스코드

            if (design_ver == "client") {
                document.body.classList.add("admin")
                design_ver = "admin"
                admin_img.setAttribute("src", "./img/icn_client.svg")
            } else {
                document.body.classList.remove("admin")
                design_ver = "client"
                admin_img.setAttribute("src", "./img/icn_admin.svg")
            }

        })

    })
    .catch(error => consol.log("에러 : ", error))

window.addEventListener("load", function () {


    let modal1 = document.querySelector(".modal")
    let popups1 = document.querySelector(".popups")
    setTimeout(function () {
        if (modal1) {
            modal1.style.transition = "all .5s ease 0s"
        }
        if (popups1) {
            popups1.style.transition = "all .5s ease 0s"
        }
    }, 100)
})


