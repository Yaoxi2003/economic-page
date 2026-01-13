export default function Cart({checkout, number, handleCart, openCart, totalAmount, handleRemove}) {
    const emptyMessage = (<p className="font-bold">Your cart is empty</p>)

    const cartBtn = (
        <button 
            onClick={handleCart} 
            className="relative"
            aria-label={`Shopping cart, ${number} items`}
            aria-expanded={openCart}
        >
            <img src="/images/icon-cart.svg" alt="" aria-hidden="true" />
            {checkout && <p className="hint" aria-hidden="true">{number}</p>}
        </button>
    )

    const finalPayment = (
        <article>
            <div className="flex justify-between items-center gap-5">
                <img src="/images/image-product-1-thumbnail.jpg" alt="Fall Limited Edition Sneakers" className="w-[50px] h-[50px] rounded-md" />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>{`$125.00 x ${number}`}   <span className="font-bold text-grey950">{`$${totalAmount}`}</span></p>
                </div>
                <button onClick={handleRemove} aria-label="Remove item">
                    <img src="/images/icon-delete.svg" alt="" aria-hidden="true" />
                </button>

            </div>
            <button className="primary-btn sm:w-full mt-6">Checkout</button>
        </article>
    )

    return (
        <>
            {cartBtn}

           {openCart && 
            <div 
                className="absolute z-10 top-20 left-1/2 -translate-x-1/2 sm:translate-0 sm:top-35 lg:left-2/3 lg:-translate-x-1/10 w-[360px] h-[256px] rounded-xl bg-white shadow-lg"
                role="dialog"
                aria-label="Shopping cart"
            >
                <p className="py-5 px-3 border-b border-grey100 text-grey950 font-bold">Cart</p>

                <div className="w-full h-2/3 flex justify-center items-center">
                    {checkout && totalAmount!==0 ? finalPayment : emptyMessage}
                </div>
            </div>
           }
        </>
    )
}
