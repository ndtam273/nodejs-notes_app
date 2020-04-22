// object property shorthand

const name = "Andrew"
const userAge = 27

const user = {
    name,
    userAge,
    location: 'Da Nang'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// console.log(product.label)
// console.log(product.stock)

// const {label: productLabel, stock, rating = 5  } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)


const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)