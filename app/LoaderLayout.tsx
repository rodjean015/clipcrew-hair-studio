"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";

export default function LoaderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const [scaleOut, setScaleOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setScaleOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader scaleOut={scaleOut} />}
            {!loading && children}
        </>
    );
}
