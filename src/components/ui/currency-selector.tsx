import Dropdown from "./dropdown";
import { CircleDollarSign } from "lucide-react";

export default function CurrencySelector() {
  return (
    <Dropdown
      label={
        <>
          <CircleDollarSign size={18} /> COP
        </>
      }
    >
      <div className="dropdown__item">USD - Dólar Estadounidense</div>
      <div className="dropdown__item">COP - Peso Colombiano</div>
      <div className="dropdown__item">EUR - Euro</div>
    </Dropdown>
  );
}
