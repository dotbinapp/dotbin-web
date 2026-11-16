import { useState, type ComponentType, type KeyboardEvent } from 'react';
import {
    BellRing,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    ClipboardCheck,
    ImageIcon,
    LayoutDashboard,
    ShieldCheck,
    Sparkles,
    UsersRound,
} from 'lucide-react';
import { DashboardScreen } from './showcase/DashboardScreen';
import { CalendarDayScreen } from './showcase/CalendarDayScreen';
import { CalendarMonthScreen } from './showcase/CalendarMonthScreen';
import { PatientProfileScreen } from './showcase/PatientProfileScreen';
import { TreatmentPlansScreen } from './showcase/TreatmentPlansScreen';
import { PatientTrackingScreen } from './showcase/PatientTrackingScreen';
import { PatientBeforeAfterScreen } from './showcase/PatientBeforeAfterScreen';
import { NotificationsScreen } from './showcase/NotificationsScreen';
import { RolesPermissionsScreen } from './showcase/RolesPermissionsScreen';

type ShowcaseScreen = {
    id: string;
    label: string;
    eyebrow: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    component?: ComponentType;
    highlights: string[];
};

const screens: ShowcaseScreen[] = [
    {
        id: 'resumen',
        label: 'Resumen',
        eyebrow: 'Operación diaria',
        description: 'Indicadores claros para conocer el ritmo del centro en un vistazo.',
        icon: LayoutDashboard,
        component: DashboardScreen,
        highlights: ['Actividad del día', 'Ocupación', 'Servicios destacados'],
    },
    {
        id: 'agenda',
        label: 'Agenda',
        eyebrow: 'Turnos y disponibilidad',
        description: 'Organizá la jornada, bloqueos y atención de cada profesional.',
        icon: CalendarDays,
        component: CalendarDayScreen,
        highlights: ['Agenda por hora', 'Equipo coordinado', 'Cobro contextual'],
    },
    {
        id: 'calendario',
        label: 'Calendario',
        eyebrow: 'Planificación',
        description: 'Una vista mensual para anticipar la demanda y disponibilidad.',
        icon: CalendarDays,
        component: CalendarMonthScreen,
        highlights: ['Vista mensual', 'Bloqueos', 'Disponibilidad'],
    },
    {
        id: 'pacientes',
        label: 'Pacientes',
        eyebrow: 'Historia centralizada',
        description: 'Información clínica, documentos y evolución en una misma ficha.',
        icon: UsersRound,
        component: PatientProfileScreen,
        highlights: ['Ficha médica', 'Documentos', 'Historial'],
    },
    {
        id: 'planes',
        label: 'Planes',
        eyebrow: 'Tratamientos',
        description: 'Acompañá cada plan y sus sesiones desde el perfil del paciente.',
        icon: ClipboardCheck,
        component: TreatmentPlansScreen,
        highlights: ['Planes activos', 'Sesiones', 'Seguimiento'],
    },
    {
        id: 'seguimiento',
        label: 'Seguimiento',
        eyebrow: 'Evolución clínica',
        description: 'Registrá avances y compará resultados antes y después con contexto.',
        icon: ImageIcon,
        component: PatientTrackingScreen,
        highlights: ['Evolución clínica', 'Antes y después', 'Notas por sesión'],
    },
    {
        id: 'antes-despues',
        label: 'Antes y después',
        eyebrow: 'Resultados visibles',
        description: 'Compará registros con fecha y contexto para acompañar cada resultado.',
        icon: ImageIcon,
        component: PatientBeforeAfterScreen,
        highlights: ['Registros fechados', 'Mismo encuadre', 'Acceso controlado'],
    },
    {
        id: 'notificaciones',
        label: 'Notificaciones',
        eyebrow: 'Comunicación',
        description: 'Centralizá recordatorios y reglas de comunicación con tus pacientes.',
        icon: BellRing,
        component: NotificationsScreen,
        highlights: ['Recordatorios', 'Reglas por evento', 'Canales del centro'],
    },
    {
        id: 'permisos',
        label: 'Equipo y permisos',
        eyebrow: 'Accesos del centro',
        description: 'Dale a cada rol la información y las acciones que necesita.',
        icon: ShieldCheck,
        component: RolesPermissionsScreen,
        highlights: ['Roles del equipo', 'Permisos', 'Práctica individual'],
    },
];

const CapabilityScreen = ({ screen }: { screen: ShowcaseScreen }) => {
    const Icon = screen.icon;

    return (
        <div className="showcase-capability-screen">
            <div className="showcase-capability-topbar">
                <div className="showcase-wordmark" aria-hidden="true">.b</div>
                <div>
                    <p>Dotbin · Centro Demo</p>
                    <strong>{screen.label}</strong>
                </div>
                <span className="showcase-status"><span />Actualizado</span>
            </div>
            <div className="showcase-capability-content">
                <div className="showcase-capability-intro">
                    <div className="showcase-capability-icon"><Icon aria-hidden="true" /></div>
                    <div>
                        <p>{screen.eyebrow}</p>
                        <h3>{screen.label} con contexto para cada decisión</h3>
                    </div>
                </div>
                <div className="showcase-capability-grid">
                    {screen.highlights.map((highlight, index) => (
                        <article key={highlight} className="showcase-capability-card">
                            <span>0{index + 1}</span>
                            <strong>{highlight}</strong>
                            <p>Información ordenada y disponible para el equipo.</p>
                        </article>
                    ))}
                </div>
                <div className="showcase-capability-timeline" aria-label="Ejemplo de actividad">
                    <span />
                    <div><strong>Actividad registrada</strong><p>Todo el equipo ve el próximo paso con claridad.</p></div>
                </div>
            </div>
        </div>
    );
};

export const ProductShowcase = () => {
    const [activeScreen, setActiveScreen] = useState(0);
    const screen = screens[activeScreen];
    const ActiveComponent = screen.component;

    const selectScreen = (index: number) => {
        setActiveScreen((index + screens.length) % screens.length);
    };

    const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
        const keyToIndex: Record<string, number> = {
            ArrowLeft: index - 1,
            ArrowRight: index + 1,
            Home: 0,
            End: screens.length - 1,
        };
        const nextIndex = keyToIndex[event.key];

        if (nextIndex === undefined) return;

        event.preventDefault();
        const normalizedIndex = (nextIndex + screens.length) % screens.length;
        selectScreen(normalizedIndex);
        requestAnimationFrame(() => document.getElementById(`showcase-tab-${screens[normalizedIndex].id}`)?.focus());
    };

    return (
        <section id="product-showcase" className="showcase-shell" aria-labelledby="showcase-title">
            <div className="showcase-container">
                <header className="showcase-heading">
                    <span className="showcase-kicker"><Sparkles aria-hidden="true" /> Producto</span>
                    <h2 id="showcase-title">Todo el centro, en una experiencia conectada</h2>
                    <p>Una muestra del espacio de trabajo de Dotbin: simple para el día a día y completo cuando cada detalle importa.</p>
                </header>

                <div className="showcase-feature-list" role="tablist" aria-label="Capacidades de Dotbin">
                    {screens.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeScreen === index;

                        return (
                            <button
                                key={item.id}
                                id={`showcase-tab-${item.id}`}
                                className="showcase-feature-button"
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`showcase-panel-${item.id}`}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => selectScreen(index)}
                                onKeyDown={(event) => handleTabKeyDown(event, index)}
                            >
                                <Icon aria-hidden="true" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="showcase-preview-frame">
                    <div className="showcase-browser-bar">
                        <div className="showcase-browser-dots" aria-hidden="true"><span /><span /><span /></div>
                        <div className="showcase-browser-label"><span>Vista de producto</span><strong>dotbin.app</strong></div>
                        <span className="showcase-browser-state" aria-live="polite">{screen.label}</span>
                    </div>

                    <div
                        id={`showcase-panel-${screen.id}`}
                        className="showcase-preview"
                        role="tabpanel"
                        aria-labelledby={`showcase-tab-${screen.id}`}
                    >
                        {ActiveComponent ? <ActiveComponent /> : <CapabilityScreen screen={screen} />}
                    </div>
                </div>

                <div className="showcase-footer">
                    <div>
                        <p className="showcase-eyebrow">{screen.eyebrow}</p>
                        <h3>{screen.description}</h3>
                    </div>
                    <div className="showcase-controls" aria-label="Cambiar vista de producto">
                        <button type="button" onClick={() => selectScreen(activeScreen - 1)} aria-label="Ver capacidad anterior">
                            <ChevronLeft aria-hidden="true" />
                            <span>Anterior</span>
                        </button>
                        <span aria-hidden="true">{String(activeScreen + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}</span>
                        <button type="button" onClick={() => selectScreen(activeScreen + 1)} aria-label="Ver capacidad siguiente">
                            <span>Siguiente</span>
                            <ChevronRight aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
