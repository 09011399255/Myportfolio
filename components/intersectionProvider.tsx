"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IntersectionProviderProps {
    children: React.ReactNode;
    onIntersect: () => void;
    hasNextPage?: boolean;
}

export default function IntersectionProvider({
    children,
    onIntersect,
    hasNextPage,
}: IntersectionProviderProps) {
    const { ref, inView } = useInView({
        rootMargin: "200px",
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            onIntersect();
        }
    }, [inView, hasNextPage, onIntersect]);

    return (
        <>
            {children}

            <div ref={ref} style={{ height: "10px" }} />
        </>
    );
}
