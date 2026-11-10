import { CheckIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { ImageScrim } from "@/components/layout/image-scrim";

type Hours = { days: string; time: string };

export function ReservationAside({
  image,
  title,
  notes,
  hours,
  phone,
  address,
}: {
  image: { src: string; alt: string };
  title: string;
  notes: readonly string[];
  hours: readonly Hours[];
  phone: string;
  address: string;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative h-[220px] sm:h-[280px] lg:h-auto lg:min-h-[200px] lg:flex-1">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <ImageScrim />
      </div>
      <div className="bg-secondary p-[30px]">
        <h3 className="mb-5 text-[22px] md:text-2xl">{title}</h3>
        <ul className="flex flex-col gap-4 text-base">
          <li className="flex gap-3">
            <ClockIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <span className="sr-only">Jam buka</span>
              {hours.map((h) => (
                <p key={h.days}>
                  {h.days}: {h.time}
                </p>
              ))}
            </div>
          </li>
          <li className="flex gap-3">
            <PhoneIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <a
              href={`tel:${phone.replace(/[\s-]/g, "")}`}
              className="transition-colors hover:text-primary focus-visible:text-primary"
            >
              <span className="sr-only">Telepon </span>
              {phone}
            </a>
          </li>
          <li className="flex gap-3">
            <MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p>
              <span className="sr-only">Alamat </span>
              {address}
            </p>
          </li>
        </ul>
        <ul className="mt-6 flex flex-col gap-2.5 border-t border-input pt-6 text-base">
          {notes.map((note) => (
            <li key={note} className="flex gap-3">
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
