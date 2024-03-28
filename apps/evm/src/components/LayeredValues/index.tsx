export interface LayeredValuesProps {
  topValue: string | number;
  bottomValue: string | number;
  className?: string;
}

export const LayeredValues: React.FC<LayeredValuesProps> = ({
  topValue,
  bottomValue,
  className,
}) => (
  <div className={className}>
    {/* <p>{topValue}</p>
    <p className="text-grey">{bottomValue}</p> */}
    <p>0%</p>
    <p className="text-grey">0%</p>
  </div>
);

export default LayeredValues;
