import { useEffect, useState } from 'react'

export function useWindowSize() {
  const getSize = () => ({ width: window.innerWidth, height: window.innerHeight })
  const [size, setSize] = useState(getSize)
  useEffect(() => {
    const onResize = () => setSize(getSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return size
}
