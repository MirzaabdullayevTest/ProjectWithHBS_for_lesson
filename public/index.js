const price = document.querySelectorAll('.price');

const currency = function (price) {
    return new Intl.NumberFormat('en-EN', {
        currency: 'usd',
        style: 'currency'
    }).format(price)
}

price.forEach((val, index) => {
    val.textContent = currency(val.textContent)
})

const $card = document.querySelector('#card');

if ($card) {
    $card.addEventListener('click', function (e) {
        const contain = e.target.classList.contains('js-remove') // true yoki false
        // alert('msg');
        if (contain) {

            const id = e.target.dataset.id
            // console.log(id);


            fetch('/card/remove/' + id, {
                method: 'delete'
            }).then(res => res.json())
                .then(card => {
                    if (card.phones.length) {
                        // korzina bo'sh emas
                        const inner = card.phones.map(phone => {
                            return `
                            <tr>
                                <td>${phone.name}</td>
                                <td>${phone.count}</td>
                                <td>${phone.price}</td>
                                <td>
                                <button
                                    type="submit"
                                    class="btn btn-danger js-remove"
                                    data-id="${phone.id}"
                                >Delete</button>
                                </td>
                            </tr>
                        `
                        }).join('')

                        $card.querySelector('tbody').innerHTML = inner
                        $card.querySelector('.price').innerHTML = currency(card.price)

                    } else {
                        // korzina bo'sh
                        $card.innerHTML = '<p>Card is empty</p>'
                    }
                })
        }
    })
}