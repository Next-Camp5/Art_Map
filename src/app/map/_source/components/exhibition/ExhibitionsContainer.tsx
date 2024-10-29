import { getSimpleExhibitionsByArtGalleryId } from '@/actions/exhibition/getExhibition';
import Button from '@/components/common/Botton';
import ExhibitionStatusTag from '@/components/common/exhibitionStatusTag/ExhibitionStatusTag';
import HeartIcon from '@/components/Icon/HeartIcon';
import { SimpleExhibition } from '@/services/exhibition/type';
import formatDate from '@/utils/date/formatDate';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

interface props {
  selectedArtGalleryId: number;
}

const ExhibitionsContainer = ({ selectedArtGalleryId }: props) => {
  const [exhibitions, setExhibitions] = useState<SimpleExhibition[]>([]);

  useEffect(() => {
    const f = async () => {
      const d = await getSimpleExhibitionsByArtGalleryId(
        selectedArtGalleryId,
        1
      );
      setExhibitions(d.exhibitions);
    };
    f();
    return () => {};
  }, [selectedArtGalleryId]);

  return (
    <div className="absolute bottom-5 z-30 bg-white p-[15px]">
      {exhibitions.map((exhibition) => (
        <div key={exhibition.id} className="flex">
          <Image
            src={
              exhibitions[0].image ? exhibitions[0].image : './prototypeImg.jpg'
            }
            alt="전시 이미지"
            height={100}
            width={100}
            className="h-[100px] w-[100px] object-cover mr-[10px]"
          />
          <div className="">
            <div className="flex mb-[5px]">
              <p className="w-[138px] text-md font-bold text-primary text-ellipsis overflow-hidden whitespace-nowrap mr-[15px]">
                {exhibition.title}
              </p>
              <div>
                <ExhibitionStatusTag
                  state={exhibition.status}
                  isBorder={true}
                />
              </div>
            </div>
            <div className="text-sm text-gray-4 mb-[13px]">
              <p>{exhibition.artGallery.name}</p>
              <p>{`${formatDate(exhibition.startDate)} ~ ${formatDate(exhibition.endDate)}`}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-sm text-point">
                {exhibition.artGallery.ClosedDays
                  ? `${exhibition.artGallery.ClosedDays} 휴무`
                  : '휴무 없음'}
              </p>
              <HeartIcon fill="white"></HeartIcon>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ExhibitionsContainer);
