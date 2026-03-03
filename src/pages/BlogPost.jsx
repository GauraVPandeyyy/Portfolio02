// src/pages/BlogPost.jsx
import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Terminal } from "lucide-react";
import { blogs } from "../data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  // Always scroll to top when opening a blog
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30">
      {/* Minimal Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <main className="pt-32 pb-24 px-6">
        <article className="max-w-7xl mx-auto">
          
          {/* Header Data */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-white/10 pb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-mono text-neutral-500">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 uppercase tracking-widest font-bold">
                {blog.category}
              </span>
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {blog.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {blog.readTime}</div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
              {blog.title}
            </h1>
          </motion.div>

          {/* Formatted Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-300 leading-relaxed space-y-8"
          >
            <p className="text-xl">
              While building a login and signup API using Node.js and MongoDB, I realized something important:
            </p>
            <div className="border-l-2 border-orange-500 pl-6 my-8 py-2">
              <p className="text-2xl font-bold text-white italic">
                Validation is not just about checking inputs — it is about protecting the entire system.
              </p>
            </div>
            <p>
              Initially, I thought adding <code className="text-orange-400 bg-white/5 px-2 py-1 rounded">express-validator</code> was enough. But after debugging real issues and understanding middleware flow, I discovered why layered validation is critical in backend systems.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <span className="text-orange-500">1️⃣</span> Request-Level vs Schema-Level
            </h2>
            <p>There are two different responsibilities when handling incoming data:</p>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Request-Level Validation (express-validator)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4 mb-6">
              <li>Validates format of incoming data</li>
              <li>Rejects bad input early</li>
              <li>Improves performance by avoiding unnecessary DB calls</li>
              <li>Provides structured error responses</li>
            </ul>
            
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 overflow-x-auto my-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <Terminal className="w-3 h-3" /> middleware/validate.js
              </div>
              <pre className="text-sm font-mono text-green-400">
                <code>
{`body("email").isEmail().normalizeEmail();
body("password").isLength({ min: 6 });`}
                </code>
              </pre>
            </div>
            <p>This ensures invalid input never reaches business logic.</p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Schema-Level Validation (Mongoose)</h3>
            <p className="mb-4">
              This ensures data integrity at the database level. Even if middleware is skipped or a new developer adds another route without validation, the database still enforces rules. This acts as a final safety layer.
            </p>
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 overflow-x-auto my-6 shadow-2xl">
              <pre className="text-sm font-mono text-green-400">
                <code>
{`email: {
  type: String,
  required: true,
  match: /.+\@.+\..+/
}`}
                </code>
              </pre>
            </div>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <span className="text-orange-500">2️⃣</span> Sanitization vs Validation
            </h2>
            <p className="mb-6">These are not the same. Understanding the difference is key to secure APIs.</p>
            
            {/* Custom Table */}
            <div className="overflow-x-auto mb-8 border border-white/10 rounded-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 text-white font-semibold">Sanitization</th>
                    <th className="p-4 text-white font-semibold border-l border-white/10">Validation</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-300">
                  <tr className="border-b border-white/5">
                    <td className="p-4">Cleans and standardizes data</td>
                    <td className="p-4 border-l border-white/5">Rejects invalid data</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-sm text-orange-400">trim(), normalizeEmail()</td>
                    <td className="p-4 font-mono text-sm text-orange-400 border-l border-white/5">isEmail(), isLength()</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <code className="text-orange-400 bg-white/5 px-2 py-1 rounded">normalizeEmail()</code> especially stood out to me. It standardizes Gmail variations like <code className="text-neutral-400">test.email+1@gmail.com</code> → <code className="text-green-400">testemail@gmail.com</code>. This prevents duplicate account tricks.
            </p>

            {/* Section 3 */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <span className="text-orange-500">3️⃣</span> A Debugging Lesson: find() vs findOne()
            </h2>
            <p>While implementing login, I faced this bcrypt error:</p>
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl font-mono text-sm my-4">
              Error: data and hash arguments required
            </div>
            <p className="mt-4">The issue? I used <code className="text-red-400 bg-white/5 px-2 py-1 rounded">User.find({`{ email }`})</code> instead of <code className="text-green-400 bg-white/5 px-2 py-1 rounded">User.findOne({`{ email }`})</code>.</p>
            <p>
              <code className="text-orange-400">find()</code> returns an array, so <code className="text-orange-400">bcrypt</code> was receiving <code className="text-neutral-500">undefined</code> as the hash. Small mistake — but it taught me how important understanding return types is.
            </p>

            {/* Section 4 */}
            <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Key Takeaways</h2>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span><strong>Layered Security:</strong> Middleware does not immediately reject requests — it collects errors. Never rely on only one validation layer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span><strong>Sanitize Always:</strong> Always sanitize user input to prevent data manipulation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  <span><strong>Know Your Queries:</strong> Understand exactly what your database query returns (Array vs Object).</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p>
              Backend development is not just about making APIs work. It is about protecting data, designing defensively, anticipating misuse, and writing maintainable systems.
            </p>
            <p className="text-xl font-medium text-white mt-8 pb-12">
              This experience helped me move from writing code that works <span className="text-orange-500">— to writing code that is secure and reliable.</span>
            </p>

          </motion.div>
        </article>
      </main>
    </div>
  );
}