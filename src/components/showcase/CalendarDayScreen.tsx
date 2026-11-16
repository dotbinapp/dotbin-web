import { CalendarDays, ChevronLeft, ChevronRight, Clock3, Plus, UserRound } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

const appointments = [
    { time: '09:00', patient: 'Camila Torres', service: 'Consulta inicial', professional: 'Dra. Valentina Ruiz', status: 'Confirmado', tone: 'border-l-sky-500 bg-sky-50' },
    { time: '10:30', patient: 'Martín López', service: 'Plan facial · Sesión 3 de 6', professional: 'Dra. Valentina Ruiz', status: 'En sala', tone: 'border-l-violet-500 bg-violet-50' },
    { time: '12:00', patient: 'Sofía Benítez', service: 'Control post procedimiento', professional: 'Dr. Ignacio Pérez', status: 'Por confirmar', tone: 'border-l-amber-500 bg-amber-50' },
    { time: '15:30', patient: 'Julia Fernández', service: 'Limpieza profunda', professional: 'Dra. Valentina Ruiz', status: 'Confirmado', tone: 'border-l-emerald-500 bg-emerald-50' },
];

export const CalendarDayScreen = () => (
    <div className="flex h-full min-w-0 bg-slate-50 text-slate-800">
        <AppSidebar activeItem={1} />
        <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6" aria-label="Agenda diaria">
            <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2"><button type="button" aria-label="Día anterior" className="rounded-lg p-2 text-slate-500 hover:bg-white"><ChevronLeft className="h-4 w-4" /></button><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">Agenda</p><h1 className="text-lg font-bold sm:text-xl">Miércoles, 14 de agosto</h1></div><button type="button" aria-label="Día siguiente" className="rounded-lg p-2 text-slate-500 hover:bg-white"><ChevronRight className="h-4 w-4" /></button></div>
                <div className="flex items-center gap-2"><div className="rounded-xl border border-slate-200 bg-white p-1 text-xs font-medium"><span className="rounded-lg bg-violet-100 px-2 py-1.5 text-violet-700">Día</span><span className="px-2 py-1.5 text-slate-500">Semana</span><span className="px-2 py-1.5 text-slate-500">Mes</span></div><button type="button" className="inline-flex items-center gap-1 rounded-xl bg-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm"><Plus className="h-3.5 w-3.5" />Nuevo turno</button></div>
            </header>
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-label="Turnos del día">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3"><div className="flex items-center gap-2 text-sm font-semibold"><CalendarDays className="h-4 w-4 text-violet-600" aria-hidden="true" />18 turnos programados</div><span className="text-xs text-slate-500">2 bloqueos activos</span></div>
                <div className="divide-y divide-slate-100">
                    {appointments.map((appointment) => (<article key={appointment.time} className="flex gap-3 p-3 sm:gap-4 sm:p-4"><time className="w-10 pt-2 text-xs font-semibold text-slate-500">{appointment.time}</time><div className={`min-w-0 flex-1 rounded-xl border-l-4 p-3 ${appointment.tone}`}><div className="flex flex-wrap items-start justify-between gap-2"><div><h2 className="text-sm font-semibold">{appointment.patient}</h2><p className="mt-0.5 text-xs text-slate-600">{appointment.service}</p></div><span className="rounded-full bg-white/80 px-2 py-1 text-[11px] font-semibold text-slate-600">{appointment.status}</span></div><div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><UserRound className="h-3 w-3" aria-hidden="true" />{appointment.professional}</span><span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" aria-hidden="true" />45 min</span></div></div></article>))}
                </div>
            </section>
        </main>
    </div>
);
