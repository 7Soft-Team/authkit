import { ShieldCheck, ScanLine, TrendingUp, AlertTriangle, Boxes } from 'lucide-react';

function BrandPanel() {
  return (
    <div className="relative hidden lg:flex h-full min-h-screen w-full flex-col justify-between overflow-hidden bg-royal-900 px-14 py-12">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-bl from-royal-900 via-royal-900 to-tealx-600" />
      {/* Drifting abstract grid */}
      <div
        className="absolute inset-0 animate-grid-drift opacity-[0.13]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 70% 45%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 70% 45%, black 40%, transparent 100%)',
        }}
      />
      {/* Soft glow blobs */}
      <div className="absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-tealx-500/25 blur-[120px]" />
      <div className="absolute -left-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-royal-500/30 blur-[120px]" />

      {/* Top brand lockup */}
      <div className="relative z-10 flex items-center gap-3 text-white">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
          <ShieldCheck className="h-6 w-6 text-tealx-400" strokeWidth={2.2} />
        </div>
        <div className="leading-tight">
          <p className="text-lg font-bold tracking-tight">Audit Pro</p>
          <p className="text-xs font-medium text-white/55">Commercial Field Auditing</p>
        </div>
      </div>

      {/* Floating glassmorphism preview cards */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Headline */}
        <div className="mb-2 max-w-md text-center">
          <h2 className="text-[28px] font-extrabold leading-snug text-white">
            دقة الجرد الميداني
            <br />
            <span className="bg-gradient-to-l from-tealx-400 to-white bg-clip-text text-transparent">
              وثقة تواريخ الانتهاء
            </span>
          </h2>
          <p className="mt-3 text-sm font-medium leading-relaxed text-white/65">
            منظومة احترافية لمراقبة المخزون التجاري ومسح الباركود ورقابة تواريخ الانتهاء بدقة وسرعة عالية.
          </p>
        </div>

        {/* Alert card */}
        <div className="animate-float-card w-[26rem] max-w-full animate-alert-in rounded-2xl border border-white/15 bg-white/10 p-5 shadow-glass backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 ring-1 ring-amber-300/30">
                <AlertTriangle className="h-4.5 w-4.5 text-amber-300" strokeWidth={2.3} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">تنبيه فوري</p>
                <p className="text-[11px] font-medium text-white/45">منذ ثانيتين · تحديث مباشر</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold text-emerald-300 ring-1 ring-emerald-300/25">
              مباشر
            </span>
          </div>

          <div className="rounded-xl bg-white/[0.06] p-3.5 ring-1 ring-white/10">
            <p className="text-sm font-semibold leading-relaxed text-white">
              تنبيه: <span className="text-amber-300">14 صنف</span> قارب على الانتهاء
            </p>
            <p className="mt-1 text-[11px] font-medium text-white/55">تم التحديث · فرع المركز الرئيسي</p>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: 'حرجة', value: '3', tone: 'text-rose-300' },
              { label: 'قاربت', value: '11', tone: 'text-amber-300' },
              { label: 'تم المراجعة', value: '248', tone: 'text-emerald-300' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white/[0.05] px-2.5 py-2 text-center ring-1 ring-white/10">
                <p className={`text-base font-extrabold ${s.tone}`}>{s.value}</p>
                <p className="mt-0.5 text-[9.5px] font-medium text-white/45">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scanning metrics card */}
        <div
          className="animate-float-card w-[26rem] max-w-full animate-alert-in rounded-2xl border border-white/15 bg-white/10 p-5 shadow-glass backdrop-blur-xl"
          style={{ animationDelay: '0.15s' }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-tealx-500/25 ring-1 ring-tealx-400/30">
                <ScanLine className="h-4.5 w-4.5 text-tealx-400" strokeWidth={2.3} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">دقة مسح الباركود</p>
                <p className="text-[11px] font-medium text-white/45">جلسة اليوم · مباشر</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-[10px] font-bold text-tealx-400">
              <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} /> +2.4%
            </span>
          </div>

          <div className="space-y-3">
            {[
              { label: 'نسبة الدقة', value: 99.8, color: 'from-tealx-400 to-emerald-400' },
              { label: 'سرعة المسح', value: 92, color: 'from-sky-400 to-tealx-400' },
              { label: 'مطابقة المخزون', value: 96, color: 'from-indigo-400 to-tealx-400' },
            ].map((m) => (
              <div key={m.label}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-white/65">{m.label}</span>
                  <span className="text-[11px] font-bold text-white">{m.value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`shimmer-track h-full rounded-full bg-gradient-to-l ${m.color}`}
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="relative z-10 flex items-center justify-between text-white/55">
        <div className="flex items-center gap-2 text-xs font-medium">
          <Boxes className="h-4 w-4 text-tealx-400" strokeWidth={2.2} />
          <span>مراقبة المخزون ورقابة تواريخ الانتهاء</span>
        </div>
        <p className="text-[11px] font-medium">© 2026 Audit Pro — جميع الحقوق محفوظة</p>
      </div>
    </div>
  );
}

export default BrandPanel;
