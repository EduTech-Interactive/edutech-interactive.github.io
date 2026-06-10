interface TeamMemberProps {
  name: string;
  description: string;
  imgSrc: string;
  flipped?: boolean;
}

export function TeamMember({
  name,
  description,
  imgSrc,
  flipped = false,
}: TeamMemberProps) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row ${
        flipped ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="shrink-0">
        <img
          src={imgSrc}
          alt={name}
          className="w-full max-w-sm object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="font-heading font-bold text-2xl">{name}</h2>
        <p className="font-body">{description}</p>
      </div>
    </div>
  );
}