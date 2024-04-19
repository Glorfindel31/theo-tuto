import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      ;
      <div className="flex w-72 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-semibold">{image.name}</div>
        <div className="text-xl font-semibold">{image.url}</div>
      </div>
    </div>
  );
}
