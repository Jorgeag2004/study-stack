'use client'
import { EllipsisVertical } from 'lucide-react';
import { useState, MouseEvent, useEffect, useRef } from "react";

export const ContextMenu = () => {

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
               setOpenMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const [clientX, setClientX] = useState<number>(0);
    const [clientY, setClientY] = useState<number>(0);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleClick = (e: MouseEvent) => {
       setClientX((e.clientX + 2));
       setClientY((e.clientY + 5));
       setOpenMenu(true);
    }

    return (
        <div>
            <EllipsisVertical onClick={handleClick} className={'hover:stroke-neutral-500'}/>
            {openMenu &&
                <div
                    className={'h-15 w-40 bg-neutral-100 fixed'}
                    style={{
                        top: `${clientY}px`,
                        left: `${clientX}px`
                    }}
                    ref={dropdownRef}
                >
                Menu
            </div>}
        </div>
    )
}