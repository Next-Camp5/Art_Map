'use client';

import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache';
import getExhibitionAreaInfo from '../map/_source/actions/exhibitionsAreaInfo';
import { useCustomActionState } from '@/hooks/useCustomActionState';
import updateExhibition from '@/actions/exhibition/updateExhibition';

const Test = () => {
  const { state, run, isPending } = useCustomActionState(getExhibitionAreaInfo);
  console.log(state);

  return (
    <>
      <button>나는 버튼이에요</button>
      <div></div>
    </>
  );
};

export default Test;
