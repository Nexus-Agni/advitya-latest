import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  targetDate: Date
}

const CountdownUnit: React.FC<{ value: number; label: string; color: string }> = ({ value, label, color }) => (
  <motion.div
    className={`flex flex-col items-center justify-center p-4 rounded-lg bg-opacity-10 backdrop-blur-lg shadow-lg ${color}`}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.span
      className="text-4xl font-bold mb-1"
      key={value}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {value}
    </motion.span>
    <span className="text-sm opacity-80">{label}</span>
  </motion.div>
)

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const { days, hours, minutes, seconds } = timeLeft as any

  return (
    <div className="p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-purple-500 text-center mb-8">Coming Soon </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CountdownUnit value={days} label="Days" color="text-purple-500" />
        <CountdownUnit value={hours} label="Hours" color="text-violet-500" />
        <CountdownUnit value={minutes} label="Minutes" color="text-pink-500" />
        <CountdownUnit value={seconds} label="Seconds" color="text-purple-500" />
      </div>
    </div>
  )
}


