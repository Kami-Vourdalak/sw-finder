import { useMemo } from 'react'

export default function AppButton({
  text,
  onClick,
  className = '',
  type = 'primary',
  dataCy = ''
}) {
  const typeClass = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'bg-gray-400 color-white'
      case 'cancel':
        return 'bg-red-400 color-white'
      default:
        return ''
    }
  }, [type])
  return (
    <button
      className={`p-2 rounded-md ${typeClass} ${className}`}
      onClick={onClick}
      data-cy={dataCy}
    >
      {text}
    </button>
  )
}
