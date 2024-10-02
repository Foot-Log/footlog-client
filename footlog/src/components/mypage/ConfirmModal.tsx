interface ConfirmModalProps {
  handleConfirmBtn: () => void;
  handleCloseBtn: () => void;
}

export default function ConfirmModal(props: ConfirmModalProps) {
  const { handleConfirmBtn, handleCloseBtn } = props;

  return (
    <main className="fixed inset-0 z-50 flex w-full justify-center bg-black bg-opacity-50">
      <section className="absolute top-278pxr flex h-202pxr w-276pxr flex-col items-center gap-24pxr rounded-confirmModal bg-white pl-12pxr pt-32pxr">
        <section className="flex flex-col gap-8pxr">
          <p className="fonts-recommendTitle">정말로 탈퇴하시겠어요?</p>
          <p className="fonts-newLogContent">영구적으로 계정이 삭제됩니다</p>
        </section>
        <button
          type="button"
          onClick={() => {
            handleConfirmBtn();
          }}>
          <p className="fonts-confirmRed">탈퇴</p>
        </button>
        <button
          type="button"
          onClick={() => {
            handleCloseBtn();
          }}>
          <p className="fonts-confirmGray">취소</p>
        </button>
      </section>
    </main>
  );
}
