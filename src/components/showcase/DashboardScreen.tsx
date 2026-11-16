import { Activity, CalendarDays, CheckCircle2, Clock3, DollarSign, UsersRound } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

const metrics = [
    { label: 'Turnos de hoy', value: '18', detail: '3 por confirmar', icon: CalendarDays, tone: 'bg-violet-100 text-violet-700' },
    { label: 'Pacientes atendidos', value: '12', detail: '+4 vs. ayer', icon: UsersRound, tone: 'bg-sky-100 text-sky-700' },
    { label: 'Facturación del día', value: '$ 482.000', detail: '76% de la meta', icon: DollarSign, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'Ocupación semanal', value: '82%', detail: 'Agenda saludable', icon: Activity, tone: 'bg-amber-100 text-amber-700' },
];

const appointments = [
    { time: '09:00', patient: 'Camila Torres', service: 'Consulta de seguimiento', status: 'Confirmado', tone: 'bg-sky-50 text-sky-700 ring-sky-200' },
    { time: '10:30', patient: 'Martín López', service: 'Sesión · Plan facial', status: 'En sala', tone: 'bg-violet-50 text-violet-700 ring-violet-200' },
    { time: '12:00', patient: 'Sofía Benítez', service: 'Control post tratamiento', status: 'Pendiente', tone: 'bg-amber-50 text-amber-700 ring-amber-200' },
];

export const DashboardScreen = () => (
    <div className="flex h-full min-w-0 bg-slate-50 text-slate-800">
        <AppSidebar activeItem={0} />
        <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6" aria-label="Resumen del centro">
            <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Centro Demo</p>
                    <h1 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Buen día, Valentina</h1>
                    <p className="mt-1 text-sm text-slate-500">Así se mueve tu centro hoy.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-right shadow-sm">
                    <p className="text-xs text-slate-500">Miércoles</p>
                    <p className="text-sm font-semibold text-slate-700">14 de agosto</p>
                </div>
            </header>

            <section className="grid grid-cols-2 gap-3 xl:grid-cols-4" aria-label="Indicadores de hoy">
                {metrics.map(({ label, value, detail, icon: Icon, tone }) => (
                    <article key={label} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                        <div className="flex items-start justify-between gap-2">
                            <div><p className="text-xs font-medium text-slate-500">{label}</p><p className="mt-2 text-lg font-bold tracking-tight sm:text-xl">{value}</p></div>
                            <span className={`rounded-xl p-2 ${tone}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">{detail}</p>
                    </article>
                ))}
            </section>

            <section className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_.9fr]">
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-3"><div><h2 className="font-semibold">Próximos turnos</h2><p className="text-xs text-slate-500">Agenda de hoy · 6 pendientes</p></div><span className="text-xs font-semibold text-violet-600">Ver agenda</span></div>
                    <div className="mt-4 divide-y divide-slate-100">
                        {appointments.map((appointment) => (
                            <div key={appointment.time} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                                <time className="w-10 text-sm font-semibold text-slate-700">{appointment.time}</time>
                                <span className="h-9 w-1 rounded-full bg-violet-400" aria-hidden="true" />
                                <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{appointment.patient}</p><p className="truncate text-xs text-slate-500">{appointment.service}</p></div>
                                <span className={`hidden rounded-full px-2 py-1 text-[11px] font-semibold ring-1 sm:inline ${appointment.tone}`}>{appointment.status}</span>
                            </div>
                        ))}
                    </div>
                </article>
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2"><span className="rounded-lg bg-emerald-100 p-2 text-emerald-700"><CheckCircle2 className="h-4 w-4" aria-hidden="true" /></span><div><h2 className="font-semibold">Operación al día</h2><p className="text-xs text-slate-500">Seguimiento del equipo</p></div></div>
                    <div className="mt-5 space-y-4">
                        {[['Confirmaciones enviadas', '15 de 18', '83%'], ['Planes con próxima sesión', '8 pacientes', '64%'], ['Evoluciones registradas', '10 de 12', '79%']].map(([label, value, progress]) => (
                            <div key={label}><div className="flex justify-between gap-2 text-xs"><span className="text-slate-600">{label}</span><span className="font-semibold text-slate-700">{value}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-violet-500" style={{ width: progress }} /></div></div>
                        ))}
                    </div>
                    <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600"><Clock3 className="h-4 w-4 text-violet-600" aria-hidden="true" />El próximo recordatorio sale en 24 minutos.</div>
                </article>
            </section>
        </main>
    </div>
);
