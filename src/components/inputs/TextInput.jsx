export default function TextInput({
  label,
  name,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input
        name={name}
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required={required}
      />
    </div>
  );
}
