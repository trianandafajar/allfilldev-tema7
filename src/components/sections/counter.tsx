import { CountUp } from "@/components/sections/count-up";

export type CounterStat = { value: number; label: string };

const statTone = ["bg-input", "bg-primary", "bg-heading"] as const;

export function Counter({
  subtitle,
  title,
  titleBreak,
  stats,
}: {
  subtitle: string;
  title: string;
  titleBreak: string;
  stats: readonly CounterStat[];
}) {
  return (
    <section className="sm:flex sm:flex-wrap">
      <div className="bg-secondary px-5 py-[30px] text-center sm:flex sm:h-[150px] sm:w-1/2 sm:flex-col sm:justify-center sm:text-left md:h-[200px] lg:w-1/4 2xl:px-[60px]">
        <span className="block text-base font-medium uppercase text-heading">
          {subtitle}
        </span>
        <h4>
          {title}
          <span className="lg:block"> {titleBreak}</span>
        </h4>
      </div>
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex flex-col gap-1 px-5 py-[30px] text-center font-heading font-semibold text-primary-foreground sm:h-[150px] sm:w-1/2 sm:justify-center md:h-[200px] lg:w-1/4 lg:gap-[15px] 2xl:px-[60px] ${statTone[index % statTone.length]}`}
        >
          <CountUp
            value={stat.value}
            className="flex h-[30px] items-center justify-center text-[30px] font-bold leading-[1.3] md:h-10 md:text-[40px] lg:h-12 lg:text-5xl lg:leading-[1.2]"
          />
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
