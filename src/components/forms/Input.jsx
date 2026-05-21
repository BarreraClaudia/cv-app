export default function Input({ type, label, placeholder, value, onChange }) {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
