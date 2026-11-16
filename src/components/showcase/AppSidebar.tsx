import {
    BellRing,
    CalendarDays,
    ClipboardCheck,
    LayoutDashboard,
    Settings2,
    ShieldCheck,
    UsersRound,
} from 'lucide-react';

interface AppSidebarProps {
    activeItem?: number;
}

const primaryNavigation = [
    { label: 'Resumen', icon: LayoutDashboard },
    { label: 'Agenda', icon: CalendarDays },
    { label: 'Pacientes', icon: UsersRound },
    { label: 'Planes', icon: ClipboardCheck },
];

const secondaryNavigation = [
    { label: 'Notificaciones', icon: BellRing },
    { label: 'Equipo y permisos', icon: ShieldCheck },
    { label: 'Configuración', icon: Settings2 },
];

export const AppSidebar = ({ activeItem = 0 }: AppSidebarProps) => {
    const renderItem = (item: (typeof primaryNavigation)[number], index: number, isSecondary = false) => {
        const Icon = item.icon;
        const isActive = !isSecondary && index === activeItem;

        return (
            <li key={item.label}>
                <span className={`showcase-app-nav-item ${isActive ? 'is-active' : ''}`} aria-current={isActive ? 'page' : undefined}>
                    <Icon aria-hidden="true" />
                    <span>{item.label}</span>
                </span>
            </li>
        );
    };

    return (
        <aside className="showcase-app-sidebar" aria-label="Navegación de la aplicación de muestra">
            <div className="showcase-app-brand">
                <span aria-hidden="true">.b</span>
                <strong>dotbin</strong>
            </div>

            <nav className="showcase-app-navigation" aria-label="Secciones principales">
                <p>Centro</p>
                <ul>{primaryNavigation.map((item, index) => renderItem(item, index))}</ul>
                <p>Gestión</p>
                <ul>{secondaryNavigation.map((item, index) => renderItem(item, index, true))}</ul>
            </nav>

            <div className="showcase-app-account">
                <span>DR</span>
                <div><strong>Centro Demo</strong><small>Administración</small></div>
            </div>
        </aside>
    );
};
