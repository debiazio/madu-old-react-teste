import React from 'react'
import { useQuery } from 'react-apollo'
// import { useProduct } from 'vtex.product-context'

import GET_PRODUCTS from '../../graphql/getProducts.graphql'

const ProductSimilars = () => {
    // const productContext = useProduct() || null

    const { loading, error, data } = useQuery(GET_PRODUCTS, {
        variables: { slug: "carrinho-auxiliar-3-gavetas-e-1-prateleira-tampo-melamina-preto-mad-u-extra-385-work" }, // Substitua pelo slug de um produto válido
        fetchPolicy: 'no-cache',
    })
    

    const similars = data?.product.recommendations.similars


    if(loading || error) return null

    console.log('similars', similars)

    return (
        <>
            <h1>Product similars components teste2</h1>
        </>
    )
}

export default ProductSimilars