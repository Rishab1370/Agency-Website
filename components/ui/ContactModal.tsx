"use client";

import { useModal } from "@/lib/ModalContext";
import { useThemeMode } from "@/lib/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, User, Mail, Phone, MessageSquare, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const projectOptions = [
    "Custom Web Development",
    "AI & Automation",
    "ERP/CRM Systems",
    "UI/UX Design",
    "E-commerce Excellence",
    "Performance & SEO",
    "Other",
];

export default function ContactModal() {
    const { isOpen, closeModal, projectType } = useModal();
    const { mode } = useThemeMode();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    useEffect(() => {
        if (projectType) {
            setFormData((prev) => ({ ...prev, service: projectType }));
        }
    }, [projectType, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Auto-close after success
        setTimeout(() => {
            closeModal();
            setIsSuccess(false);
            setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl"
                        style={{
                            background: mode === "dark" ? "rgba(15, 15, 20, 0.95)" : "rgba(255, 255, 255, 0.98)",
                            borderColor: "var(--color-border)",
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border/50">
                            <div>
                                <h2 className="text-xl font-bold gradient-text">Start Your Project</h2>
                                <p className="text-xs text-text-secondary">Tell us about your digital goals</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 rounded-full hover:bg-border/30 transition-colors"
                                style={{ color: "var(--color-text-secondary)" }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold ml-1 opacity-70">Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={14} />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Your full name"
                                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold ml-1 opacity-70">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={14} />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="hello@company.com"
                                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold ml-1 opacity-70">Phone (Optional)</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={14} />
                                                <input
                                                    type="tel"
                                                    placeholder="+91 00000 00000"
                                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold ml-1 opacity-70">Project Category</label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={14} />
                                                <select
                                                    required
                                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all appearance-none cursor-pointer"
                                                    value={formData.service}
                                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                >
                                                    <option value="">Select a service</option>
                                                    {projectOptions.map((opt) => (
                                                        <option key={opt} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold ml-1 opacity-70">Message</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-4 opacity-40" size={14} />
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Tell us about your project requirements..."
                                                className="w-full pl-9 pr-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full btn-primary py-3 rounded-xl flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed group transition-all"
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                                            />
                                        ) : (
                                            <>
                                                Send Inquiry
                                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                                        <CheckCircle2 size={32} className="text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: "var(--color-text-primary)" }}>Inquiry Received!</h3>
                                    <p className="text-sm text-text-secondary max-w-[280px]">
                                        Thank you, {formData.name.split(' ')[0]}. Our team will reach out to you within 24 hours to discuss your project.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
