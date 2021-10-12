const path = require('path')
const fs = require('fs')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'card.json'
)

class Card {
    static async add(phone) {
        const card = await Card.fetch()

        const idx = card.phones.findIndex(c => c.id === phone.id) // number // 0

        const candidate = card.phones[idx] // 13

        if (candidate) {
            /// Bu telefon korzinada mavjud
            candidate.count++ // 2ta iphone 13
            card.phones[idx] = candidate
        } else {
            /// Demak tel korzinada yo'q
            phone.count = 1
            card.phones.push(phone)
        }

        card.price += +phone.price

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static async remove(id) {
        const card = await Card.fetch()

        const idx = card.phones.findIndex(phone => phone.id === id) //
        // console.log(idx);
        const phone = card.phones[idx]

        if (phone.count === 1) {
            // Obyektni o'chiramiz
            card.phones = card.phones.filter(phone => phone.id !== id)
        } else {
            // count ni kamaytiramiz
            card.phones[idx].count--
        }
        // card.price = card.price - card.phones[idx].price
        card.price -= phone.price

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(card)
                }
            })
        })
    }

    static async fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(p, 'utf-8', (err, content) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })
    }
}

module.exports = Card