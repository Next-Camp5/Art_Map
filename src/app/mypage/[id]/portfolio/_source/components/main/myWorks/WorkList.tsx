import Image from 'next/image';

import { MOCK_DATA } from '../../__mock__/portfolio';

const WorkList = () => {
  return (
    <ul className="columns-2">
      {MOCK_DATA.data.map((data, index) => (
        <li key={index} className="mb-5">
          <figure className="flex flex-col break-inside-avoid">
            <Image
              src={data.image_url}
              alt={data.title}
              aria-describedby={`work-desc-${index}`}
              className="mb-2.5"
            />
            <figcaption className="flex flex-col gap-[5px]">
              <div className="flex flex-col">
                <h3 className="font-medium">{data.title}</h3>
                <strong className="text-sm text-gray-600">{data.artist}</strong>
              </div>
              <div className="flex flex-col text-sm text-gray-500">
                <span>{data.location}</span>
                <span>{data.description}</span>
              </div>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
};

export default WorkList;
