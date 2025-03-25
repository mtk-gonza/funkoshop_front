// context/LicenceContext.js
import { createContext, useState, useEffect } from 'react';
import { getLicences } from './../services/licenceService.js';

export const LicenceContext = createContext();

export const LicenceProvider = ({ children }) => {
    const [licences, setLicences] = useState([]);

    useEffect(() => {
        const fetchLicences = async () => {
            try {
                const data = await getLicences();
                setLicences(data);
            } catch (error) {
                console.error('Error fetching licences:', error);
            }
        };
        fetchLicences();
    }, []);

    return (
        <LicenceContext.Provider value={{ licences }}>
            {children}
        </LicenceContext.Provider>
    );
};