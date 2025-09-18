export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 relative">
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
                {/* Main cloud shape */}
                <path d="M38 20c0-1.1-.9-2-2-2 0-4.4-3.6-8-8-8s-8 3.6-8 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h16c2.2 0 4-1.8 4-4z" fill="url(#cloudGradient)" />
                {/* Additional cloud puffs */}
                <circle cx="16" cy="16" r="4" fill="url(#cloudGradient)" opacity="0.8" />
                <circle cx="32" cy="14" r="3" fill="url(#cloudGradient)" opacity="0.6" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">
              FadoniTech
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/about" className="text-gray-200 hover:text-white transition-colors font-medium">About</a>
            <a href="/services" className="text-gray-200 hover:text-white transition-colors font-medium">Services</a>
            <a href="#process" className="text-gray-200 hover:text-white transition-colors font-medium">Process</a>
            <a
              href="https://calendly.com/hernyfadoni/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative container mx-auto px-6 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 animate-fadeInUp">
            Automate Your Business with AI-Powered Solutions
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-100 dark:text-gray-100 mb-10 max-w-5xl mx-auto animate-fadeInUp animate-delay-200 font-medium">
            We help non-tech businesses streamline operations by integrating SaaS tools and custom AI to eliminate repetitive tasks and unlock new efficiency.
          </p>
          <p className="text-xl text-gray-200 dark:text-gray-200 mb-16 max-w-4xl mx-auto animate-fadeInUp animate-delay-300 leading-relaxed">
            Running a business shouldn&apos;t require juggling multiple systems and manual tasks. Our AI automation service integrates your existing tools, eliminates repetitive work, and delivers data-driven insights—so you can focus on growth.
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto animate-fadeInUp animate-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimize Workflows</h3>
              <p className="text-gray-200 text-sm">Reduce manual work and streamline processes</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Integrate Platforms</h3>
              <p className="text-gray-200 text-sm">Connect CRM, e-commerce, finance, and marketing tools</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom AI Automation</h3>
              <p className="text-gray-200 text-sm">Build smart automations using AI models</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
              <p className="text-gray-200 text-sm">Training and transparent reporting</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animate-delay-500">
            <a
              href="https://calendly.com/hernyfadoni/introduction"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl transform hover:scale-105"
            >
              Schedule Your Free Consultation
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
          </a>
          <a
              href="#case-study"
              className="inline-flex items-center px-10 py-5 border-3 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300 text-xl transform hover:scale-105"
            >
              View Case Study
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="relative bg-white dark:bg-gray-800 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-pattern-grid opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              We provide end-to-end AI automation services tailored for non-technical businesses. By combining proven SaaS platforms with custom AI and code, we deliver solutions that streamline operations and scale as you grow.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-200">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Process Mapping & Diagnostics</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                We work with your team to map existing workflows, identify bottlenecks, and uncover automation opportunities.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• Workflow analysis and mapping</li>
                <li>• Bottleneck identification</li>
                <li>• Automation opportunity assessment</li>
                <li>• Process optimization recommendations</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-300">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float" style={{animationDelay: '1s'}}>
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Tool Selection & Configuration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                We select and configure the right SaaS tools (e‑commerce, CRM, marketing, finance, helpdesk) to fit your unique needs.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• SaaS platform evaluation</li>
                <li>• Custom tool configuration</li>
                <li>• Integration planning</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-400">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float" style={{animationDelay: '2s'}}>
                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Integration & Custom Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Our developers build integrations and custom automations using APIs and AI models to connect systems and eliminate manual tasks.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• API integrations</li>
                <li>• Custom automation development</li>
                <li>• AI model implementation</li>
                <li>• System connectivity solutions</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-500">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float" style={{animationDelay: '3s'}}>
                <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">AI‑Powered Decision Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                We leverage AI to analyse data, generate insights, and automate repetitive decisions—from drafting emails to prioritising work.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• Automated data analysis</li>
                <li>• AI-driven insights generation</li>
                <li>• Decision automation</li>
                <li>• Smart prioritization systems</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-600">
              <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float" style={{animationDelay: '4s'}}>
                <svg className="w-10 h-10 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Training & Continuous Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                We provide documentation, training, and ongoing support to ensure your automations stay reliable and up‑to‑date.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• Comprehensive documentation</li>
                <li>• Team training sessions</li>
                <li>• 24/7 technical support</li>
                <li>• Regular system updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-gray-50 dark:bg-gray-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{animationDelay: '3s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                About FadoniTech
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Founded by automation experts, FadoniTech specializes in helping non-technical businesses 
                streamline their operations through AI-powered automation. Our team has extensive experience 
                integrating SaaS platforms and building custom AI solutions for growing companies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We understand the unique challenges facing business owners: juggling multiple systems, managing 
                repetitive tasks, and scaling operations efficiently. Our AI-first approach eliminates manual work 
                and delivers data-driven insights so you can focus on growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hours Saved Weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Task Automation Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI Support</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl animate-slideInRight hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose FadoniTech?</h3>
              <div className="space-y-6">
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Proven Results</h4>
                    <p className="text-gray-600 dark:text-gray-400">Average 70% reduction in manual tasks across all clients</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">No-Code Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-400">User-friendly automations that your team can understand and manage</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">End-to-End Service</h4>
                    <p className="text-gray-600 dark:text-gray-400">From analysis to implementation, we handle the entire automation journey</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Ongoing Support</h4>
                    <p className="text-gray-600 dark:text-gray-400">Training, documentation, and continuous support to ensure success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FinOps Process Section */}
      <section id="process" className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our structured approach ensures reliable, measurable results. Each phase is designed to deliver immediate value while building long-term automation capabilities.
            </p>
          </div>


          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Assessment & Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We evaluate your current processes, map tasks, and identify automation opportunities.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Process workflow mapping</li>
                <li>• Task analysis & bottlenecks</li>
                <li>• Automation opportunity assessment</li>
                <li>• Current system evaluation</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategy & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We design your automation roadmap, select SaaS and AI tools, and define success metrics and milestones.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Custom automation roadmap</li>
                <li>• SaaS tool selection</li>
                <li>• AI integration planning</li>
                <li>• Success metrics definition</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Implementation & Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We configure tools, integrate systems, build custom automations, and train your team.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• SaaS tool configuration</li>
                <li>• API integrations</li>
                <li>• Custom automation development</li>
                <li>• Team training</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Optimization & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We monitor performance, refine automations, and provide continuous support and training.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Performance monitoring</li>
                <li>• Automation refinement</li>
                <li>• Ongoing training</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative bg-gray-50 dark:bg-gray-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <span className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Real feedback from clients who have experienced the process transformation and operational optimization we bring to every project.
            </p>
          </div>

          {/* Client Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-fadeInUp animate-delay-200">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fadeInUp animate-delay-300">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center animate-fadeInUp animate-delay-400">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">5.0</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Samantha</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">CEO, GoodSelf</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  &ldquo;They transformed our manual order processing into a smooth automated flow. We saved hours every week and our team is happier.&rdquo;
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  D
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Daniel</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Co‑founder & CEO, Apollo21</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  &ldquo;Our onboarding process used to take days. Now, new clients are fully set up in minutes thanks to their AI automations.&rdquo;
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  B
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Ben</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Founder & CEO, Blindside</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  &ldquo;Henry proved to be a great asset to us, he was always available for any emergencies and upcoming demands. We were stunned to see his results and work. Highly recommend!&rdquo;
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Marco</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">CTO, Pickups</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  &ldquo;As a non‑technical founder, I appreciated their clarity and transparency. The automations they built allowed us to scale without hiring a huge team.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="relative bg-white dark:bg-gray-800 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <span className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6">
              SUCCESS STORY
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Case Study: Paywall Pup
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Paywall Pup, a subscription‑based digital platform, struggled with manual subscription management and inconsistent paywall triggers. Here&apos;s how we automated their entire workflow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slideInLeft">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">The Challenge</h3>
              <div className="space-y-6 mb-10">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-semibold text-red-800 dark:text-red-400 mb-3 text-lg">Manual Subscription Management</h4>
                  <p className="text-red-700 dark:text-red-300">
                    Paywall Pup struggled with manual subscription management and inconsistent paywall triggers. Onboarding new customers required multiple steps.
                  </p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-3 text-lg">Rising Support Tickets</h4>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Support tickets were rising as the business grew, overwhelming their small team with repetitive customer service requests.
                  </p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-400 mb-3 text-lg">Inconsistent User Experience</h4>
                  <p className="text-orange-700 dark:text-orange-300">
                    Manual processes led to inconsistent customer experiences and delayed responses to subscription changes.
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Integrated payment processor, CRM, and email marketing tools into a unified workflow</span>
                </div>
                
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Custom AI scripts automatically managed paywall access and subscription changes</span>
                </div>
                
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Triggered personalized onboarding emails based on user behavior and subscription status</span>
                </div>
                
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Provided real‑time analytics in a central dashboard for better business insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInRight">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Results Achieved</h3>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-3">-70%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support Tickets</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">+30%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Conversion & Revenue</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">2×</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Onboarding</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-3">⭐</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">5-Star Rating</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-center text-xl">Client Testimonial</h4>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    K
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Kevin Jordan</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">CEO, Paywall Pup</p>
                </div>
                <div className="flex justify-center text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-center leading-relaxed">
                  &ldquo;Working with the AI automation team was game‑changing. We automated our entire subscription workflow, freed up our team, and saw immediate revenue growth.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Schedule your free consultation today and discover how AI-powered automation can accelerate your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">315 660 1532</p>
            </div>
            
            {/* Email */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <a 
                href="mailto:henry@fadoni.tech?subject=Free AI Automation Consultation Request"
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
              >
                henry@fadoni.tech
              </a>
            </div>
            
            {/* Location */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                7345 W SAND LAKE RD<br />
                STE 210 OFFICE 3950<br />
                Orlando, FL 32819 US
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://calendly.com/hernyfadoni/introduction"
          target="_blank"
          rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-lg"
            >
              Schedule Your Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l16 5-16 5V7z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-blue-400">Fadoni</span>Tech
          </h3>
          <p className="text-gray-400 mb-4">AI Automation Solutions</p>
          <p className="text-gray-500 text-sm">
            © 2024 FadoniTech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
