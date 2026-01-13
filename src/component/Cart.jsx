export default function Cart({checkout, number, handleCart, openCart, totalAmount, handleRemove}) {
    const emptyMessage = (<p className="font-bold text-gray-500">Your cart is empty.</p>)

    const cartBtn = (
        <button 
            onClick={handleCart} 
            className="relative"
            aria-label={`Shopping cart, ${number} items`}
            aria-expanded={openCart}
        >
            <img src="/images/icon-cart.svg" alt="" aria-hidden="true" />
            {checkout && <span className="hint" aria-hidden="true">{number}</span>}
        </button>
    )

    const finalPayment = (
        <article className="w-full">
            <div className="flex justify-between items-center gap-4 mb-6">
                <img src="/images/image-product-1-thumbnail.jpg" alt="Fall Limited Edition Sneakers Thumbnail" className="w-[50px] h-[50px] rounded-md" />
                <div className="text-gray-500">
                    <p className="text-sm">Fall Limited Edition Sneakers</p>
                    <p className="text-sm">{`$125.00 x ${number}`} <span className="font-bold text-grey950">{`$${totalAmount}`}</span></p>
                </div>
                <button onClick={handleRemove} aria-label="Remove item from cart">
                    <img src="/images/icon-delete.svg" alt="" aria-hidden="true" />
                </button>

            </div>
            <button className="primary-btn w-full">Checkout</button>
        </article>
    )

    return (
        <>
            {cartBtn}

           {openCart && 
            <div 
                className="absolute z-10 top-20 left-1/2 -translate-x-1/2 sm:translate-0 sm:top-24 lg:left-[unset] lg:right-0 lg:translate-x-0 w-[360px] min-h-[256px] rounded-xl bg-white shadow-2xl"
                role="dialog"
                aria-label="Shopping Cart Summary"
            >
                <p className="py-5 px-6 border-b border-grey100 text-grey950 font-bold">Cart</p>

                <div className="w-full min-h-[180px] flex justify-center items-center px-6">
                    {checkout && totalAmount > 0 ? finalPayment : emptyMessage}
                </div>
            </div>
           }
        </>
    )
}

