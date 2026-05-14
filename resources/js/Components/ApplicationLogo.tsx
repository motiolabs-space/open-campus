import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Academic Shield Shape */}
            <path d="M50 5L10 20V45C10 65 25 83 50 90C75 83 90 65 90 45V20L50 5Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M50 5L10 20V45C10 65 25 83 50 90C75 83 90 65 90 45V20L50 5Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            
            {/* Network / Globe Symbolism */}
            <circle cx="50" cy="40" r="15" stroke="currentColor" strokeWidth="3" />
            <path d="M35 40H65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 25V55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 55C50 65 40 75 30 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 55C50 65 60 75 70 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}
