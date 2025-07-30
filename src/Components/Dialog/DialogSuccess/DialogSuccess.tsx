import { Link } from 'react-router';
import './DialogSuccess.css'
import { useEffect, useRef } from "react";

interface DialogSuccessProps {
    open: boolean
    message: string
    onClose: () => void
}

export const DialogSuccess = ({ message, open, onClose}: DialogSuccessProps) =>{
   const dialogRef = useRef<HTMLDialogElement | null>(null);
   
       useEffect(() => {
           const dialog = dialogRef.current;
   
           if (open && dialog && !dialog.open) {
               dialog.showModal();
           }
   
           if (!open && dialog && dialog.open) {
               dialog.close();
           }
   
           const handleClose = () => onClose();
           dialog?.addEventListener('close', handleClose);
   
           return () => {
               dialog?.removeEventListener('close', handleClose);
               <Link to='/'></Link>
           };
       }, [open, onClose]);
   
       return (
           <dialog ref={dialogRef} className="dialogSuccess">
               <div className='divDialogSuccess'>
                   <h2>Conta criada com sucesso!</h2>
                   <p>{message}</p>
                   <div className="divBtnCloseDialogSuccess">
                        <Link to='/'>
                            <button onClick={onClose} className='btnCloseDialogSuccess'>Voltar para o menu</button>
                        </Link>
                   </div>
               </div>
           </dialog>
       )
}