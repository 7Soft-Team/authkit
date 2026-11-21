import { useMemo, useState } from 'react';
import {
  User,
  BadgeCheck,
  Mail,
  Warehouse,
  ShieldCheck,
  Lock,
  Check,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { TextField, SelectField, Checkbox, PasswordToggle } from '../form/Fields';
import { PasswordStrengthMeter, calcStrength } from '../form/PasswordStrengthMeter';
import { PrimaryButton } from './LoginView';

const BRANCH_OPTIONS = [
  { value: 'main', label: 'الفرع الرئيسي' },
  { value: 'north', label: 'مستودع الشمال' },
  { value: 'south', label: 'مستودع الجنوب' },
  { value: 'coastal', label: 'فرع الساحل' },
  { value: 'central', label: 'المستودع المركزي' },
];

const ROLE_OPTIONS = [
  { value: 'field-auditor', label: 'مندوب جرد ميداني' },
  { value: 'stock-reviewer', label: 'مراجع مخزون' },
  { value: 'branch-supervisor', label: 'مشرف فروع' },
];

type SignupData = {
  fullName: string;
  username: string;
  contact: string;
  branch: string;
  role: string;
  password: string;
  confirm: string;
  agreed: boolean;
};

const EMPTY: SignupData = {
  fullName: '',
  username: '',
  contact: '',
  branch: '',
  role: '',
  password: '',
  confirm: '',
  agreed: false,
};

function SignupView({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
  const [data, setData] = useState<SignupData>(EMPTY);
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof SignupData>(key: K, value: SignupData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const errors = useMemo(() => {
    const e: Partial<Record<keyof SignupData, string>> = {};
    if (submitted) {
      if (!data.fullName.trim()) e.fullName = 'يرجى إدخال الاسم الكامل';
      if (!data.username.trim()) e.username = 'يرجى إدخال اسم المستخدم أو الرقم الوظيفي';
      if (!data.contact.trim()) e.contact = 'يرجى إدخال البريد الإلكتروني أو رقم الجوال';
      if (!data.branch) e.branch = 'يرجى اختيار الفرع أو المستودع';
      if (!data.role) e.role = 'يرجى اختيار الدور الوظيفي';
      if (data.password.length < 6) e.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
      if (data.confirm !== data.password) e.confirm = 'كلمتا المرور غير متطابقتين';
      if (!data.agreed) e.agreed = 'يجب الموافقة على السياسة للمتابعة';
    }
    return e;
  }, [data, submitted]);

  const confirmMatch = data.confirm.length > 0 && data.confirm === data.password;
  const confirmMismatch = data.confirm.length > 0 && data.confirm !== data.password;
  const strength = calcStrength(data.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const hasErrors =
      !data.fullName.trim() ||
      !data.username.trim() ||
      !data.contact.trim() ||
      !data.branch ||
      !data.role ||
      data.password.length < 6 ||
      data.confirm !== data.password ||
      !data.agreed;
    if (hasErrors) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
    }, 1800);
  };

  return (
    <div className="animate-view-in mx-auto w-full max-w-md">
      <div>
        <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[30px]">
          إنشاء حساب جديد في Audit Pro
        </h1>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">
          إعداد حساب الميدان أو الإدارة لمتابعة الجرد وتواريخ الانتهاء
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <TextField
          id="su-fullname"
          label="الاسم الكامل"
          value={data.fullName}
          onChange={(v) => set('fullName', v)}
          icon={<User className="h-5 w-5" strokeWidth={2.1} />}
          placeholder="الاسم الثلاثي"
          error={errors.fullName}
          autoComplete="name"
        />

        <TextField
          id="su-username"
          label="اسم المستخدم أو الرقم الوظيفي"
          value={data.username}
          onChange={(v) => set('username', v)}
          icon={<BadgeCheck className="h-5 w-5" strokeWidth={2.1} />}
          placeholder="مثال: a.ahmed أو 10472"
          error={errors.username}
          autoComplete="username"
        />

        <TextField
          id="su-contact"
          label="البريد الإلكتروني أو رقم الجوال"
          value={data.contact}
          onChange={(v) => set('contact', v)}
          icon={<Mail className="h-5 w-5" strokeWidth={2.1} />}
          placeholder="name@company.sa أو 05xxxxxxxx"
          error={errors.contact}
          autoComplete="email"
          dir="ltr"
        />

        <SelectField
          id="su-branch"
          label="الفرع أو المستودع"
          value={data.branch}
          onChange={(v) => set('branch', v)}
          icon={<Warehouse className="h-5 w-5" strokeWidth={2.1} />}
          placeholder="اختر الفرع أو المستودع"
          options={BRANCH_OPTIONS}
          error={errors.branch}
        />

        <SelectField
          id="su-role"
          label="الدور الوظيفي"
          value={data.role}
          onChange={(v) => set('role', v)}
          icon={<ShieldCheck className="h-5 w-5" strokeWidth={2.1} />}
          placeholder="اختر الدور الوظيفي"
          options={ROLE_OPTIONS}
          error={errors.role}
        />

        <div>
          <TextField
            id="su-password"
            label="كلمة المرور"
            value={data.password}
            onChange={(v) => set('password', v)}
            icon={<Lock className="h-5 w-5" strokeWidth={2.1} />}
            placeholder="••••••••"
            error={errors.password}
            type={showPw ? 'text' : 'password'}
            autoComplete="new-password"
            trailing={
              <PasswordToggle
                show={showPw}
                onToggle={() => setShowPw((s) => !s)}
                labelShow="إظهار كلمة المرور"
                labelHide="إخفاء كلمة المرور"
              />
            }
          />
          {data.password && <PasswordStrengthMeter password={data.password} />}
        </div>

        <div>
          <TextField
            id="su-confirm"
            label="تأكيد كلمة المرور"
            value={data.confirm}
            onChange={(v) => set('confirm', v)}
            icon={<Lock className="h-5 w-5" strokeWidth={2.1} />}
            placeholder="••••••••"
            error={errors.confirm}
            type={showConfirm ? 'text' : 'password'}
            autoComplete="new-password"
            trailing={
              <PasswordToggle
                show={showConfirm}
                onToggle={() => setShowConfirm((s) => !s)}
                labelShow="إظهار كلمة المرور"
                labelHide="إخفاء كلمة المرور"
              />
            }
          />
          {(confirmMatch || confirmMismatch) && (
            <div
              className={`mt-2 flex items-center gap-1.5 text-xs font-semibold ${
                confirmMatch ? 'text-emerald-600' : 'text-rose-500'
              }`}
            >
              {confirmMatch ? (
                <>
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.4} />
                  كلمتا المرور متطابقتان
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4" strokeWidth={2.4} />
                  كلمتا المرور غير متطابقتين
                </>
              )}
            </div>
          )}
        </div>

        <Checkbox
          checked={data.agreed}
          onChange={(v) => set('agreed', v)}
          label={
            <>
              أوافق على{' '}
              <span className="font-semibold text-royal-500">سياسة الاستخدام</span> وإجراءات الجرد
              الميداني
            </>
          }
          error={errors.agreed}
        />

        <PrimaryButton loading={submitting} loadingLabel="جارٍ إنشاء الحساب…" label="إنشاء الحساب" />

        <p className="pt-1 text-center text-sm font-medium text-slate-500">
          لديك حساب بالفعل؟{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="font-bold text-royal-500 underline decoration-royal-500/30 decoration-2 underline-offset-4 transition-colors hover:text-royal-700 hover:decoration-royal-700"
          >
            تسجيل الدخول
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignupView;
