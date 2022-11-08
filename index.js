document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('.section')
    for (let i=0; i<sections.length; i++) {
        sections[i].addEventListener('mouseover', event => {
            let settingsDom = document.getElementById('settings')
            if (settingsDom) settingsDom.remove()
            let settingsContent = `
                <div class="settings" id="settings">
                    <button class="button">B1</button>
                    <button class="button">B2</button>
                    <button class="button">B3</button>
                </div>
            `
            sections[i].insertAdjacentHTML('afterbegin', settingsContent)
        })
    }
})