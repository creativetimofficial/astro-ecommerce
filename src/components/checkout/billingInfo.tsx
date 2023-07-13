interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" checked />
        <label className="custom-control-label">Same as shipping information</label>
      </div>
    </>
  );
}