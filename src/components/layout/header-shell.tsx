"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const HIDE_AFTER = 500;

export function HeaderShell({
  logo,
  children,
}: {
  logo: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const open = openedAt === pathname;

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    function update() {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 0);
      setHidden(y > HIDE_AFTER && y > lastY);
      lastY = y;
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    const close = () => setOpenedAt(null);
    window.addEventListener("resize", close);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const toggle = useCallback(
    () => setOpenedAt(open ? null : pathname),
    [open, pathname],
  );

  const sticky = scrolled || open;

  return (
    <header
      data-open={open}
      className={cn(
        "group/header fixed inset-x-0 top-0 z-50 transition-all duration-500 will-change-transform xl:flex xl:h-[100px] xl:items-center",
        sticky && "bg-secondary xl:h-20",
        hidden && !open && "-translate-y-full",
        open && "h-screen",
      )}
    >
      <Container className="flex min-h-[70px] flex-wrap items-center justify-between py-2.5 xl:flex-nowrap">
        {logo}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={toggle}
          className="relative z-50 order-2 flex h-[25px] w-10 flex-col justify-between xl:hidden group-data-[open=true]/header:w-[30px]"
        >
          <span className="relative block h-[3px] w-full bg-heading transition-all group-data-[open=true]/header:top-[13px] group-data-[open=true]/header:rotate-45" />
          <span className="relative block h-[3px] w-full bg-heading transition-all group-data-[open=true]/header:-top-2.5 group-data-[open=true]/header:-rotate-45" />
          <span className="block h-[3px] w-[30px] self-end bg-heading transition-all group-data-[open=true]/header:hidden" />
        </button>
        <nav
          id="site-nav"
          aria-label="Utama"
          className="order-3 mt-[30px] hidden max-h-[calc(100vh-100px)] w-full overflow-y-auto group-data-[open=true]/header:block xl:order-none xl:mt-0 xl:flex xl:max-h-none xl:flex-1 xl:items-center xl:overflow-visible"
        >
          {children}
        </nav>
      </Container>
    </header>
  );
}
