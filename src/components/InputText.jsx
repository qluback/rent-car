export default function InputText({ label, props }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input {...props} className="border-b-2 border-black" />
    </div>
  );
}
