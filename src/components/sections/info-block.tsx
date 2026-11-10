import { Container } from "@/components/layout/container";
import { Deco } from "@/components/layout/deco";
import { Section } from "@/components/layout/section";
import { reveal } from "@/lib/reveal";

export function InfoBlock({ title }: { title: string }) {
  return (
    <div className="overflow-x-clip bg-muted">
      <Container className="relative">
        <Section className="relative lg:overflow-y-hidden">
          <h3 {...reveal("up")} className="relative z-[1] max-w-[700px]">{title}</h3>
          <Deco
            src="/svg/deco/info.svg"
            className="absolute -top-[55px] right-[150px] hidden h-[284px] w-[210px] bg-secondary lg:block xl:right-[280px]"
          />
        </Section>
        <Deco
          src="/svg/deco/info.svg"
          className="absolute -top-[90px] right-0 hidden h-[426px] w-[316px] -scale-x-100 bg-primary lg:block xl:-right-[280px] 2xl:-right-[120px]"
        />
      </Container>
    </div>
  );
}
