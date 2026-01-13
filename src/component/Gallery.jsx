export default function Gallery({imgOrder, handleImg, nextImg, renderItem, clickCurrent})  {

    const currentImg = `/images/image-product-${imgOrder}.jpg`
    const images = ['/images/image-product-1-thumbnail.jpg', '/images/image-product-2-thumbnail.jpg', '/images/image-product-3-thumbnail.jpg', '/images/image-product-4-thumbnail.jpg']
    const displayItems = images.map(
        (item, index) => <button className='group gallery-item' key={index} onClick={() => handleImg(index)} aria-label={`View image ${index + 1}`} aria-current={imgOrder === index + 1}>
            <img className="gallery-img group-hover:opacity-50" src={item} alt=""/></button>
    )
    const displayHiddenItem = images.map(
        (item, index) => <button className='group gallery-hidden-item' key={index} onClick={() => handleImg(index)} aria-label={`View image ${index + 1}`} aria-current={imgOrder === index + 1}>
            <img className="gallery-img group-hover:opacity-50" src={item} alt=""/></button>
    )


    return (
        <div className="lg:w-[40%] sm:py-[48px] flex flex-col gap-5">
            <picture className="w-full relative">
                {/* previous item */}
                <button className="group next-btn left-btn lg:hidden" onClick={() => nextImg(false)} aria-label="Previous image">
                    <svg className="w-5 h-5 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                </button>
                {/* next item */}
                <button className="group next-btn right-btn lg:hidden" onClick={() => nextImg(true)} aria-label="Next image">
                    <svg className="w-5 h-5 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                </button>
                
                {/* render button */}
                <button onClick={clickCurrent} className="w-full" aria-label="Open image gallery">
                    <img src={currentImg} alt="Fall Limited Edition Sneakers" className="h-[300px] w-full object-cover
                                                                        sm:rounded-xl lg:h-[440px]"/>
                </button>
            </picture>

            {/* Desktop gallery */}
            <div className="hidden lg:flex items-center justify-between">
                {displayItems}
            </div>

            {/* Burry background */}
            {renderItem && <div className="absolute inset-0 bg-grey950/70 z-2" aria-hidden="true"></div>}



            {/* Item gallery */}
            {renderItem && 
                <div 
                    className="absolute left-1/2 top-1/2 z-6 -translate-x-1/2 -translate-y-1/2 flex flex-col items-end gap-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image gallery"
                >
                    {/* toggle hidden gallery */}
                    <button onClick={clickCurrent} aria-label="Close gallery">
                        <svg className="text-white w-5 h-5" aria-hidden="true"
                        viewBox="0 0 14 15"
                         xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/></svg>
                    </button>

                    <picture className="relative">

                        {/* previous item */}
                        <button className="group next-btn left-btn left-0 -translate-x-1/2" onClick={() => nextImg(false)} aria-label="Previous image">
                            <svg className="w-5 h-5 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                        </button>
                        {/* next item */}
                        <button className="group next-btn right-btn right-0 translate-x-1/2" onClick={() => nextImg(true)} aria-label="Next image">
                            <svg className="w-5 h-5 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                        </button>
                        {/* Current item */}
                        <img src={currentImg} alt="Fall Limited Edition Sneakers" className="h-[550px] w-[550px] object-cover sm:rounded-xl"/>
                    
                    </picture>

                    <div className="w-[80%] mx-auto flex items-center justify-between">
                        {displayHiddenItem}
                    </div>
                </div>
            }
        </div>
    )
}
