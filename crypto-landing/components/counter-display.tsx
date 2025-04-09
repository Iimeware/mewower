"use client"

import { useState, useEffect } from "react"

export function CounterDisplay() {
  const [count, setCount] = useState(9300)
  const [isIncreasing, setIsIncreasing] = useState(false)
  const [reachedTarget, setReachedTarget] = useState(false)
  const targetCount = 9943

  useEffect(() => {
    if (count >= targetCount) {
      setReachedTarget(true)
      return
    }

    const delay = Math.floor(Math.random() * 2000) + 1000 // random between 1000–3000ms meow

    const timeout = setTimeout(() => {
      setCount((prevCount) => prevCount + 1)
      setIsIncreasing(true)
      setTimeout(() => setIsIncreasing(false), 500)
    }, delay)

    return () => clearTimeout(timeout)
  }, [count, targetCount])

  return (
    <div className="relative inline-block">
      {isIncreasing && !reachedTarget && (
        <div className="absolute -top-6 right-0 text-green-400 text-2xl animate-bounce">+1</div>
      )}
      <span className={isIncreasing ? "text-green-300 scale-110 transition-all shadow-glow" : ""}>
        {count}
      </span>
    </div>
  )
}

