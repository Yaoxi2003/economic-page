export default function Count({number, addNum, delNum, onClick}) {
    

    return (
        <div className="pd py-7 sm:pb-12 sm:pt-2 lg:w-[45%]">
            {/* Content */}
            <article className="flex flex-col gap-4 mb-6">
                <h3 className="uppercase tracking-[2px]">Sneaker Company</h3>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="flex justify-between items-center gap-3 sm:flex-col sm:items-start">
                    <div className="flex gap-4 items-center">
                        <h2 aria-label="Current price: 125 dollars">$125.00</h2>
                        <p className="text-white font-bold py-1 px-3 bg-grey950 rounded-lg">50%</p>
                    </div>
                    <h3 className="line-through font-bold" aria-label="Original price: 250 dollars">$250.00</h3>
                </div>
            </article>


            {/* payment set */}
            <div className="flex flex-col gap-4 items-center justify-between sm:flex-row">
                {/* number of item bar */}
                <div className="rounded-2xl bg-grey50 flex justify-between items-center p-[16px] gap-3
                                w-full sm:w-1/2 lg:w-[35%]">
                    <button onClick={delNum} aria-label="Decrease quantity"><img src='/images/icon-minus.svg' alt='' aria-hidden="true"/></button>
                    <p className="font-bold text-grey950">{number}</p>
                    <button onClick={addNum} aria-label="Increase quantity"><img src='/images/icon-plus.svg' alt='' aria-hidden="true"/></button>
                </div>
                {/* Checkou button */}
                <button className="primary-btn" onClick={onClick}>
                    <svg className="text-grey950" width="22" height="20" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fillRule="nonzero"/></svg>
                    Add to cart
                </button>
            </div>
        </div>
        
    )
}
