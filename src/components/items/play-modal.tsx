import { useModal } from "@/features/modals";
import Button from "../button";
import Icon from "../icon";

export function PlayModal({ videoUrl }: { videoUrl: string }) {
  const { openModal } = useModal();

  const handlePlay = () => {
    openModal(
      <div className="w-full h-full min-h-[80vh] rounded-sm overflow-hidden select-none">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full min-h-[80vh]"
          allowFullScreen
        />
      </div>,
      { size: "xl" }
    );
  };

  return (
    <Button onClick={handlePlay} className="flex items-center">
      <Icon icon="play-circle" className="mr-2" />
      Video Demo
    </Button>
  );
}
