import BrandPanel from '@/components/BrandPanel';
import AuthPanel from '@/components/AuthPanel';

function App() {
  return (
    <main className="grid h-screen w-full grid-cols-1 overflow-hidden bg-[#F8FAFC] lg:grid-cols-2">
      <BrandPanel />
      <AuthPanel />
    </main>
  );
}

export default App;
