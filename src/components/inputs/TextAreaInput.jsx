export default function TextAreaInput({
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
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required={required}
      />
    </div>
  );
}
