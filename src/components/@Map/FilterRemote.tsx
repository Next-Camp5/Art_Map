"use client";

import { useState } from "react";
import FilterModal from "./FilterModal";

const FilterRemote = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setIsActive(true)}>모달오픈버튼!!</button>

      {isActive && <FilterModal onClose={() => setIsActive(false)} />}
    </div>
  );
};

export default FilterRemote;
