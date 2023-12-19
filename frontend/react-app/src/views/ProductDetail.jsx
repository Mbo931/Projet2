
function ProductDetail({furniture}){
    return(
        <>
        <img src="{imageUrl.furniture}" alt="" />
        <h2>{furniture.name}</h2>
        <h3>{furniture.category}</h3>
        <h3>système de mot clé</h3>
        <p>{furniture.description}</p>
        <ul>
            {materials.map((materials)=>{
                <li>{furniture.materials.type}</li>
            })}
        </ul>
        <span>{quantity.furniture}</span>
        </>
    )
}

export default ProductDetail;