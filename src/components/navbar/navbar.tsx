import { NameTag } from "./NameTag";
import { Sidebar } from "./Sidebar";

export default function Navbar() {

  return (
    <nav className={`flex items-center justify-between py-4 px-8 bg-transparent fixed z-50 w-full`}>
      <NameTag />
      <Sidebar />
    </nav>
  );
};
