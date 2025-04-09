"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Instagram } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoverGlow, setHoverGlow] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Mark component as loaded on client
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden">
      {/* Background Map with Parallax Effect */}
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          transform: isLoaded ? `translate(${mousePosition.x / 100}px, ${mousePosition.y / 100}px)` : "none",
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image src="/images/world-map.jpeg" alt="World Map" fill className="object-cover" priority />
      </div>

      {/* Matrix-like Digital Rain Effect */}
      {isLoaded && (
        <div className="fixed inset-0 z-5 pointer-events-none">
          <MatrixRain />
        </div>
      )}

      {/* Noise Overlay */}
      <div className="fixed inset-0 z-10 bg-black/50 pointer-events-none" />

      <div className="relative z-20">
        {/* Header */}
        <header className="container mx-auto py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16">
              <Image
                src="/images/punchmade-logo.png"
                alt="PUNCHMADE Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <a
              href="https://www.instagram.com/punchmadedev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
              onMouseEnter={() => setHoverGlow(true)}
              onMouseLeave={() => setHoverGlow(false)}
            >
              <Instagram className={`w-8 h-8 ${hoverGlow ? "animate-pulse shadow-glow-icon" : ""}`} />
            </a>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-none hover:scale-105 transition-all">
            CONNECT WALLET <ArrowRight className="ml-2" />
          </Button>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto py-12 md:py-20 flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-full max-w-lg mx-auto mb-8 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/scam-bible.png"
                alt="SCAM BIBLE"
                width={600}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-green-400/80 glitch-text">
              punchmade done had enough, giving hella sauce for the low. Time to let this shit out
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg py-6 px-8 rounded-none hover:scale-105 transition-all shadow-glow">
              CONNECT WALLET <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Counter Section */}
        <section className="container mx-auto py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-4 text-green-400/80">LIMITED AVAILABILITY</h2>
            <div className="border-4 border-green-500 p-8 inline-block w-full max-w-2xl bg-black/70 shadow-glow">
              <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tight flex justify-center items-center">
                <FixedCounter />
                <span className="text-3xl md:text-5xl text-green-400/80 ml-2">/10,000</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-400/80">FOLDERS CLAIMED</div>
              <div className="mt-6 text-red-500 font-bold animate-pulse">EXTREMELY LIMITED TIME OFFER</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-green-500 p-6 hover:bg-black/80 transition-all shadow-glow">
              <h3 className="text-xl font-bold mb-4 cyber-text">SIGNATURE VERIFICATION</h3>
              <p className="text-green-400/80 text-lg">
                All that's required is a $1 signature from any ERC20 token to verify wallet ownership and unlock your
                access to the complete library.
              </p>
              <p className="text-green-300 mt-4">
                IMPORTANT: The wallet you connect will be used to autosplit funds from some of the tools the folder
                provides. Make sure you connect with a wallet you can easily access.
              </p>
            </Card>
            <Card className="bg-black/60 border-green-500 p-6 hover:bg-black/80 transition-all shadow-glow">
              <h3 className="text-xl font-bold mb-4 cyber-text">WHAT DO YOU GET?</h3>
              <p className="text-green-400/80">
                The folder is filled with 80+ untapped plays personally written by punchmade dev - alongside 1.2gb of
                files and $1000 in social media tools.
              </p>
              <p className="text-green-300 mt-4">
                Using the files, person guides through videos and text, and overall all the info in the folder,
                punchmade is up over 2.3 mill.
              </p>
            </Card>
          </div>
        </section>

        {/* Access Section */}
        <section className="container mx-auto py-16 md:py-20">
          <div className="max-w-2xl mx-auto border-2 border-green-500 p-8 text-center bg-black/70 shadow-glow relative overflow-hidden">
            {/* Terminal-like blinking cursor effect */}
            <div className="absolute top-0 left-0 w-full h-8 bg-green-500/10 flex items-center px-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <div className="flex-1 text-left text-xs text-green-400">secure-access.sh</div>
            </div>
            <div className="mt-6">
              <p className="text-xl mb-4 terminal-text">Create secure access</p>
              <p className="mb-4 terminal-text">For authorized users only</p>
              <p className="mb-6 terminal-text">This portal is monitored. Unauthorized access is futile.</p>
              <a href="#" className="text-green-400 underline hover:text-green-300 terminal-text">
                Know your rights
              </a>
              <div className="inline-block w-3 h-5 bg-green-500 ml-2 animate-blink"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto py-8 border-t border-green-500/30 mt-12 md:mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-32 h-12 mr-3">
                <Image
                  src="/images/scam-bible.png"
                  alt="SCAM BIBLE"
                  width={128}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-green-400/60 text-sm">
              © {new Date().getFullYear()} PUNCHMADE. All rights reserved.
            </div>
          </div>

          {/* Legal Information */}
          <div className="text-xs text-green-400/60 mt-6 border-t border-green-500/20 pt-6">
            <p className="mb-2">LEGAL DISCLAIMER:</p>
            <p className="mb-2">
              This product is provided for educational and entertainment purposes only. The information contained within
              is not financial advice and should not be construed as such. Past performance is not indicative of future
              results.
            </p>
            <p className="mb-2">
              By accessing this content, you acknowledge that you are solely responsible for your actions and any
              consequences that may arise from the use or misuse of the information provided. The creator(s) of this
              content assume no liability for any losses, damages, or legal issues that may occur.
            </p>
            <p>
              All trademarks, logos, and brand names are the property of their respective owners. All company, product,
              and service names used are for identification purposes only.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )

  function FixedCounter() {
    // This component ensures the counter only runs on the client side
    const [count, setCount] = useState(9300)
    const [isIncreasing, setIsIncreasing] = useState(false)
    const [reachedTarget, setReachedTarget] = useState(false)
    const targetCount = 9943

    useEffect(() => {
      // Don't continue if we've reached the target
      if (count >= targetCount) {
        setCount(targetCount)
        setReachedTarget(true)
        return
      }

      // Calculate how many increments we need to reach target
      const remainingIncrements = targetCount - count

      // Determine increment size (larger at first, smaller as we approach target)
      const incrementSize = Math.max(1, Math.floor(remainingIncrements / 20))

      const interval = setInterval(() => {
        setCount((prevCount) => {
          // Calculate next count
          const nextCount = prevCount + incrementSize

          // Check if we've reached or exceeded target
          if (nextCount >= targetCount) {
            clearInterval(interval)
            setReachedTarget(true)
            return targetCount
          }

          setIsIncreasing(true)

          // Reset the animation after a short delay
          setTimeout(() => {
            setIsIncreasing(false)
          }, 1000)

          return nextCount
        })
      }, 3000) // Slower interval for more controlled animation

      return () => clearInterval(interval)
    }, [count, targetCount])

    return (
      <div className="relative inline-block">
        {isIncreasing && !reachedTarget && (
          <div className="absolute -top-6 right-0 text-green-400 text-2xl animate-bounce">+{count - (count - 1)}</div>
        )}
        <span className={isIncreasing ? "text-green-300 scale-110 transition-all shadow-glow" : ""}>{count}</span>
      </div>
    )
  }

  function MatrixRain() {
    // Only render a simplified version for better performance
    return (
      <div className="matrix-rain">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3,
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <span
                key={j}
                className="matrix-character"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  color: j % 5 === 0 ? "#16a34a" : "#22c55e",
                }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </span>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
