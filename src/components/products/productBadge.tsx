interface Props {
  colors: string[];
}

export default function ProductBadge({
  colors,
}: Props) {
  return (
    <>
      <div>{colors.map(color => badge(color))}</div>
    </>
  );
}

function badge(color:string) {
  const badgeClass = "badge filter bg-" + color;
  const badge = <span className={badgeClass}></span>
  
  return badge;
}

