document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('.section')
    let settings = document.getElementById('settings')
    for (let i=0; i<sections.length; i++) {
        sections[i].addEventListener('mouseenter', event => {
            let x  = sections[i].offsetLeft
            let y  = sections[i].offsetTop
            settings.style.right = x+'px'
            settings.style.top = y+'px'
            settings.classList.remove('d-none')
        })
        sections[i].addEventListener('mouseleave', event => {
            settings.classList.add('d-none')
        })
    }
})