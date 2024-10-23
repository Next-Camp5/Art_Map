import Button from '@/components/common/Botton';
import Modal from '@/components/common/modal/Modal';
import BottomArrowIcon from '@/components/Icon/BottomArrowIcon';
import XIcon from '@/components/Icon/XIcon';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const GuSearchModal = ({ onClose }: { onClose: () => void }) => {
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const container = useRef<HTMLDivElement>(null);

  const onClickCloseButton = () => {
    tl?.reverse();
    setIsClosing(true);
  };
  const handleClose = () => {
    onClose();
  };

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      container.current,
      { y: '-100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onReverseComplete: handleClose,
      }
    );
    tl.play();
    setTl(tl);
  }, []);

  return (
    <Modal isClosing={isClosing} onClose={onClickCloseButton}>
      <div
        ref={container}
        className="bg-white px-[16px] fixed top-0 w-[380px] pb-[20px]"
        style={{ boxShadow: '0px 0px 10px 0 rgba(26,26,26,0.1)' }}
      >
        <div className=" relative flex justify-center mt-[26px] mb-[18px]">
          <div className=" absolute left-0 top-1 " onClick={onClickCloseButton}>
            <XIcon />
          </div>
          <p className="text-md font-bold text-primary">위치 설정</p>
        </div>
        <div className="mb-[30px]">
          <div className="flex justify-between items-center h-10 relative px-[15px] rounded-[20px] bg-white border border-gray-3 mb-[18px]">
            <p className=" text-md  text-primary">서울특별시</p>
            <BottomArrowIcon />
          </div>

          <div className="flex justify-between items-center h-10 relative px-[15px] rounded-[20px] bg-white border border-gray-3">
            <p className=" text-md  text-primary">마포구</p>
            <BottomArrowIcon />
          </div>
        </div>
        <div className=" mb-[30px]">
          <p className=" text-primary text-xs mb-[10px]">최근 지역</p>
          <div></div>
        </div>
        <div>
          <Button size="L" color="primary" border={false}>
            찾아보기
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default GuSearchModal;
