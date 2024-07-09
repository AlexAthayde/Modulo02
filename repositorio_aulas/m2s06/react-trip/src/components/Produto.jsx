import './Produto.css'

function Produto() {

    function comprarBike() {
        console.log('comprando a bicicleta')
    }
    
    return (
        <>
            <div className='produto'>
                <img src="https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg" alt="" />

                <h4 className='modelo'>Magic Might</h4>
                <h6 className='preco'>R$ 2499</h6>

                <button onClick={() => comprarBike()}>Comprar</button>
            </div>
        </>
    )
}

export default Produto