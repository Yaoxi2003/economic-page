export default function Gallery({imgOrder, handleImg, nextImg, renderItem, clickCurrent})  {

    const currentImg = `/images/image-product-${imgOrder}.jpg`
    const images = ['/images/image-product-1-thumbnail.jpg', '/images/image-product-2-thumbnail.jpg', '/images/image-product-3-thumbnail.jpg', '/images/image-product-4-thumbnail.jpg']
    
    const displayItems = images.map(
        (item, index) => (
        <button 
            className={`group gallery-item rounded-xl overflow-hidden border-2 ${imgOrder === index + 1 ? 'border-orange-500 opacity-70' : 'border-transparent'}`} 
            key={index} 
            onClick={() => handleImg(index)}
            aria-label={`View product image ${index + 1}`}
            aria-current={imgOrder === index + 1 ? 'true' : 'false'}
        >
            <img className="gallery-img group-hover:opacity-50" src={item} alt=""/>
        </button>
        )
    )
    
    const displayHiddenItem = images.map(
        (item, index) => (
        <button 
            className={`group gallery-hidden-item rounded-xl overflow-hidden border-2 ${imgOrder === index + 1 ? 'border-orange-500' : 'border-transparent'}`} 
            key={index} 
            onClick={() => handleImg(index)}
            aria-label={`View product image ${index + 1}`}
        >
            <img className="gallery-img group-hover:opacity-50 bg-white" src={item} alt=""/>
        </button>
        )
    )


    return (
        <div className="lg:w-[40%] sm:py-[48px] flex flex-col gap-8">
            <div className="w-full relative">
                {/* previous item (Mobile) */}
                <button 
                    className="group next-btn left-4 lg:hidden absolute top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md" 
                    onClick={() => nextImg(false)}
                    aria-label="Previous image"
                >
                    <svg className="w-3 h-3 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                </button>
                
                {/* next item (Mobile) */}
                <button 
                    className="group next-btn right-4 lg:hidden absolute top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md" 
                    onClick={() => nextImg(true)}
                    aria-label="Next image"
                >
                    <svg className="w-3 h-3 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                </button>
                
                {/* Main Image Button */}
                <button onClick={clickCurrent} className="w-full cursor-zoom-in" aria-label="Open image gallery lightbox">
                    <img src={currentImg} alt="Fall Limited Edition Sneakers - Product View" className="h-[300px] w-full object-cover sm:rounded-2xl lg:h-[440px]"/>
                </button>
            </div>

            {/* Desktop thumbnail gallery */}
            <div className="hidden lg:flex items-center justify-between gap-6">
                {displayItems}
            </div>

            {/* Blurry background */}
            {renderItem && <div className="absolute inset-0 bg-black/75 z-40" aria-hidden="true"></div>}

            {/* Lightbox Gallery */}
            {renderItem && 
                <div 
                    className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 focus:outline-none"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image Gallery Lightbox"
                >
                    {/* Close Lightbox */}
                    <div className="w-[550px] flex justify-end">
                        <button onClick={clickCurrent} aria-label="Close gallery" className="text-white hover:text-orange-500 transition-colors">
                            <svg className="w-5 h-5 fill-current"
                            viewBox="0 0 14 15"
                            xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
                        </button>
                    </div>

                    <div className="relative">
                        {/* previous item */}
                        <button 
                            className="group absolute top-1/2 -left-6 -translate-y-1/2 -translate-x-full bg-white rounded-full w-12 h-12 flex items-center justify-center" 
                            onClick={() => nextImg(false)}
                            aria-label="Previous image"
                        >
                            <svg className="w-4 h-4 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                        </button>
                        
                        {/* next item */}
                        <button 
                            className="group absolute top-1/2 -right-6 -translate-y-1/2 translate-x-full bg-white rounded-full w-12 h-12 flex items-center justify-center" 
                            onClick={() => nextImg(true)}
                            aria-label="Next image"
                        >
                            <svg className="w-4 h-4 text-grey950 group-hover:text-orange500 transition-colors duration-300" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                        </button>
                        
                        {/* Current item */}
                        <img src={currentImg} alt="Product view" className="h-[550px] w-[550px] object-cover rounded-2xl"/>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        {displayHiddenItem}
                    </div>
                </div>
            }
        </div>
    )
}
