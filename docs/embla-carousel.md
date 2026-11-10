# Embla Carousel

Dipasang lewat shadcn `carousel`, ditambah dua plugin:

```bash
bun add embla-carousel-autoplay@8.6.0 embla-carousel-fade@8.6.0
```

Versi plugin dikunci ke `8.6.0` agar sama dengan `embla-carousel-react`.

## Pemakaian di repo

- `src/components/sections/slider.tsx` membungkus carousel shadcn menjadi `Slider`, `SliderTrack`, `SliderNav` (panah dan titik). Section (hero, presentasi, testimoni, galeri) memakai pembungkus ini, bukan `Carousel` langsung.
- Autoplay dan fade dipasang lewat prop `plugins` pada `Slider`. Autoplay memakai `stopOnInteraction: false`, jadi tetap berjalan setelah pengguna menggeser.
- Patch lokal di `src/components/ui/carousel.tsx`: lihat `docs/shadcn-ui.md`.
