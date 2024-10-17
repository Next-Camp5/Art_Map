const ExhibitionListNavigation = () => {
  return (
    <nav
      aria-label="Exhibition list navigation"
      className="flex justify-between items-center w-full"
    >
      <div>
        <button className="flex items-center gap-1" aria-label={"최신순"}>
          <span className="text-md font-bold text-gray-6">{"최신순"}</span>
          <span className="text-md font-bold text-gray-6">^</span>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button aria-label="셔플" className="flex items-center gap-1 w-6 h-6">
          <span className="text-md font-bold text-gray-6">셔플</span>
        </button>
        <button aria-label="옵션" className="flex items-center gap-1 w-6 h-6">
          <span className="text-md font-bold text-gray-6">옵션</span>
        </button>
      </div>
    </nav>
  );
};

export default ExhibitionListNavigation;
