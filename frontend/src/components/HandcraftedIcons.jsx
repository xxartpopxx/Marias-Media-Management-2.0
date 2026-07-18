/**
 * Hand-crafted, editorial SVG icons with an organic, illustrated feel.
 * Softer strokes, duotone fills, and slightly imperfect curves — designed
 * to feel human-drawn instead of the clean geometric lucide-react defaults.
 *
 * All icons accept className and inherit currentColor for the stroke.
 */

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 48 48',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 2.4,
  'aria-hidden': 'true'
};

// Heart — soft, slightly asymmetric with a small inner sparkle
export const HeartMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M24 40c-2.4-1.6-14-8.6-14-19.5C10 15 14.2 11 19.4 11c2.9 0 5.1 1.5 6.6 3.6C27.4 12.5 29.7 11 32.6 11 37.8 11 42 15 42 20.5 42 31.4 30.4 38.4 28 40c-.9.6-3.1.6-4 0Z"
      stroke="currentColor"
      strokeOpacity="0.95"
    />
    <path
      d="M21.5 20c1.4-2 3.9-3 6.2-2.6"
      stroke={accent}
      strokeOpacity="0.55"
      strokeWidth="2"
    />
    <circle cx="34" cy="19" r="1" fill={accent} opacity="0.6" />
  </svg>
);

// Bolt / lightning — for Strategy — sketched with an inner highlight
export const BoltMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M27 6 12 27h9l-3 15 15-21h-9l3-15Z"
      stroke="currentColor"
    />
    <path
      d="M20 25c1.5-.4 3-.4 4.5 0"
      stroke={accent}
      strokeOpacity="0.55"
      strokeWidth="1.8"
    />
    <circle cx="30" cy="14" r="0.9" fill={accent} opacity="0.6" />
  </svg>
);

// Target — concentric hand-drawn rings with a small arrow flourish
export const TargetMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <circle cx="24" cy="24" r="15" stroke="currentColor" />
    <circle cx="24" cy="24" r="9" stroke="currentColor" strokeOpacity="0.8" />
    <circle cx="24" cy="24" r="3.5" fill={accent} opacity="0.85" stroke="none" />
    <path
      d="M32 16l6-6M35 10h3v3"
      stroke={accent}
      strokeOpacity="0.85"
      strokeWidth="2"
    />
  </svg>
);

// Sparkle — for Content Creation — four-point star + tiny satellites
export const SparkMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M24 8c1.5 6.5 3.5 8.5 10 10-6.5 1.5-8.5 3.5-10 10-1.5-6.5-3.5-8.5-10-10 6.5-1.5 8.5-3.5 10-10Z"
      stroke="currentColor"
    />
    <path
      d="M36 32c.7 2.7 1.4 3.4 4 4-2.6.6-3.3 1.3-4 4-.7-2.7-1.4-3.4-4-4 2.6-.6 3.3-1.3 4-4Z"
      stroke={accent}
      strokeOpacity="0.75"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="36" r="1.4" fill={accent} opacity="0.7" />
  </svg>
);

// Community — two people illustrated warmly
export const CommunityMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <circle cx="18" cy="17" r="5.5" stroke="currentColor" />
    <path
      d="M8 38c1.4-5.5 5.4-8.5 10-8.5s8.6 3 10 8.5"
      stroke="currentColor"
    />
    <circle cx="32" cy="14" r="4" stroke={accent} strokeOpacity="0.7" strokeWidth="2" />
    <path
      d="M28 26c1.2-1.8 3-2.8 5-2.8 3.5 0 6.5 2.5 7.5 6.5"
      stroke={accent}
      strokeOpacity="0.7"
      strokeWidth="2"
    />
  </svg>
);

// Growth — hand-plotted upward line + tiny plant leaf
export const GrowthMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M8 34c4-1 7-4 10-9s5-11 10-14"
      stroke="currentColor"
    />
    <path
      d="M28 11h9v9"
      stroke="currentColor"
    />
    <path
      d="M14 40c1-3 3-5 6-5.5"
      stroke={accent}
      strokeOpacity="0.6"
      strokeWidth="2"
    />
    <path
      d="M18 34c.5-1.8 2-3 3.8-3 .3 1.8-.6 3.4-2.4 4-.4-.3-.9-.6-1.4-1Z"
      fill={accent}
      opacity="0.5"
      stroke="none"
    />
  </svg>
);

// Website / Globe — hand-drawn with a soft meridian and a small "sun"
export const GlobeMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <circle cx="24" cy="24" r="14" stroke="currentColor" />
    <path
      d="M10 24h28M24 10c4.5 4 4.5 24 0 28-4.5-4-4.5-24 0-28Z"
      stroke="currentColor"
      strokeOpacity="0.9"
    />
    <path
      d="M14 15c3 1 6 1.4 10 1.4s7-.4 10-1.4"
      stroke={accent}
      strokeOpacity="0.55"
      strokeWidth="1.8"
    />
  </svg>
);

// Chat bubble — for Brand Consistency / Community
export const ChatMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M9 12h26c1.7 0 3 1.3 3 3v15c0 1.7-1.3 3-3 3H20l-8 7v-7h-3c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3Z"
      stroke="currentColor"
    />
    <path
      d="M15 20h18M15 25h12"
      stroke={accent}
      strokeOpacity="0.6"
      strokeWidth="2"
    />
  </svg>
);

// Camera — softened corners, slightly organic
export const CameraMark = ({ className = 'w-10 h-10', accent = 'currentColor' }) => (
  <svg {...baseProps} className={className}>
    <path
      d="M8 15c0-1.7 1.3-3 3-3h6l3-4h8l3 4h6c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3H11c-1.7 0-3-1.3-3-3V15Z"
      stroke="currentColor"
    />
    <circle cx="24" cy="26" r="7" stroke="currentColor" />
    <circle cx="24" cy="26" r="3" fill={accent} opacity="0.7" stroke="none" />
    <circle cx="35" cy="17" r="1" fill={accent} opacity="0.8" stroke="none" />
  </svg>
);

// Check — sketched, slightly organic — for lists
export const CheckMark = ({ className = 'w-4 h-4', accent = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={accent}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.6"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.5 12.5c2 1.5 4 3 5.5 5 2.5-5 6-9 10-11.5" />
  </svg>
);
