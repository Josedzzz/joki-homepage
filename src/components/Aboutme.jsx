import Bio from "./Bio.jsx";
import Findme from "./Findme.jsx";
import Intro from "./Intro.jsx";

export default function Aboutme() {
  return (
    <main className="flex flex-col gap-3 p-4 mx-auto max-w-xl">
      <Findme />
      <Intro />
      <Bio />
    </main>
  );
}
