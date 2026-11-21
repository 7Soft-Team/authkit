import { useState } from 'react';
import { User, Lock, ArrowLeft, Fingerprint } from 'lucide-react';
import { TextField, Checkbox, PasswordToggle } from '../form/Fields';

function LoginView({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!username.trim()) next.username = 'يرجى إدخال اسم المستخدم أو الرقم الوظيفي';
    if (!password) next.password = 'يرجى إدخال كلمة المرور';
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitting(true);
    window.setTimeout(() => setSubmitting(false), 1600);
  };

  return (
    <div className="animate-view-in mx-auto w-full max-w-md">
      <div>
        <h1 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[32px]">
          تسجيل الدخول إلى Audit Pro
        </h1>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
          نظام الجرد الميداني ورقابة تواريخ الانتهاء
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <TextField
          id="login-username"
          label="اسم المستخدم أو الرقم الوظيفي"
          value={username}
          onChange={(v) => {
            setUsername(v);
            setErrors((p) => ({ ...p, username: undefined }));
          }}
          icon={<User className="h-5 w-5" strokeWidth={2.1} />}
          placeholder="أدخل اسم المستخدم أو الرقم الوظيفي"
          error={errors.username}
          autoComplete="username"
        />

        <div>
          <TextField
            id="login-password"
            label="كلمة المرور"
            value={password}
            onChange={(v) => {
              setPassword(v);
              setErrors((p) => ({ ...p, password: undefined }));
            }}
            icon={<Lock className="h-5 w-5" strokeWidth={2.1} />}
            placeholder="••••••••"
            error={errors.password}
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            trailing={
              <PasswordToggle
                show={showPassword}
                onToggle={() => setShowPassword((s) => !s)}
                labelShow="إظهار كلمة المرور"
                labelHide="إخفاء كلمة المرور"
              />
            }
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <Checkbox
            checked={remember}
            onChange={setRemember}
            label={<span>تذكرني</span>}
          />
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-sm font-semibold text-royal-500 transition-colors hover:text-royal-700"
          >
            نسيت كلمة المرور؟
          </a>
        </div>

        <PrimaryButton loading={submitting} loadingLabel="جارٍ تسجيل الدخول…" label="تسجيل الدخول" />

        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-micro transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
        >
          <Fingerprint className="h-5 w-5 text-royal-500" strokeWidth={2.1} />
          الدخول بالبصمة
        </button>

        <p className="pt-2 text-center text-sm font-medium text-slate-500">
          هل تريد إنشاء حساب؟{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="font-bold text-royal-500 underline decoration-royal-500/30 decoration-2 underline-offset-4 transition-colors hover:text-royal-700 hover:decoration-royal-700"
          >
            إنشاء حساب جديد
          </button>
        </p>
      </form>
    </div>
  );
}

export function PrimaryButton({
  loading,
  loadingLabel,
  label,
}: {
  loading: boolean;
  loadingLabel: string;
  label: string;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group relative mt-2 flex h-[52px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-royal-500 text-sm font-bold text-white shadow-cta transition-all duration-300 hover:shadow-ctaHover hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-80"
    >
      <span className="absolute inset-0 bg-gradient-to-l from-royal-700 to-tealx-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex items-center gap-2.5">
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            {loadingLabel}
          </>
        ) : (
          <>
            {label}
            <ArrowLeft className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.4} />
          </>
        )}
      </span>
    </button>
  );
}

export default LoginView;
