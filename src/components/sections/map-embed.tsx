export function MapEmbed({
  query,
  title,
}: {
  query: string;
  title: string;
}) {
  return (
    <div className="h-[300px] w-full md:h-[600px]">
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full border-0"
      />
    </div>
  );
}
