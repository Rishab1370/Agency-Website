"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    isOpen: boolean;
    projectType: string;
    openModal: (type?: string) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [projectType, setProjectType] = useState("");

    const openModal = (type = "") => {
        setProjectType(type);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setProjectType("");
    };

    return (
        <ModalContext.Provider value={{ isOpen, projectType, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
