import { Blank, BlankPlus, LogCloseBtn } from '@public/icon';
import React from 'react';

interface MarkerModalProps {
  location: string;
  onClose: () => void;
}

export default function MarkerModal({ location, onClose }: MarkerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
      <div className="shadow-markerModal rounded-markerModal fixed bottom-0 left-1/2 h-374pxr w-393pxr flex-shrink-0 -translate-x-1/2 transform bg-white">
        <div className="mx-24pxr mb-40pxr mt-20pxr">
          <div className="flex">
            <div className="fonts-logOneLocation">{location}</div>
            <button className="ml-auto" onClick={onClose}>
              <LogCloseBtn />
            </button>
          </div>

          <div className="fonts-logContent mt-24pxr h-72pxr w-345pxr rounded-md bg-gray-3 px-16pxr py-12pxr opacity-50">
            나만의 기록을 남겨 보세요.
          </div>

          <div className="mt-20pxr">
            <Blank />
          </div>

          <button
            onClick={onClose}
            className="fonts-logDone mt-23pxr h-48pxr w-345pxr items-center justify-center rounded-xl bg-main-green">
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
