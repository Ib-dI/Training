console.log('connecté')

const checkbox = document.getElementById('checkbox')

const checkSavedTheme = () => {
    const theme = localStorage.getItem('theme')

    if (theme) {
        document
            .documentElement
            .setAttribute('data-theme', theme)

        if (theme ==='dark') {
            checkbox.checked = true
        }
    }
}

const sitchTheme = (e) => {
    if (e.target.checked) {
        document
            .documentElement
            .setAttribute('data-theme', 'dark')
        localStorage.setItem('theme','dark')
        return
    }
    document
        .documentElement
        .setAttribute('data-theme', 'light')
        
    localStorage.setItem('theme','dark')
    
}

checkSavedTheme()
checkbox.onchange = sitchTheme