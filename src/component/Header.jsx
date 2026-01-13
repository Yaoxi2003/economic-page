export default function Header({openMenu, handleMenu, children}) {
    return (
        <header className='container-pro pd flex justify-between items-center py-8 sm:py-14 sm:border-b sm:border-grey100'>
            {/* navigation bar */}
            <nav className='flex items-center gap-4 lg:gap-8'>
                <button onClick={handleMenu} className='lg:hidden'><img src="/images/icon-menu.svg" alt="A menu icon"/></button>
                <img src="/images/logo.svg" alt="A sneaker company logo" className='lg:mr-5'/>

                {/* Hidden nav bar in mobile screen */}
                { openMenu &&
                <div className='absolute z-5 top-0 left-0 bottom-0 w-[70%] sm:w-1/3
                                p-8 bg-white'>
                    <button onClick={handleMenu} className='mb-12'>
                        <img src="/images/icon-close.svg" alt="A close icon" />
                    </button>
                    <ul className='flex flex-col gap-8'>
                        <li><a href="#" className="sm-link-style">Collections</a></li>
                        <li><a href="#" className="sm-link-style">Men</a></li>
                        <li><a href="#" className="sm-link-style">Women</a></li>
                        <li><a href="#" className="sm-link-style">About</a></li>
                        <li><a href="#" className="sm-link-style">Contact</a></li>
                    </ul>
                </div>
                }

                {/* nav bar in desktop screen */}
                <ul className='items-center gap-8 hidden lg:flex'>
                    <li><a href="#" className="lg-link-style">Collections</a></li>
                    <li><a href="#" className="lg-link-style">Men</a></li>
                    <li><a href="#" className="lg-link-style">Women</a></li>
                    <li><a href="#" className="lg-link-style">About</a></li>
                    <li><a href="#" className="lg-link-style">Contact</a></li>
                </ul>

                {/* burry background */}
                {openMenu && <div className='bg-grey950 opacity-70 absolute inset-0 z-3'></div>}

            </nav>

            {/* shopping cart */}
            <div className='flex items-center gap-5 sm:gap-12'>
                {children}
                <picture>
                    <img src="/images/image-avatar.png" alt="A user avatar" className='w-[24px] sm:w-[50px] avatar'/>
                </picture>
            </div>
        </header>
    )
}