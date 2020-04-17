(function () {
    // tabs
    const tabsButton = document.querySelector(`.tabs__details`)
    const tabs = document.querySelector(`.tabs__content`)
    const tabsIcon = document.querySelector(`.fa-chevron-down`)

    tabsButton.addEventListener(`click`, function (e) {
        e.preventDefault()
        tabs.classList.toggle(`tab-open`)
        tabsIcon.classList.toggle(`tab-rotate`)
    }, false)

    // lightbox
    const lightboxLink = document.querySelectorAll(`.lightbox-item`)
    const lightboxImg = document.querySelectorAll(`.lightbox-img`)
    const lightboxWrap = document.createElement(`DIV`)

    lightboxLink.forEach(function (el, i, arr) {
        arr[i].addEventListener(`click`, function (e) {
            e.preventDefault()
            document.body.appendChild(lightboxWrap)
            lightboxWrap.classList.add(`lightbox-wrap`)
            lightboxImg[i].classList.add(`lightbox-open`)
            lightboxWrap.addEventListener(`click`, lightOp, false)
            function lightOp() {
                lightboxWrap.classList.remove(`lightbox-wrap`)
                lightboxImg[i].classList.remove(`lightbox-open`)
                lightboxWrap.removeEventListener(`click`, lightOp, false)
            }
        }, false)
    })
})()
