interface RecommendContainerProps {
  title: string;
  subtitle: string;
}

export default function RecommendContainer(props: RecommendContainerProps) {
  const { title, subtitle } = props;
  return (
    <section className="flex flex-col">
      <p className="fonts-recommendTitle">{title}</p>
      <p className="fonts-recommnedSubtitle">{subtitle}</p>
    </section>
  );
}
