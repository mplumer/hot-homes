import { useEffect } from "react";

export const PropertySearch = () => {
    useEffect(() => {
        const search = async () => {
            const response = await fetch("/api/search");
            const data = await response.json();
            console.log("Search data ", data);
        };
        search();
    }, []);
    return (
        <div>
        <h1>Property Search</h1>
        </div>
    );
    }