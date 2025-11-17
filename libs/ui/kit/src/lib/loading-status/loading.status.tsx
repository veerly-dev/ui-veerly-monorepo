export function LoadingStatus() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <span className="loading loading-spinner loading-lg text-white"></span>
    </div>
  );
}
