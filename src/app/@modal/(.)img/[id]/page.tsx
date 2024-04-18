import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function ImageModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imgId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
