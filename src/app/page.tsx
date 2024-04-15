const mockURLs = [
  "https://utfs.io/f/94c7f68b-126f-4e1d-88e3-e2551137ffe2-y4q2in.jpg",
  "https://utfs.io/f/6e0fd3e5-9abc-4744-a307-921a8854101d-y4q2gx.jpg",
  "https://utfs.io/f/8f5267db-aff6-4b7e-99c6-87bd2385fca8-y4q1ry.jpg",
  "https://utfs.io/f/de6ac138-3f21-4938-9a05-1e0f3ffe766c-y4q37m.jpg",
  "https://utfs.io/f/61e56571-df51-4277-9b86-9bb45ae9167d-y4q38h.jpg",
  "https://utfs.io/f/8223443d-8e1a-4f54-83f4-398b69c2b608-y4q3cs.jpg",
  "https://utfs.io/f/ff987c52-c4ba-421c-b5d4-d056f9b61c36-y4q3bx.jpg",
];
const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
