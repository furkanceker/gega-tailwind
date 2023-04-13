const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')
const body = document.querySelector('body')

sun.addEventListener('click', () => {
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
    body.classList.remove('dark')
})

moon.addEventListener('click', () => {
    moon.classList.add('hidden')
    sun.classList.remove('hidden')
    body.classList.add('dark')
})