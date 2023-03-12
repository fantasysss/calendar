let nav = 0
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = document.getElementById('calendar')
function load() {
    const dt = new Date ()

    const day = dt.getDate()
    const month = dt.getMonth()
    const year = dt.getFullYear()




    const firstDayOfMonth = new Date(year,month, 1)
    const daysInMonth = new Date(year,month + 1, 0).getDate()
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    })
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0])

    
    for (let index = 1; index <= paddingDays + daysInMonth; index++) {
        const daySquare = document.createElement('div')
        daySquare.classList.add('day')

        if (index > paddingDays) {
            daySquare.innerText = index - paddingDays

            daySquare.addEventListener('click', (e) => console.log(e.target.textContent))
        } else {
        daySquare.classList.add('padding')
        }

        calendar.appendChild(daySquare)
    }
     
    


    
   


}
load()