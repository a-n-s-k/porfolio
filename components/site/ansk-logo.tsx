import { montserrat } from '@/app/ui/fonts';

export default function AnskLogo() {
  return (
    <div className={`${montserrat.className} flex flex-row items-center leading-none text-slate-600 dark:text-slate-400`} >
      <p className="text-[60px]">ansk</p>
    </div>
  );
}