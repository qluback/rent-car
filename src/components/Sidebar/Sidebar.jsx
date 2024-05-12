export default function Sidebar({ children }) {
  return (
    <section className="w-1/3 bg-black flex flex-col justify-center items-center gap-8 p-12 h-screen overflow-y-scroll">
      {children}
    </section>
  );
}
