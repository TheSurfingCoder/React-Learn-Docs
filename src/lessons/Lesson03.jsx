const products = [
    {title: "cabbage", id: 1},
    {title: "apple", id: 2},
    {title: "watermelon", id: 3}
]

const listItems = products.map(product => {
     return <li>{product.title}</li>
});

export default function printItems(){
    return(
        <ul>
            {listItems}
        </ul>
    )
}

