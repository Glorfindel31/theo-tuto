import FullPageImageView from "~/app/components/full-image-page";

export default function ImagePage({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imgId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");
  return <FullPageImageView id={idAsNumber} />;
}
