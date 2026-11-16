import { CalendarCheck2, ClipboardPenLine, Stethoscope, TrendingUp } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

const timeline = [
    { date: '14 AGO', title: 'Evolución registrada', text: 'Mejor tolerancia y reducción de sensibilidad. Se mantiene el plan actual.', icon: ClipboardPenLine, tone: 'bg-violet-100 text-violet-700' },
    { date: '07 AGO', title: 'Sesión 3 completada', text: 'Se registró la sesión y se adjuntaron fotos de control.', icon: CalendarCheck2, tone: 'bg-emerald-100 text-emerald-700' },
    { date: '31 JUL', title: 'Objetivo clínico actualizado', text: 'Se acordó continuar con cuatro sesiones quincenales.', icon: Stethoscope, tone: 'bg-sky-100 text-sky-700' },
];

export const PatientTrackingScreen = () => (
    <div className="flex h-full min-w-0 bg-slate-50 text-slate-800">
        <AppSidebar activeItem={2} />
        <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6" aria-label="Seguimiento clínico del paciente">
            <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">Paciente · Camila Torres</p><h1 className="mt-1 text-xl font-bold">Evolución y seguimiento</h1><p className="mt-1 text-sm text-slate-500">Una línea de tiempo clínica para dar continuidad a cada atención.</p></div>
                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">Plan activo</span>
            </header>
            <section className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-100 p-2 text-violet-700"><TrendingUp className="h-4 w-4" aria-hidden="true" /></span><div><h2 className="font-semibold">Progreso del tratamiento</h2><p className="text-xs text-slate-500">Plan rejuvenecimiento facial · 3 de 6 sesiones</p></div></div>
                    <div className="mt-5">
                        <div className="flex justify-between text-xs font-medium"><span className="text-slate-600">Avance del plan</span><span className="text-violet-700">50%</span></div>
                        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-1/2 rounded-full bg-violet-500" /></div>
                        <div className="mt-3 grid grid-cols-3 gap-2 text-center"><div className="rounded-xl bg-slate-50 p-2"><strong className="block text-sm">3</strong><span className="text-[11px] text-slate-500">completadas</span></div><div className="rounded-xl bg-slate-50 p-2"><strong className="block text-sm">3</strong><span className="text-[11px] text-slate-500">pendientes</span></div><div className="rounded-xl bg-slate-50 p-2"><strong className="block text-sm">21 ago</strong><span className="text-[11px] text-slate-500">próxima</span></div></div>
                    </div>
                </article>
                <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><h2 className="font-semibold">Objetivo actual</h2><p className="mt-2 text-sm leading-6 text-slate-600">Mejorar textura y luminosidad, con controles quincenales y registro visual en cada sesión.</p><div className="mt-4 rounded-xl bg-violet-50 p-3 text-xs text-violet-800"><strong>Próximo paso</strong><p className="mt-1 text-violet-700">Registrar evolución durante la sesión del 21 de agosto.</p></div></aside>
            </section>
            <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div><h2 className="font-semibold">Historial de evolución</h2><p className="text-xs text-slate-500">Notas y acciones relevantes en orden cronológico.</p></div>
                <ol className="mt-4 space-y-4">{timeline.map(({ date, title, text, icon: Icon, tone }) => <li key={date} className="flex gap-3"><time className="w-11 pt-1 text-[11px] font-bold text-slate-400">{date}</time><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${tone}`}><Icon className="h-4 w-4" aria-hidden="true" /></span><div className="min-w-0 border-b border-slate-100 pb-4 last:border-0"><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{text}</p></div></li>)}</ol>
            </section>
        </main>
    </div>
);
