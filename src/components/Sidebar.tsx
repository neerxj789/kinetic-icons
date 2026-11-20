import {
  CATEGORIES,
  ICONS_CATALOG,
  getCategoryIconId,
  type CategoryFilter,
} from '../data/icons';
import { KineticIcon } from './KineticIcon';

interface SidebarProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (cat: CategoryFilter) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({
  activeCategory,
  onSelectCategory,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      {/* LEFT SIDEBAR CATEGORIES */}
      <aside
        className={`w-60 shrink-0 border-r border-kinetic-border bg-kinetic-bg flex flex-col justify-between overflow-y-auto transition-transform duration-200 absolute lg:relative inset-y-0 left-0 z-20 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-kinetic-muted uppercase tracking-wider px-3 mb-2">
              Categories
            </h3>
            <nav className="space-y-0.5">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === 'All Icons'
                    ? ICONS_CATALOG.length
                    : ICONS_CATALOG.filter((i) => i.category === cat).length;
                const active = activeCategory === cat;
                const iconId = getCategoryIconId(cat);

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onSelectCategory(cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? 'bg-kinetic-pill text-kinetic-ink font-semibold'
                        : 'text-kinetic-muted hover:text-kinetic-ink hover:bg-kinetic-card'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="opacity-80">
                        <KineticIcon
                          id={iconId}
                          size={16}
                          strokeWidth={1.6}
                          radius={2.5}
                        />
                      </span>
                      <span>{cat}</span>
                    </div>
                    <span className="text-[11px] font-normal text-kinetic-muted px-1.5 py-0.5 rounded bg-kinetic-card border border-kinetic-border leading-none">
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-kinetic-border space-y-3 px-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-kinetic-muted font-medium">Total Icons</span>
              <span className="font-semibold text-kinetic-ink">
                {ICONS_CATALOG.length}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-kinetic-muted font-medium">Style</span>
              <span className="font-semibold text-kinetic-ink">
                Rounded Outline
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-kinetic-muted font-medium">Grid</span>
              <span className="font-semibold text-kinetic-ink">24×24px</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-kinetic-border text-[11px] text-kinetic-muted flex justify-between items-center">
          <span>Kinetic Studio</span>
          <span>MIT License</span>
        </div>
      </aside>

      {/* BACKDROP FOR MOBILE SIDEBAR */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/40 z-10 lg:hidden"
        />
      )}
    </>
  );
}
