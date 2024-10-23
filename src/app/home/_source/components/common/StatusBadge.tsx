interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isExhibiting = status === "전시중";
  const textColor = isExhibiting ? "text-[#7f21f7]" : "text-gray-600";
  const borderColor = isExhibiting ? "border border-[#7f21f7]" : "";

  return (
    <span
      className={`flex justify-center items-center w-[50px] h-[26px] rounded-[13px] border border-black ${borderColor}`}
      aria-label={status}
    >
      <p className={`text-sm font-bold ${textColor}`}>{status}</p>
    </span>
  );
};

export default StatusBadge;
