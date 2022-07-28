import { useCallback, useState } from 'react'

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow,setIsShow] = useState(true);
  
    const handleClick = (e) => {
      setCount((count) => count + 1)
    }
    
    const handleDisplay = () => {
      setIsShow( (isShow) => {
        return !isShow;
      })
    }
  
    return(count, isShow , handleClick, handleDisplay)
  }