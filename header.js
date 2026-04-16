const hamburger = document.querySelector('.hamburger')
    hamburger.onclick= function(){
        navBar = document.querySelector('.navbar')
        navBar.classList.toggle('active')
        hamburger.classList.toggle('cross')
       console.log('click')
    }
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode')
    }

    // Activez ou désactivez le mode sombre
    function toggleDarkMode() {
        let body = document.querySelector('body');
        body.classList.toggle('dark-mode')

        // Stockez l'état du mode sombre dans le stockage local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled')
        } else {
            localStorage.setItem('darkMode', 'disabled')
        }
    }