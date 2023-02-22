import { ToastOptions, toast } from 'react-toastify';

interface ToastDisplay extends ToastOptions {
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'default';
}

export function displayToast({ message, type, ...rest }: ToastDisplay) {
  return toast(message, {
    type,
    position: 'bottom-center',
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'light',
    ...rest,
  });
}
