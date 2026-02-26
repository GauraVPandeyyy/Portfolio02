// src/components/ContactSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, RotateCcw, PhoneCall } from "lucide-react";
import { userData } from "../data/userData";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData();
    // Apni environment variable yahan use karein (Vite setup)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY); 
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);
    formData.append("subject", `New Portfolio Message from ${formState.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Do NOT reset formState here so we can use their name in the success message!
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(null);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 rounded-3xl md:py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9]">
                LET'S BUILD <br />
                <span className="text-neutral-600">TOGETHER</span>
              </h2>
              
              <p className="text-base sm:text-lg text-neutral-400 max-w-sm border-l-2 border-orange-500 pl-4 sm:pl-6">
                Ready to start a project? Whether it's a full-stack dashboard or a pixel-perfect frontend, I'm available.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
               <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">Direct Phone</div>
                    <a href={`tel:${userData.phone}`} className="text-white font-medium hover:text-orange-400 transition-colors truncate block">
                      {userData.phone}
                    </a>
                  </div>
               </div>
               <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">Direct Mail</div>
                    <a href={`mailto:${userData.email}`} className="text-white font-medium hover:text-orange-400 transition-colors truncate block">
                      {userData.email}
                    </a>
                  </div>
               </div>

               <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 uppercase tracking-widest">Location</div>
                    <span className="text-white font-medium">
                      {userData.location}
                    </span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* RIGHT: Form & Success State Container */}
          <div className="bg-neutral-900/30 p-6 sm:p-8 md:p-12 rounded-[2rem] border border-white/5 relative min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* --- SUCCESS STATE --- */}
              {submitStatus === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="flex flex-col items-center justify-center text-center h-full space-y-6"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", damping: 12, stiffness: 200 }}
                    className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-2 shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)]"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white tracking-tight">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-400 text-lg max-w-sm mx-auto">
                      Thanks for reaching out, <span className="text-orange-400 font-semibold">{formState.name.split(' ')[0]}</span>. I'll get back to you shortly.
                    </p>
                  </div>

                  <button 
                    onClick={resetForm}
                    className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all group"
                  >
                    <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
                    Send Another
                  </button>
                </motion.div>

              ) : (

              /* --- FORM STATE --- */
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 md:space-y-8"
                >
                  {submitStatus === 'error' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium text-center">
                      Connection failed. Please check your internet or email me directly.
                    </motion.div>
                  )}

                  <div className="relative pt-4">
                    <label className={`absolute left-0 transition-all duration-300 ${focusedField === 'name' || formState.name ? '-top-2 text-xs text-orange-500 font-bold tracking-widest uppercase' : 'top-4 text-lg text-neutral-500'}`}>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-neutral-800 py-3 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="relative pt-4">
                    <label className={`absolute left-0 transition-all duration-300 ${focusedField === 'email' || formState.email ? '-top-2 text-xs text-orange-500 font-bold tracking-widest uppercase' : 'top-4 text-lg text-neutral-500'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-neutral-800 py-3 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="relative pt-4">
                    <label className={`absolute left-0 transition-all duration-300 ${focusedField === 'message' || formState.message ? '-top-2 text-xs text-orange-500 font-bold tracking-widest uppercase' : 'top-4 text-lg text-neutral-500'}`}>
                      Your Message
                    </label>
                    <textarea 
                      rows={4}
                      required
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-neutral-800 py-3 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {/* Background Hover Effect */}
                      <div className="absolute inset-0 w-0 bg-orange-500 transition-all duration-[400ms] ease-out group-hover:w-full" />
                      
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}