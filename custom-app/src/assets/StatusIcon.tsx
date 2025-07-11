import type { FC } from 'react'

interface StatusIconProps {
  isDark?: boolean
}

const StatusIcon: FC<StatusIconProps> = ({ isDark = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M1.59998 7.73277H4.79998L6.43233 2.3999L9.95051 13.5999L11.1922 7.73277H14.4"
        stroke={isDark ? '#FBFDFF' : '#475569'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default StatusIcon
