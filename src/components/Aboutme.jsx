import Bio from "./Bio.jsx";
import Findme from "./Findme.jsx";
import Intro from "./Intro.jsx";

export default function Aboutme() {
  return (
    <main className="flex flex-col gap-6 p-4 mx-auto max-w-xl appear-bottom">
      <Findme />
      <Intro />
      <Bio />
    </main>
  );
}
