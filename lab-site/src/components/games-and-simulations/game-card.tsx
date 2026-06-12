import { Link } from "@tanstack/react-router";
import { Button } from "../shared/ui/button";

type GameCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  credits: string;
  buttonText: string;
  href: string;
};

export function GameCard({
  imageSrc,
  title,
  description,
  credits,
  buttonText,
  href,
}: GameCardProps) {
  return (
    <div className="flex h-[400px] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm max-w-[300px] ">
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={"game img"}
          className="h-full w-full object-cover max-w-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
          {credits}
        </p>

        <div className="mt-auto">
          <Button>
            <Link to={href}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}