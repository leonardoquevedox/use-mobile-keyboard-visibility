'use strict'
let { useState, useEffect } = require('react')

function useMobileKeyboardVisibililty(keyboardHeight = 100) {
  let [isVisible, setIsVisible] = useState(false)
  let initialViewHeight = window.innerHeight
  let isDesktop = typeof window !== 'undefined' && window.innerWidth > 768

  function checkKeyboardVisibility() {
    if (isDesktop) return

    heightDifference = Math.abs(initialViewHeight - window.innerHeight)

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
