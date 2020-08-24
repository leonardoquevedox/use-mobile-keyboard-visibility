'use strict'
let { useState, useEffect } = require('react')

function useMobileKeyboardVisibililty(keyboardHeight = 100) {
  let [isVisible, setIsVisible] = useState(false)
  let initialViewHeight = window.innerHeight
  let heightDifference = 0

  function checkKeyboardVisibility() {
    let isDesktop = typeof window !== 'undefined' && window.innerWidth > 768

    if (isDesktop) return
    else heightDifference = Math.abs(initialViewHeight - window.innerHeight)

    if (heightDifference > 0 && heightDifference > keyboardHeight) setIsVisible(true)
    else setIsVisible(false)
  }

  function handleResize() {
    checkKeyboardVisibility()
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isVisible
}

module.exports = useMobileKeyboardVisibililty
