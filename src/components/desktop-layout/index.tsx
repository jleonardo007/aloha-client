export function DesktopLayout() {
  return (
    <section className="hidden md:flex h-screen">
      <aside className="w-24 h-full"></aside>
      <div className="w-[500px] h-full"></div>
      <div className="w-[calc(100vw-596px)] h-full"></div>
    </section>
  );
}
