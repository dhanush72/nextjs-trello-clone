import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-slate-100">
      <Navbar />
      <main className="h-full pt-40 pb-20 bg-slate-200">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
