//variável dos botões + e -
let modalQt = 1;
let id_pedido_aberto = null;

let cart = db.get('cart');
if (!cart) cart = [];


let modalKey = 0;
let subTotal = 0, desconto = 0, total = 0;

//Funções para substituir algumas chamadas "document.queryselector"
const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

//Listagem das pizzas
pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    //preço das pizzas, usando "template string"
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    //pegar o nome das pizzas
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    //descrição 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    //Evento de click na pizza para abrir o modal
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()
        //Informações da pizza selecionada, através da class('.pizza-item')
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1
        modalKey = key

        //preenchimento dos itens do modal
        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            //Mantem o tamanho grande selecionado 
            if (sizeIndex == 2) {
                size.classList.add('selected')
            }
            //Pesos dos tamanhos das pizzas
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        //Informações dos itens de cada pizza
        c('.pizzaInfo--qt').innerHTML = modalQt

        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex'
        //Função de tempo para abertura do modal
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1
        }, 200)

    })

    c('.pizza-area').append(pizzaItem)

})




//Funcionamento do modal(botões)
function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none'
    }, 500)
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})

//Ação dos botões - e + 
c('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1) {
        modalQt--
        c('.pizzaInfo--qt').innerHTML = modalQt
    }
})
c('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt
})
//Eventos dos tamanhos das pizzas
cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        c('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
    })
})
//Adicionar ao carrinho 
c('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'))

    //Verificando as categorias das pizzas
    let identifier = pizzaJson[modalKey].id + '@' + size
    let key = cart.findIndex((item) => item.identifier == identifier)

    if (key > -1) {
        cart[key].qt += modalQt
    } else {
        cart.push({
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        })
    }

    updateCart()
    closeModal()
})

//abrir carrinho
c('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        c('aside').style.left = '0'
    }
})

//Botão fechar do carrinho
c('.menu-closer').addEventListener('click', () => {
    c('aside').style.left = '100vw'
})

function updateCart() {
    c('.menu-openner span').innerHTML = cart.length

    if (cart.length > 0) {
        c('main').classList.add('show')
        c('.cart').innerHTML = ''

        subTotal = 0
        desconto = 0
        total = 0

        for (let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id)
            subTotal += pizzaItem.price * cart[i].qt

            let cartItem = c('.models .cart--item').cloneNode(true)

            let pizzaSizeName
            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'P'
                    break;
                case 1:
                    pizzaSizeName = 'M'
                    break
                case 2:
                    pizzaSizeName = 'G'
                    break
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--
                } else {
                    cart.splice(i, 1)
                }
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++
                updateCart()
            })

            c('.cart').append(cartItem)
        }

        desconto = subTotal * 0.1
        total = subTotal - desconto

        c('.subtotal span:last-child').innerHTML = `R$ ${subTotal.toFixed(2)}`
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`

    } else {
        c('main').classList.remove('show')
        c('aside').style.left = '100vw'
    }

    db.set('cart', cart);
}


function renderPedidos() {
    // busca lista atualizada
    pedidosJson = db.get('pedidos');
    // limpa a exibição
    c('.pedidos-area .list').innerHTML = '';

    // cria os cards de pedidos
    pedidosJson.map((item, index) => {
        if(item.inativo) return;

        let pizzaItem = c('.models .pedido-item').cloneNode(true)

        pizzaItem.setAttribute('data-key', item.id)
        pizzaItem.querySelector('.pizza-item--id').innerHTML = item.id;
        pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.total.toFixed(2)}`
        c('.pedidos-area .list').append(pizzaItem);
    });
    c('.pedidos-area .list').addEventListener('click', (ev, obj) => {
        let target = ev.target;
        let id = +target.closest('.pedido-item').getAttribute('data-key');
        let pedido = db.getById('pedidos', id);

        if (pedido) {
            cart = pedido.cart;
            id_pedido_aberto = id;
            updateCart();
            c('main').classList.add('show'); // abre o carrinho
        }
    })
}

// FAZER PEDIDOS
c('.cart--finalizar').addEventListener('click', () => {
    let pedidos = db.get('pedidos');
    if (!pedidos) pedidos = [];

    if (id_pedido_aberto) {
        // ATUALIZA O PEDIDO
        pedidos = pedidos.map(p => {
            if (p.id == id_pedido_aberto) {
                p = {
                    id: id_pedido_aberto,
                    cart: cart,
                    total: total,
                    desconto: desconto
                }
            }
            return p;
        })
        id_pedido_aberto = null;
    } else {
        let novo_id = pedidos.length;
        while (pedidos.some(p => p.id == novo_id)) {
            novo_id++;
        }

        // CRIA OBJETO DE PEDIDO
        let obj = {
            id: novo_id,
            cart: cart,
            total: total,
            desconto: desconto
        }
        // PERSISTE O PEDIDO CRIADO
        pedidos.push(obj);
    }
    db.set('pedidos', pedidos);


    // ESVAZIA O CARRINHO
    cart = [];
    updateCart();
    renderPedidos();
})
c('.cart--cancelar').addEventListener('click', () => {
    let pedidos = db.get('pedidos');
    if (!pedidos) pedidos = [];

        // ATUALIZA O PEDIDO
        // pedidos = pedidos.filter(p => p.id != id_pedido_aberto);
        pedidos = pedidos.map(p => {
        if (p.id == id_pedido_aberto) {
            p = {
                id: id_pedido_aberto,
                inativo: true,
                cart: cart,
                total: total,
                desconto: desconto
            }
        }
            return p;
        })
        id_pedido_aberto = null;
    db.set('pedidos', pedidos);

    // ESVAZIA O CARRINHO
    cart = [];
    updateCart();
    renderPedidos();
})

updateCart();
renderPedidos();


