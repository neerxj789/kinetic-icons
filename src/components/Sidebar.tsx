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
      {/* BACKDROP FOR MOBILE / TABLET SIDEBAR */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/45 backdrop-blur-[1px] z-40 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* LEFT SIDEBAR CATEGORIES */}
      <aside
        className={`w-64 lg:w-60 shrink-0 border-r border-kinetic-border bg-kinetic-bg flex flex-col fixed inset-y-0 left-0 z-50 lg:static lg:z-auto lg:translate-x-0 transition-transform duration-200 shadow-2xl lg:shadow-none ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile / Tablet Drawer Header */}
        <div className="flex lg:hidden items-center justify-between h-16 px-4 border-b border-kinetic-border shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-kinetic-card border border-kinetic-border flex items-center justify-center text-kinetic-ink">
              <KineticIcon
                id="ai-spark"
                size={18}
                strokeWidth={1.6}
                radius={2.5}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base tracking-tight text-kinetic-ink">
                Kinetic
              </span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-kinetic-pill text-kinetic-muted border border-kinetic-border">
                v2.0
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseMobile}
            className="w-9 h-9 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close categories menu"
          >
            <KineticIcon id="close" size={18} strokeWidth={1.6} radius={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col justify-between">
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

          <div className="p-4 border-t border-kinetic-border text-[11px] text-kinetic-muted flex justify-between items-center shrink-0">
            <span>Kinetic Studio</span>
            <span>MIT License</span>
          </div>
        </div>
      </aside>
    </>
  );
}
