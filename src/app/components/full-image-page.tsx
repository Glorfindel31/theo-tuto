import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink"></div>
      <img
        src={image.url}
        alt={image.name}
        className="flex-shrink object-contain"
      />
      ;
      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-semibold">{image.name}</div>
        <div className="text-xl font-semibold">{image.url}</div>
      </div>
    </div>
  );
}
