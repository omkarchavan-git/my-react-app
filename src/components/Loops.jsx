
const Loops = () => {

    let products = [
        { id: 1, Title: 'Phone 10', price: 123456 },
        { id: 2, Title: 'Phone 11', price: 123456 },
        { id: 3, Title: 'Phone 12', price: 123456 },
        { id: 4, Title: 'Phone 14', price: 123456 }
    ]

    return (

        <div>
            {products.map((data) => (
                <div key={data.id}>
                    <h3>Title = {data.Title} </h3>
                    <h4> price = {data.price} </h4>
                </div>
            ))}
        </div>

    )
}

export default Loops