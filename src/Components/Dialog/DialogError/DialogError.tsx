import './DialogError.css'
import { useEffect, useRef } from "react"

interface DialogErrorProps {
    open: boolean
    message: string
    onClose: () => void
}

export const DialogError = ({ message, open, onClose }: DialogErrorProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (open && dialog && !dialog.open) {
            dialog.showModal();
        }

        if (!open && dialog && dialog.open) {
            dialog.close();
        }

        // Fechar com ESC ou clique fora
        const handleClose = () => onClose();
        dialog?.addEventListener('close', handleClose);

        return () => {
            dialog?.removeEventListener('close', handleClose);
        };
    }, [open, onClose]);

    return (
        <dialog ref={dialogRef} className="dialogError">
            <div className='divDialogError'>
                <h2>Ops, algo deu errado...</h2>
                <p>{message}</p>
                <div className="divBtnCloseDialogError">
                    <button onClick={onClose} className='btnCloseDialogError'>Fechar</button>
                </div>
            </div>
        </dialog>
    )
}