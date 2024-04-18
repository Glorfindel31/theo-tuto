import { getImageById } from "~/server/queries";

export default async function ImageModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imgId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");
  const image = await getImageById(idAsNumber);
  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
}
