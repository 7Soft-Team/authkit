import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import LoginView from './auth/LoginView';
import SignupView from './auth/SignupView';

type View = 'login' | 'signup';

function AuthPanel() {
  const [view, setView] = useState<View>('login');

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col justify-between bg-[#F8FAFC] px-6 py-8 sm:px-10 lg:px-16 lg:py-10">
      {/* Top: logo + status badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-bl from-royal-500 to-royal-700 shadow-micro-md">
            <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.3} />
            <div className="absolute -bottom-0.5 -left-0.5 h-3 w-3 rounded-full border-2 border-[#F8FAFC] bg-tealx-500" />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-slate-900">Audit Pro</p>
            <p className="text-[11px] font-medium text-slate-400">Field Inventory · Expiry Control</p>
          </div>
        </div>

        <span className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-slate-600 shadow-micro sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-tealx-500" />
          نظام جرد ميداني احترافي
        </span>
      </div>

      {/* Center: active view */}
      <div className="flex-1 overflow-y-auto py-8">
        {view === 'login' ? (
          <LoginView key="login" onSwitchToSignup={() => setView('signup')} />
        ) : (
          <SignupView key="signup" onSwitchToLogin={() => setView('login')} />
        )}
      </div>

      {/* Footer: version + status */}
      <div className="flex items-center justify-between text-[11px] font-medium">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-semibold text-slate-600">النظام متصل وجاهز</span>
        </div>
        <span className="rounded-md bg-slate-100 px-2 py-1 font-semibold text-slate-400">v1.0</span>
      </div>
    </div>
  );
}

export default AuthPanel;
