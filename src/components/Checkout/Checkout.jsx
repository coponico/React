import React, {useState, useContext} from 'react'
import CartContext from '../../store/CartContext'
import { collection, addDoc} from "firebase/firestore";
import db from '../../services/firebase';
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner';

const Checkout = () => {

    const cartCtx = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    })
    const {Nombre, Email, Telefono} = buyer
    const [orderID, setOrderID] = useState()
    const [load, setLoad] = useState(false)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const total = cartCtx.getTotalPrice();
        const items = cartCtx.products.map(item => {return {id:item.id, title:item.title, price: item.price, amount: item.quantity}})
        const dataOrder = {buyer, items, date, total}
        generateOrder(dataOrder)
        
    }

    const generateOrder = async (dataOrder) => {
        setLoad(true)
        try{
            const col = collection(db, "orders")
            const order = await addDoc(col, dataOrder)
            setOrderID(order.id)
            cartCtx.clear()
            setLoad(false)
        } catch(err){}
    }

// function to add an item

    const itemsDb = {}
    const updateDb = async (itemsDb) => {
        try{
            const col = collection(db, "items")
            const item = await addDoc(col, itemsDb)
        } catch(err){}
    }
    

    return (
        <>
            <h1 className='finishPurch'>Finalizando Compra</h1>
            <hr />
            
            {load ? <Spinner />
                : (!orderID&&<div>
                    <h4 className='completeData'>Completar Datos:</h4>
                    <br />
                    <form className='checkoutForm' onSubmit={handleSubmit}>
                        <input className='nameForm'
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input className='mailForm'
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input className='phoneForm'
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input className="finishPurchaseBtn"
                            type="submit"
                            value="Finalizar Compra"
                            
                        />
                    </form>
                </div>)
            }

            <div>
            {
                orderID&&(
                    <div>
                        <h4>Compra Finalizada con Exito</h4>
                        <h4>{`Su código de compra es: ${orderID}`}</h4>
                        <h5>revise su correo para más detalles sobre la compra</h5>
                        <Link to="/"><h5>Realizar otra compra</h5></Link>
                    </div>
                    )
            }
            </div>

        </>
    )
}

export default Checkout