export default function Select({ label, options }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <select className="border-2 border-black">
        {options.map(({value, label}) => {
          return (
            <option key={label} value={value}>{label}</option>
          );
        })}
      </select>
    </div>
  );
}
