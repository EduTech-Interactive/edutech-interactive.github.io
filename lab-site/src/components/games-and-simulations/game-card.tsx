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
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className=" w-full overflow-hidden">
        <img
            src={imageSrc}
            alt="game img"
            className="aspect-video"
        />
        </div>

        <div className="flex flex-1 flex-col p-6">
            <h3 className="mb-3 text-lg font-bold">
            {title}
            </h3>

            <p className="mb-4 text-sm">
            {description}
            </p>

            <p className="mb-6 text-xs font-medium tracking-wide">
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