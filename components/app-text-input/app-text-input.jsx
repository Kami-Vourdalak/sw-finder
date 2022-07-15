export default function AppTextInput({
  value = '',
  label = '',
  onChange,
  className = '',
  id
}) {
  return (
    <div className={className}>
      <label className="text-left text-sm w-full" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="p-2 rounded-md text-neutral-900 w-full"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
