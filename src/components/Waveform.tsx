interface WaveformProps {
  bars?: number
  height?: string
  className?: string
  barClassName?: string
}

export default function Waveform({ bars = 14, height = 'h-8', className = '', barClassName = 'bg-[#f0ede8]' }: WaveformProps) {
  const heights = [30, 60, 45, 80, 55, 90, 40, 70, 50, 100, 65, 35, 75, 45]

  return (
    <div className={`flex items-center gap-[3px] ${height} ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={`wave-bar w-[3px] sm:w-[4px] rounded-sm ${barClassName}`}
          style={{ height: `${heights[i % heights.length]}%` }}
        />
      ))}
    </div>
  )
}

