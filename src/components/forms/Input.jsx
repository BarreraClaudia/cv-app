export default function Input({
  type,
  label,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'input-error' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  );
}
