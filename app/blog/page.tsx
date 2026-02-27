"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";
import Image from "next/image";

export default function BlogPage() {
    const { mode } = useThemeMode();

    return (
        <main className="pt-24 min-h-screen" style={{ background: "var(--color-bg)" }}>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        background: "radial-gradient(circle at 0% 0%, #A347FF 0%, transparent 50%)"
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex justify-center"
                    >
                        <span className="tag-pill">
                            <Sparkles size={13} />
                            Insights & Expertise
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold mb-8"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", lineHeight: 1.1 }}
                    >
                        The NeuralCraft <span className="gradient-text">Manifesto</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        Deep dives into AI automation, high-performance web development, and the future of digital business.
                    </motion.p>

                    {/* Search Bar Placeholder */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles, topics, or trends..."
                            className="w-full bg-surface/50 border border-border rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-sm"
                            style={{ color: "var(--color-text-primary)" }}
                        />
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogPosts.map((post) => (
                            <StaggerItem key={post.id}>
                                <motion.article
                                    className="group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-2xl flex flex-col h-full bg-surface"
                                    style={{ borderColor: "var(--color-border)" }}
                                    whileHover={{ y: -8, borderColor: mode === "dark" ? "rgba(70, 102, 255, 0.4)" : "rgba(70, 102, 255, 0.2)" }}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-primary/90 backdrop-blur-md">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 mb-5 text-xs font-medium opacity-60">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={13} />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={13} />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3
                                            className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors"
                                            style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                                        >
                                            {post.title}
                                        </h3>

                                        <p className="leading-relaxed mb-8 flex-1" style={{ color: "var(--color-text-secondary)" }}>
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                                                    <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                                                        <User size={14} className="opacity-50" />
                                                    </div>
                                                </div>
                                                <span className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{post.author}</span>
                                            </div>
                                            <button className="flex items-center gap-2 text-sm font-bold text-primary group/link">
                                                Read More
                                                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 border-t border-border">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div
                        className="p-10 md:p-16 rounded-[2.5rem] text-center relative overflow-hidden"
                        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                    >
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Join the Digital Vanguard</h2>
                            <p className="text-lg opacity-70 mb-10 max-w-lg mx-auto">Get monthly strategies on AI implementation and premium web craftsmanship delivered to your inbox.</p>

                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 bg-surface border border-border rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all"
                                    style={{ background: "color-mix(in srgb, var(--color-bg), transparent 50%)" }}
                                />
                                <button className="btn-primary">Subscribe</button>
                            </form>
                            <p className="text-[10px] opacity-40 mt-4 uppercase tracking-widest font-bold">No spam. Only high-signal insights.</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </main>
    );
}
