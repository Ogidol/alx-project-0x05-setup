type PillProps = { label: string; active: boolean; onClick: () => void };
const Pill: React.FC<PillProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full border ${
      active ? "bg-blue-600 text-white" : "bg-white"
    }`}
  >
    {label}
  </button>
);
export default Pill;
