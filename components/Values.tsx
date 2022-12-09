import Image from "next/image";
import { value } from "../utils/values";

interface ValueProps {
  value: value;
}

interface ValuesProps {
  values: value[];
}

const Values: React.FC<ValuesProps> = ({ values }) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value) => (
        <Value value={value} key={value.title} />
      ))}
    </div>
  );
};

const Value: React.FC<ValueProps> = ({ value }) => {
  return (
    <div className="flex flex-col  items-center text-center text-white gap-4 border border-white p-4 rounded">
      <Image src={value.image} alt={value.title} width={80} height={80} />
      <h1 className="text-2xl font-bold">{value.title}</h1>
      <h1 className="text-xl ">{value.text}</h1>
    </div>
  );
};

export default Values;
