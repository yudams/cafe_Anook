window.addEventListener("load", function () {

    let fixed_menu = this.document.querySelector(".fixed_menu")
    let lastScrollTop = 0
    let hideTimeout

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
    btn_top.addEventListener("click", function(e) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
    })

})