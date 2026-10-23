import React, { useState } from 'react';
import { useAdmin, ADMIN_CREDENTIALS } from '../context/AdminContext';
import { ServiceItem } from '../data/agencyData';

const AVAILABLE_ICONS = [
  'share',
  'ads_click',
  'brush',
  'pin_drop',
  'code',
  'mic',
  'movie_edit',
  'verified_user',
  'edit_note',
  'smart_display',
  'smart_toy',
  'psychology',
  'campaign',
  'analytics',
  'shopping_bag',
  'rocket_launch',
  'bolt',
  'trending_up',
  'hub',
  'storefront'
];

export const AdminModal: React.FC = () => {
  const {
    isAdminLoggedIn,
    adminUser,
    services,
    login,
    logout,
    addService,
    removeService,
    resetServicesToDefault,
    isAdminModalOpen,
    setIsAdminModalOpen
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Add Service form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'performance' | 'creative' | 'infrastructure'>('performance');
  const [icon, setIcon] = useState('campaign');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [deliverablesInput, setDeliverablesInput] = useState('');
  const [metrics, setMetrics] = useState('+350% Growth Rate');
  const [turnaround, setTurnaround] = useState('3 - 5 Business Days');
  const [priceUSD, setPriceUSD] = useState('From $350 / mo');
  const [priceBDT, setPriceBDT] = useState('From ৳35,000 / mo');
  const [successNotice, setSuccessNotice] = useState('');

  // Delete confirm state
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);

  if (!isAdminModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const res = login(email, password);
    if (!res.success) {
      setLoginError(res.error || 'Failed to authenticate.');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  const handleQuickFill = () => {
    setEmail(ADMIN_CREDENTIALS.email);
    setPassword(ADMIN_CREDENTIALS.password);
  };

  const handleAddServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill out service title and description.');
      return;
    }

    const categoryLabels = {
      performance: 'Performance Marketing',
      creative: 'Creative Production',
      infrastructure: 'Digital Infrastructure'
    };

    const deliverablesList = deliverablesInput
      .split('\n')
      .map((d) => d.trim().replace(/^[•\-\*]\s*/, ''))
      .filter(Boolean);

    addService({
      title: title.trim(),
      category,
      categoryLabel: categoryLabels[category],
      icon,
      description: description.trim(),
      longDescription: longDescription.trim() || description.trim(),
      deliverables: deliverablesList.length > 0 ? deliverablesList : [
        'Complete strategy & campaign execution',
        'Weekly reporting & performance optimization',
        'Direct WhatsApp support'
      ],
      metrics: metrics.trim() || '+300% Benchmark',
      turnaround: turnaround.trim() || 'Weekly Turnaround',
      priceEstimateUSD: priceUSD.trim() || 'Custom Quote',
      priceEstimateBDT: priceBDT.trim() || 'Custom Quote'
    });

    // Reset form
    setTitle('');
    setDescription('');
    setLongDescription('');
    setDeliverablesInput('');
    setSuccessNotice(`Service "${title}" added successfully!`);
    setActiveTab('list');

    setTimeout(() => setSuccessNotice(''), 4000);
  };

  const handleDeleteService = (id: string) => {
    removeService(id);
    setServiceToDelete(null);
    setSuccessNotice('Service removed successfully.');
    setTimeout(() => setSuccessNotice(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="w-full max-w-4xl bg-surface-container-low rounded-3xl border border-outline-variant/30 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 max-h-[92vh] overflow-y-auto"
        role="dialog"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary-container/20 border border-primary-container/30 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">
                {isAdminLoggedIn ? 'admin_panel_settings' : 'lock'}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-on-surface">
                  {isAdminLoggedIn ? 'Next Growth BD Admin Portal' : 'Admin Portal Login'}
                </h3>
                {isAdminLoggedIn && (
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/40 text-tertiary text-[10px] font-bold uppercase tracking-wider">
                    Authorized
                  </span>
                )}
              </div>
              <p className="text-xs text-on-surface-variant">
                {isAdminLoggedIn
                  ? `Logged in as ${adminUser?.name || 'Administrator'} (${adminUser?.email})`
                  : 'Sign in to add, edit, or remove services from the website'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && (
              <button
                onClick={logout}
                className="px-3.5 py-1.5 rounded-xl bg-error/15 hover:bg-error/25 text-error text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Sign out of Admin Portal"
              >
                <span className="material-symbols-outlined text-[16px]">logout</span>
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={() => setIsAdminModalOpen(false)}
              className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors"
              aria-label="Close Admin Modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Global Success / Alert banner */}
        {successNotice && (
          <div className="p-3.5 rounded-2xl bg-tertiary-container/20 border border-tertiary/30 text-tertiary text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>{successNotice}</span>
            </div>
            <button onClick={() => setSuccessNotice('')} className="text-tertiary hover:opacity-75">
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        {!isAdminLoggedIn ? (
          /* LOGIN SCREEN */
          <div className="flex flex-col gap-6 max-w-md mx-auto w-full py-4">
            <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                  Default Credentials
                </span>
                <button
                  type="button"
                  onClick={handleQuickFill}
                  className="text-[11px] text-tertiary font-bold hover:underline flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">auto_fix_high</span>
                  <span>Auto-fill Demo</span>
                </button>
              </div>
              <div className="text-xs text-on-surface-variant space-y-1 font-mono bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/15">
                <div>Email: <strong className="text-on-surface">{ADMIN_CREDENTIALS.email}</strong></div>
                <div>Pass: <strong className="text-on-surface">{ADMIN_CREDENTIALS.password}</strong></div>
              </div>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-xl bg-error/15 border border-error/30 text-error text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Admin Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@nextgrowthbd.com"
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full h-11 pl-3.5 pr-10 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-on-surface-variant hover:text-on-surface"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">lock_open</span>
                <span>Sign In to Admin Portal</span>
              </button>
            </form>
          </div>
        ) : (
          /* LOGGED IN DASHBOARD */
          <div className="flex flex-col gap-6">
            {/* Nav Tabs */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('list')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'list'
                      ? 'bg-primary-container text-on-primary-container shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">list</span>
                  <span>Active Services ({services.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'add'
                      ? 'bg-primary-container text-on-primary-container shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Add New Service</span>
                </button>
              </div>

              <button
                onClick={() => {
                  if (confirm('Restore the original 12 services? Any custom added services will be reset.')) {
                    resetServicesToDefault();
                    setSuccessNotice('Services restored to default 12 capabilities.');
                  }
                }}
                className="text-xs text-on-surface-variant hover:text-tertiary flex items-center gap-1 transition-colors"
                title="Reset to default 12 services"
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                <span className="hidden sm:inline">Reset Defaults</span>
              </button>
            </div>

            {/* TAB 1: LIST / REMOVE SERVICES */}
            {activeTab === 'list' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>Manage services currently active across Home & Services pages.</span>
                  <span className="font-semibold text-secondary">{services.length} Total Services</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {services.map((srv) => (
                    <div
                      key={srv.id}
                      className="p-4 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col justify-between gap-3 hover:border-outline-variant/50 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[20px]">{srv.icon}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-secondary">{srv.number}</span>
                              <span className="text-[10px] uppercase font-bold text-tertiary">{srv.categoryLabel}</span>
                            </div>
                            <h4 className="font-headline-sm text-sm font-bold text-on-surface mt-0.5">{srv.title}</h4>
                            <p className="text-[11px] text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                              {srv.description}
                            </p>
                          </div>
                        </div>

                        {/* Delete Action */}
                        <button
                          onClick={() => setServiceToDelete(srv.id)}
                          className="w-8 h-8 rounded-xl bg-error/10 hover:bg-error/25 text-error flex items-center justify-center shrink-0 transition-colors"
                          title={`Remove ${srv.title}`}
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>

                      <div className="pt-2 border-t border-outline-variant/15 flex items-center justify-between text-[11px] text-on-surface-variant">
                        <span>{srv.priceEstimateUSD} / {srv.priceEstimateBDT}</span>
                        <span className="text-tertiary font-medium">{srv.metrics}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delete Confirmation Modal Overlay */}
                {serviceToDelete && (
                  <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-surface-container p-6 rounded-3xl border border-error/30 max-w-sm w-full flex flex-col gap-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-error/20 text-error flex items-center justify-center mx-auto">
                        <span className="material-symbols-outlined text-[28px]">warning</span>
                      </div>
                      <h4 className="font-headline-sm text-base font-bold text-on-surface">Confirm Service Removal</h4>
                      <p className="text-xs text-on-surface-variant">
                        Are you sure you want to remove this service from the website?
                      </p>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => setServiceToDelete(null)}
                          className="flex-1 py-2.5 rounded-xl bg-surface-container-high text-on-surface text-xs font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleDeleteService(serviceToDelete)}
                          className="flex-1 py-2.5 rounded-xl bg-error text-surface-container-lowest text-xs font-bold hover:bg-error/90"
                        >
                          Delete Service
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: ADD SERVICE FORM */}
            {activeTab === 'add' && (
              <form onSubmit={handleAddServiceSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Service Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. TikTok Ads & Creator UGC Acceleration"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Capability Engine Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="performance">Performance Marketing</option>
                      <option value="creative">Creative Production</option>
                      <option value="infrastructure">Digital Infrastructure</option>
                    </select>
                  </div>
                </div>

                {/* Icon Picker */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-2">
                    Select Icon ({icon})
                  </label>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 rounded-xl bg-surface-container border border-outline-variant/20">
                    {AVAILABLE_ICONS.map((ic) => (
                      <button
                        type="button"
                        key={ic}
                        onClick={() => setIcon(ic)}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          icon === ic
                            ? 'bg-secondary text-surface-container-lowest font-bold shadow-sm'
                            : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                        }`}
                        title={ic}
                      >
                        <span className="material-symbols-outlined text-[18px]">{ic}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                    Short Summary (Displayed on Cards) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Brief 1-2 sentence description explaining the core benefit..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                    Detailed Methodology (Shown in Details Modal)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="In-depth explanation of how Next Growth BD executes this service..."
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                    Key Deliverables (One per line)
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`Weekly performance audit\nDedicated account manager\nCreative variation testing`}
                    value={deliverablesInput}
                    onChange={(e) => setDeliverablesInput(e.target.value)}
                    className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary transition-colors resize-none font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">Benchmark Metric</label>
                    <input
                      type="text"
                      value={metrics}
                      onChange={(e) => setMetrics(e.target.value)}
                      placeholder="+350% Growth Rate"
                      className="w-full h-10 px-3 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">Turnaround Time</label>
                    <input
                      type="text"
                      value={turnaround}
                      onChange={(e) => setTurnaround(e.target.value)}
                      placeholder="3-5 Business Days"
                      className="w-full h-10 px-3 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">USD Price</label>
                    <input
                      type="text"
                      value={priceUSD}
                      onChange={(e) => setPriceUSD(e.target.value)}
                      placeholder="From $350 / mo"
                      className="w-full h-10 px-3 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">BDT Price</label>
                    <input
                      type="text"
                      value={priceBDT}
                      onChange={(e) => setPriceBDT(e.target.value)}
                      placeholder="From ৳35,000 / mo"
                      className="w-full h-10 px-3 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface focus:outline-none focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="pt-3 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    <span>Publish Service to Website</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('list')}
                    className="py-4 px-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-xs font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
