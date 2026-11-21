import type { ReactNode } from 'react';
import { Check, ChevronDown, Eye, EyeOff } from 'lucide-react';

type BaseFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: ReactNode;
  placeholder?: string;
  error?: string | null;
  type?: 'text' | 'email' | 'tel' | 'password';
  autoComplete?: string;
  trailing?: ReactNode;
  dir?: 'rtl' | 'ltr';
};

export function TextField({
  id,
  label,
  value,
  onChange,
  icon,
  placeholder,
  error,
  type = 'text',
  autoComplete,
  trailing,
  dir,
}: BaseFieldProps) {
  const hasError = Boolean(error);
  return (
    <div className="animate-fade-up">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="group relative">
        <span
          className={`pointer-events-none absolute inset-y-0 right-3.5 flex items-center transition-colors ${
            hasError ? 'text-rose-400' : 'text-slate-400 group-focus-within:text-royal-500'
          }`}
        >
          {icon}
        </span>
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          dir={dir}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`h-[52px] w-full rounded-xl border bg-white pr-12 ${
            trailing ? 'pl-12' : 'pl-4'
          } text-sm font-medium text-slate-900 placeholder:text-slate-400 shadow-micro outline-none transition-all duration-200 hover:border-slate-300 focus:ring-4 ${
            hasError
              ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400/10'
              : 'border-slate-200 focus:border-royal-500 focus:ring-royal-500/10'
          }`}
        />
        {trailing && <div className="absolute inset-y-0 left-3.5 flex items-center">{trailing}</div>}
      </div>
      {hasError && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
          <span className="mt-0.5 h-1 w-1 rounded-full bg-rose-400" />
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = Omit<BaseFieldProps, 'type' | 'trailing' | 'placeholder'> & {
  options: { value: string; label: string }[];
  placeholder?: string;
};

export function SelectField({
  id,
  label,
  value,
  onChange,
  icon,
  error,
  options,
  placeholder,
}: SelectFieldProps) {
  const hasError = Boolean(error);
  return (
    <div className="animate-fade-up">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="group relative">
        <span
          className={`pointer-events-none absolute inset-y-0 right-3.5 flex items-center transition-colors ${
            hasError ? 'text-rose-400' : 'text-slate-400 group-focus-within:text-royal-500'
          }`}
        >
          {icon}
        </span>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[52px] w-full cursor-pointer appearance-none rounded-xl border bg-white pr-12 pl-10 text-sm font-medium shadow-micro outline-none transition-all duration-200 hover:border-slate-300 focus:ring-4 ${
            hasError
              ? 'border-rose-300 text-rose-500 focus:border-rose-400 focus:ring-rose-400/10'
              : value
                ? 'border-slate-200 text-slate-900 focus:border-royal-500 focus:ring-royal-500/10'
                : 'border-slate-200 text-slate-400 focus:border-royal-500 focus:ring-royal-500/10'
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="text-slate-900">
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute inset-y-0 left-3.5 my-auto h-5 w-5 text-slate-400"
          strokeWidth={2.1}
        />
      </div>
      {hasError && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-500">
          <span className="mt-0.5 h-1 w-1 rounded-full bg-rose-400" />
          {error}
        </p>
      )}
    </div>
  );
}

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: ReactNode;
  error?: string | null;
};

export function Checkbox({ checked, onChange, label, error }: CheckboxProps) {
  return (
    <div>
      <label className="flex cursor-pointer select-none items-start gap-2.5">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-200 ${
            error && !checked
              ? 'border-rose-400 bg-white'
              : checked
                ? 'border-royal-500 bg-royal-500 shadow-sm'
                : 'border-slate-300 bg-white hover:border-slate-400'
          }`}
        >
          {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
        </button>
        <span className="text-sm font-medium leading-relaxed text-slate-600">{label}</span>
      </label>
      {error && <p className="mt-1.5 pr-7 text-xs font-medium text-rose-500">{error}</p>}
    </div>
  );
}

export function PasswordToggle({
  show,
  onToggle,
  labelShow,
  labelHide,
}: {
  show: boolean;
  onToggle: () => void;
  labelShow: string;
  labelHide: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={show ? labelHide : labelShow}
      className="text-slate-400 transition-colors hover:text-slate-700"
    >
      {show ? <EyeOff className="h-5 w-5" strokeWidth={2.1} /> : <Eye className="h-5 w-5" strokeWidth={2.1} />}
    </button>
  );
}
