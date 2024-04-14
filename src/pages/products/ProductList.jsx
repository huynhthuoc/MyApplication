import React from "react"
import { useStoreContext } from "~/store"
const ProductList = () => {
    const [state, dispatch] = useStoreContext()
    return (
        <div className="product-list">
            <div className="list-control">
                <button>Prev</button>
                <button>Next</button>
            </div>
            {/* <ul>
                {state.map((item) => (
                    <li key={item.id}>
                        <img src={item.banner} alt="img product" />
                        <div>
                            <h4>{item.titles.heading}</h4>
                        </div>
                    </li>
                ))}
            </ul> */}
            slide Show ITem
        </div>
    )
}

export default ProductList
