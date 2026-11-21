type Strength = 'weak' | 'medium' | 'strong';

const STRENGTH_CONFIG: Record<
  Strength,
  { label: string; bars: number; color: string; text: string }
> = {
  weak: { label: 'ضعيفة', bars: 1, color: 'bg-rose-400', text: 'text-rose-500' },
  medium: { label: 'متوسطة', bars: 2, color: 'bg-amber-400', text: 'text-amber-600' },
  strong: { label: 'قوية', bars: 3, color: 'bg-emerald-500', text: 'text-emerald-600' },
};

export function calcStrength(pw: string): Strength {
  if (!pw) return 'weak';
  let score = 0;
  if (pw.length >= 6) score++;
  if (pw.length >= 10) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (score <= 2) return 'weak';
  if (score <= 3) return 'medium';
  return 'strong';
}

export function PasswordStrengthMeter({ password }: { password: string }) {
  if (!password) return null;
  const strength = calcStrength(password);
  const cfg = STRENGTH_CONFIG[strength];

  return (
    <div className="mt-2 flex items-center gap-2.5">
      <div className="flex flex-1 gap-1.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 ${
              i <= cfg.bars ? '' : 'opacity-100'
            }`}
          >
            <div
              className={`h-full rounded-full ${i <= cfg.bars ? cfg.color : 'bg-transparent'}`}
            />
          </div>
        ))}
      </div>
      <span className={`text-[11px] font-bold ${cfg.text}`}>{cfg.label}</span>
    </div>
  );
}
