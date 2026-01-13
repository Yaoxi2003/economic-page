import {useState} from 'react'
import Count from './component/Count'
import Cart from './component/Cart'
import Gallery from './component/Gallery'
import Header from './component/Header'


export default function App() {
  // State value
  const [number, setnumber] = useState(0)
  const [checkout, setCheckout] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [currentImg, setCurrentImg] = useState(1)
  const [renderItem, setRenderItem] = useState(false)

  //static value
  const pricePerItem = 125

  function addNum() {
    setnumber(prev => prev + 1)
  }

  function delNum() {
    if (number === 0) {
      return 
    }
    setnumber(prev => prev - 1)
  }

  function calculatePrice() {
    return (number * pricePerItem).toFixed(2)
  }

  function remove() {
    setnumber(0)
    setCheckout(false)
  }

  function handleImg(index) {
    setCurrentImg(index + 1)
  }

  function nextImg(next) {
    if (currentImg === 4 && next) {
      setCurrentImg(1)
      return
    }
    
    if (currentImg === 1 && !next) {
      setCurrentImg(4)
      return
    }

    if (next) {
      setCurrentImg(prev => prev + 1)
    }
    else {
      setCurrentImg(prev => prev - 1)
    }
  }

  return (
    <main className='relative w-full h-screen'>

    <Header openMenu={openMenu} handleMenu={ () => {setOpenMenu(prev => !prev)}}>
      <Cart number={number} totalAmount={calculatePrice()} checkout={checkout} openCart={openCart}
        handleCart={() => { setOpenCart(prev => !prev) }} handleRemove={remove}/>
    </Header>

    <div className='container-pro lg:flex justify-center gap-18 items-center lg:pt-12'>
      <Gallery imgOrder={currentImg} handleImg={handleImg} nextImg={nextImg} renderItem={renderItem}
              clickCurrent={() => {setRenderItem(prev => !prev)}}/>

      <Count number={number} addNum={addNum} delNum={delNum} 
      onClick={ () => { setCheckout(true); console.log(checkout) } }/>
    </div>

    </main>

  )
}

