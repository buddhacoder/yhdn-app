/**
 * SVG Haitian Flag with animated reveal.
 * Blue top, red bottom, simplified coat of arms center.
 */
export default function HaitianFlag({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 600 360"
      className={className}
      style={{ width: '100%', maxWidth: 420, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Flag of Haiti"
    >
      {/* Blue band */}
      <rect x="0" y="0" width="600" height="180" fill="#00209F" />
      {/* Red band */}
      <rect x="0" y="180" width="600" height="180" fill="#D21034" />

      {/* White rectangle for coat of arms background */}
      <rect x="225" y="100" width="150" height="160" rx="6" fill="white" />

      {/* Palm tree trunk */}
      <rect x="293" y="155" width="14" height="60" rx="3" fill="#5D4E37" />
      {/* Palm fronds */}
      <path d="M300 155 C285 135, 255 130, 240 140" stroke="#228B22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M300 155 C295 130, 280 120, 265 125" stroke="#228B22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M300 155 C305 130, 320 120, 335 125" stroke="#228B22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M300 155 C315 135, 345 130, 360 140" stroke="#228B22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M300 150 C300 135, 300 125, 300 115" stroke="#228B22" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Extra fronds for fullness */}
      <path d="M300 155 C290 140, 268 132, 252 138" stroke="#1E7B1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M300 155 C310 140, 332 132, 348 138" stroke="#1E7B1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Phrygian cap on pike */}
      <rect x="297" y="105" width="6" height="20" fill="#5D4E37" />
      <ellipse cx="300" cy="108" rx="10" ry="7" fill="#D21034" />

      {/* Cannons */}
      <rect x="258" y="210" width="36" height="8" rx="3" fill="#3A3A3A" transform="rotate(-15, 276, 214)" />
      <rect x="306" y="210" width="36" height="8" rx="3" fill="#3A3A3A" transform="rotate(15, 324, 214)" />
      {/* Cannonballs */}
      <circle cx="270" cy="230" r="4" fill="#3A3A3A" />
      <circle cx="280" cy="233" r="4" fill="#3A3A3A" />
      <circle cx="275" cy="238" r="3.5" fill="#4A4A4A" />
      <circle cx="320" cy="230" r="4" fill="#3A3A3A" />
      <circle cx="330" cy="233" r="4" fill="#3A3A3A" />
      <circle cx="325" cy="238" r="3.5" fill="#4A4A4A" />

      {/* Ribbon / Motto banner */}
      <path
        d="M240 242 Q250 248, 300 248 Q350 248, 360 242 L355 252 Q300 258, 245 252 Z"
        fill="#D4A843"
        stroke="#B8922E"
        strokeWidth="0.5"
      />
      <text
        x="300"
        y="250"
        textAnchor="middle"
        fill="#1a2a44"
        fontSize="7.5"
        fontWeight="700"
        fontFamily="serif"
        letterSpacing="0.5"
      >
        L'UNION FAIT LA FORCE
      </text>
    </svg>
  )
}
