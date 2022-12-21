// function car(name, model, owner, year, phone, image) {
//     return {
//         name, model, owner, year, phone, image
//     }
// }
const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image })
const log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
    car('Ford', 'Focus', '...', 2016, '+3 800 555 55 55', 'img/Focus.png'),
    car('Ford', 'Mondeo', '...', 2018, '+3 800 505 55 55', 'img/Mondeo.png'),
    car('Bmw', 'i-3', '...', 2015, '+3 800 550 55 55', 'img/bmw-i3-2015.png'),
    car('Porsche', 'Panamera', '...', 2016, '+3 800 555 55 55', 'img/porsche-panamera.png'),
]
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            // console.log('click', index)
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cencelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})