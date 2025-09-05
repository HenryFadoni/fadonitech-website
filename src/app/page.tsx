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
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-200 hover:text-white transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-200 hover:text-white transition-colors font-medium">About</a>
            <a href="#process" className="text-gray-200 hover:text-white transition-colors font-medium">Process</a>
            <a href="#testimonials" className="text-gray-200 hover:text-white transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-200 hover:text-white transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative container mx-auto px-6 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 animate-fadeInUp">
            Transform Your Cloud Infrastructure
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-10 max-w-5xl mx-auto animate-fadeInUp animate-delay-200">
            Expert Cloud Support & FinOps Solutions for Series C Startups Ready to Scale
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-4xl mx-auto animate-fadeInUp animate-delay-300">
            We help growing companies reduce cloud costs by up to 40% while eliminating operational risks. 
            Our proven FinOps methodology has saved our clients millions in cloud spending.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animate-delay-400">
            <a
              href="mailto:henry@fadoni.tech?subject=Free Cloud Consultation Request"
              className="inline-flex items-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl transform hover:scale-105"
            >
              Get Your Free Consultation
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
              Comprehensive cloud solutions designed specifically for Series C startups and growing enterprises.
              Our expert team delivers measurable results through proven methodologies and cutting-edge technology.
            </p>
          </div>
          
          {/* Main FinOps Service */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 mb-16 shadow-2xl animate-fadeInUp animate-delay-200 transform hover:scale-105 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                  FLAGSHIP SERVICE
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  FinOps Cloud Optimization
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our flagship FinOps service combines financial accountability with operational excellence. 
                  We don't just reduce costs – we optimize your entire cloud strategy for sustainable growth.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real-time cost monitoring and automated alerts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Resource right-sizing and utilization optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Reserved instance and savings plan management
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multi-cloud cost allocation and chargeback systems
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Cost Reduction</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Deployment</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Monitoring & Support</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-300">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Security & Compliance</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Comprehensive security audits, compliance frameworks (SOC 2, HIPAA, PCI-DSS), and ongoing security monitoring.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• Security posture assessments</li>
                <li>• Automated compliance monitoring</li>
                <li>• Incident response planning</li>
                <li>• Regular penetration testing</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-400">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float" style={{animationDelay: '1s'}}>
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Performance Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Advanced performance tuning, auto-scaling optimization, and infrastructure monitoring to ensure peak efficiency.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• Application performance monitoring</li>
                <li>• Database optimization</li>
                <li>• CDN and caching strategies</li>
                <li>• Load balancing configuration</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-500">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-8 animate-float" style={{animationDelay: '2s'}}>
                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Migration & Modernization</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Seamless cloud migrations, legacy system modernization, and container orchestration with minimal downtime.
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-3">
                <li>• Cloud migration planning</li>
                <li>• Containerization with Docker/K8s</li>
                <li>• Microservices architecture</li>
                <li>• CI/CD pipeline implementation</li>
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
                Founded by cloud infrastructure veterans, FadoniTech specializes in helping Series C startups 
                and growing enterprises optimize their cloud operations. Our team has over 50 years of combined 
                experience managing cloud infrastructures at scale.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We understand the unique challenges facing rapidly growing companies: the need to scale quickly 
                while maintaining cost efficiency, security, and reliability. Our FinOps-first approach ensures 
                your cloud spending aligns with business objectives and delivers measurable ROI.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$15M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.99%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Support</div>
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
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Proven Track Record</h4>
                    <p className="text-gray-600 dark:text-gray-400">Average 40% cost reduction across all clients</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Enterprise Security</h4>
                    <p className="text-gray-600 dark:text-gray-400">SOC 2 Type II certified with advanced security protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Dedicated Team</h4>
                    <p className="text-gray-600 dark:text-gray-400">Senior cloud architects assigned to every project</p>
                  </div>
                </div>
                
                <div className="flex items-start group hover:bg-gray-50 dark:hover:bg-gray-700 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Transparent Reporting</h4>
                    <p className="text-gray-600 dark:text-gray-400">Real-time dashboards and monthly ROI reports</p>
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
              Our Proven FinOps Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our systematic approach to FinOps ensures maximum cost savings while minimizing risk. 
              Each phase is designed to deliver immediate value while building long-term optimization capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Risk Reduction Through FinOps
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Traditional cloud management approaches often lead to budget overruns, security vulnerabilities, 
                and operational inefficiencies. Our FinOps methodology addresses these risks systematically:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Financial Risk</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Unexpected cost spikes, budget overruns, and inefficient resource allocation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Security Risk</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Misconfigured resources, compliance gaps, and unauthorized access</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Operational Risk</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Performance degradation, scaling issues, and service interruptions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Risk Mitigation Results
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">-89%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Security Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">-76%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Budget Variance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">-92%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Downtime Events</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">+340%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">ROI Improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Assessment & Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Comprehensive audit of your current cloud infrastructure, spending patterns, and risk factors.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Infrastructure mapping</li>
                <li>• Cost analysis & forecasting</li>
                <li>• Security posture review</li>
                <li>• Performance benchmarking</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategy & Planning</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Develop customized optimization strategy with clear ROI targets and risk mitigation plans.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Custom optimization roadmap</li>
                <li>• Budget & governance policies</li>
                <li>• Risk mitigation strategies</li>
                <li>• Success metrics definition</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Deploy optimization solutions with minimal disruption and maximum impact on your operations.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Automated cost controls</li>
                <li>• Resource optimization</li>
                <li>• Security hardening</li>
                <li>• Monitoring setup</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Optimization & Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Continuous monitoring, optimization, and support to ensure sustained results and growth.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                <li>• 24/7 monitoring & alerts</li>
                <li>• Continuous optimization</li>
                <li>• Regular reporting</li>
                <li>• Proactive recommendations</li>
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
              Real feedback from clients who have experienced the process transformation and operational optimization I bring to every project.
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
                  K
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Kanak</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Founder & CEO, GoodSelf</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "Henry was an amazing addition to our team. He was always super productive and communicative. Happy to recommend him to whoever needs an experienced developer to boost their project."
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Co-founder & CEO, Apollo21</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "Definitely a good experience, we had our pipeline crowded and our team was not getting much done. Henry got us on track and we were able to deliver just on time."
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
                  "Henry proved to be a great asset to us, he was always available for any emergencies and upcoming demands. We were stunned to see his results and work. Highly recommend!"
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Co-founder & CTO, Pickups</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "Impressive, Henry was our first hire, he built our entire infrastructure. Thanks to him, we were able to finish the product and sell our business!"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-600">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  T
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Tony</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Founder, Hubscotch Games</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "I loved working with Henry, he is a great developer and guide. We were concerned about the risks and delays, and he was always honest and transparent."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-delay-700">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Sarah</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Product Manager, TechFlow</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "Henry's technical expertise and problem-solving skills are exceptional. He delivered our project ahead of schedule while maintaining the highest quality standards."
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
              How We Helped Pickups Build & Sell Their Business
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              A startup needed to build their entire infrastructure from scratch. Here's how our comprehensive 
              cloud solutions and expert guidance helped them achieve their goals and successfully exit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slideInLeft">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">The Challenge</h3>
              <div className="space-y-6 mb-10">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-semibold text-red-800 dark:text-red-400 mb-3 text-lg">Starting From Zero</h4>
                  <p className="text-red-700 dark:text-red-300">
                    Pickups was a startup with no infrastructure in place. They needed to build their entire cloud architecture from scratch while ensuring scalability and cost-effectiveness.
                  </p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-3 text-lg">Time Constraints</h4>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    The company needed to move fast to meet market demands and investor expectations, with limited technical expertise in-house.
                  </p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-400 mb-3 text-lg">Scale Requirements</h4>
                  <p className="text-orange-700 dark:text-orange-300">
                    They needed an infrastructure that could handle rapid user growth while maintaining performance and reliability standards.
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Built comprehensive cloud infrastructure architecture from ground up</span>
                </div>
                
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Implemented scalable microservices architecture with Docker and Kubernetes</span>
                </div>
                
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Set up automated CI/CD pipelines for rapid deployment and testing</span>
                </div>
                
                <div className="flex items-start group">
                  <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Established monitoring, logging, and alerting systems for operational excellence</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-10 shadow-2xl animate-slideInRight">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Results Achieved</h3>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-3">✅</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Infrastructure Built</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">💰</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Business Sold</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">🚀</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Product Finished</div>
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
                    M
                  </div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Marco</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Co-founder & CTO, Pickups</p>
                </div>
                <div className="flex justify-center text-yellow-400 mb-4 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-center leading-relaxed">
                  "Impressive, Henry was our first hire, he built our entire infrastructure. Thanks to him, we were able to finish the product and sell our business!"
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
              Ready to Optimize Your Cloud?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Contact us today for a free consultation and discover how much you could save.
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
                href="mailto:henry@fadoni.tech?subject=Free Cloud Consultation Request"
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
              href="mailto:henry@fadoni.tech?subject=Free Cloud Consultation Request"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-lg"
            >
              Schedule Your Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
          <p className="text-gray-400 mb-4">Cloud Support & FinOps Solutions</p>
          <p className="text-gray-500 text-sm">
            © 2024 FadoniTech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
