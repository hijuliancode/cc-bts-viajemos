import Dropdown from "./dropdown";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  return (
    <Dropdown label={<><Globe size={18} /> Español</>}>
      <div className="dropdown__item">Español</div>
      <div className="dropdown__item">English</div>
      <div className="dropdown__item">Português</div>
    </Dropdown>
  );
}
