export default function AppTextInput({
  value = '',
  label = '',
  onChange,
  className = '',
  id,
  dataCy = ''
}) {
  return (
    <div className={className}>
      <label
        className="text-left text-sm w-full"
        htmlFor={id}
        data-cy={`${dataCy}-label`}
      >
        {label}
      </label>
      <input
        id={id}
        className="p-2 rounded-md text-neutral-900 w-full"
        type="text"
        value={value}
        onChange={onChange}
        data-cy={`${dataCy}-input`}
      />
    </div>
  )
}
