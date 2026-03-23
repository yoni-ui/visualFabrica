type Props = { body: string };

export function ArticleBody({ body }: Props) {
  const paragraphs = body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return (
    <div className="space-y-6 font-body text-xl leading-relaxed text-on-surface md:text-2xl">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
