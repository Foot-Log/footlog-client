import { Blank, BlankPlus, LogCloseBtn } from '@public/icon';
import React from 'react';

interface MarkerModalProps {
  location: string;
  onClose: () => void;
}

export default function MarkerModal({ location, onClose }: MarkerModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
      <div
        style={{
          width: '393px',
          height: '374px',
          flexShrink: 0,
          borderRadius: '20px 20px 0px 0px',
          background: '#FFF',
          boxShadow: '0px -4px 8px 0px rgba(0, 0, 0, 0.20)',
          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
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

          <div className="relative mt-20pxr">
            <Blank />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex h-104pxr w-104pxr items-center justify-center">
              <BlankPlus />
            </div>
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
