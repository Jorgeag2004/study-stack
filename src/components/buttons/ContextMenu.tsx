'use client'
import { EllipsisVertical, Ellipsis } from 'lucide-react';
import { useState, MouseEvent, useEffect, useRef } from "react";

interface ContextMenuProps {
    vertical?: boolean;
    edit_function: () => void;
    delete_function: () => void;
}

export const ContextMenu = ({vertical = true, edit_function, delete_function}: ContextMenuProps) => {

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: globalThis.MouseEvent) => {
            if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
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

    const handleEdit = () => {
        edit_function();
        setOpenMenu(false);
    }

    const handleDelete = () => {
        delete_function();
        setOpenMenu(false);
    }

    return (
        <div>
            {vertical ?
                <EllipsisVertical onClick={handleClick} className={'hover:stroke-neutral-500'}/>
                : <Ellipsis onClick={handleClick} className={'hover:stroke-neutral-500'}/>}
            {openMenu &&
                <div
                    className={'w-30 bg-neutral-900 fixed z-50'}
                    style={{
                        top: `${clientY}px`,
                        left: `${clientX}px`
                    }}
                    ref={dropdownRef}
                >
                <div onClick={handleEdit} className={'text-green-600 pl-1 hover:bg-neutral-500'}>
                    Edit
                </div>
                    <div onClick={handleDelete} className={'text-green-600 pl-1 hover:bg-neutral-500'}>
                        Delete
                    </div>
            </div>}
        </div>
    )
}