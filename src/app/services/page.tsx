export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
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
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-200 hover:text-white transition-colors font-medium">Home</a>
            <a href="/about" className="text-gray-200 hover:text-white transition-colors font-medium">About</a>
            <a href="/services" className="text-white transition-colors font-medium">Services</a>
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
            Our Services
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-100 dark:text-gray-100 mb-10 max-w-5xl mx-auto animate-fadeInUp animate-delay-200 font-medium">
            End-to-End AI Automation for Non-Technical Businesses
          </p>
          <p className="text-xl text-gray-200 dark:text-gray-200 mb-16 max-w-4xl mx-auto animate-fadeInUp animate-delay-300 leading-relaxed">
            We specialize in end-to-end AI automation for non-technical businesses. By combining industry-leading SaaS tools with custom code and AI models, we streamline your operations so you can focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animate-delay-400">
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
              href="/#case-study"
              className="inline-flex items-center px-10 py-5 border-3 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300 text-xl transform hover:scale-105"
            >
              View Case Study
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="relative bg-white dark:bg-gray-800 py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container mx-auto px-6">
          {/* Services Grid */}
          <div className="space-y-20">
            
            {/* Service 1: Process Mapping & Diagnostics */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m5 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-5 4h4" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Process Mapping & Diagnostics</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  We start by evaluating and documenting your current workflows. This deep dive uncovers inefficiencies and highlights opportunities for automation and integration.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Workflow Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Bottleneck Identification</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Opportunity Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Process Documentation</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInRight">
                <div className="text-center">
                  <div className="text-6xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Deep Dive Analysis</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We map every step of your current processes to identify automation opportunities and integration points.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 2: Tool Selection & Configuration */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInLeft order-2 lg:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-6">⚙️</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Perfect Tool Match</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We select and configure the ideal combination of tools that fit your specific business needs and workflows.
                  </p>
                </div>
              </div>
              
              <div className="animate-slideInRight order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Tool Selection & Configuration</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Based on your goals, we recommend and configure the right third-party solutions — whether that&apos;s a CRM, e‑commerce platform, financial software, marketing suite or helpdesk. Each tool is tailored to your unique processes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">CRM Systems</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">E-commerce Platforms</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Financial Software</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Marketing Suites</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Integration & Custom Automation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Integration & Custom Automation</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Our engineers build custom automations and scripts that connect all your tools. From syncing orders and customers to automating invoicing, notifications and tasks, we eliminate manual steps and reduce errors.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">API Integrations</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Custom Scripts</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Data Synchronization</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Error Reduction</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInRight">
                <div className="text-center">
                  <div className="text-6xl mb-6">🔗</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Seamless Connections</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We build the bridges between your tools, creating a unified ecosystem that works automatically.
                  </p>
                </div>
              </div>
            </div>

            {/* Service 4: AI-Powered Decision Support */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInLeft order-2 lg:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-6">🧠</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Smart Analytics</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Get real-time insights and predictive analytics that help you make smarter business decisions faster.
                  </p>
                </div>
              </div>
              
              <div className="animate-slideInRight order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">AI‑Powered Decision Support</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  We implement dashboards and analytics that provide real-time metrics and predictive insights. With data-driven visibility into your pipeline, retention and revenue, you make smarter decisions faster.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Real-time Dashboards</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Pipeline Visibility</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Revenue Insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: Training & Continuous Support */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slideInLeft">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Training & Continuous Support</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  A smooth handoff is essential. We train your team on new workflows and stay on board with ongoing support and maintenance. As your business evolves, we refine automations and add new features.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Team Training</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Documentation</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Ongoing Maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Feature Evolution</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInRight">
                <div className="text-center">
                  <div className="text-6xl mb-6">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Smooth Handoff</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We ensure your team is confident and capable with comprehensive training and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you&apos;re migrating from spreadsheets or looking to modernize an existing stack, our AI automation services give you the speed and scalability of a tech company—without needing to build an in‑house engineering team.
            </p>
            <a
              href="https://calendly.com/hernyfadoni/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl transform hover:scale-105"
            >
              Get Started Today
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
