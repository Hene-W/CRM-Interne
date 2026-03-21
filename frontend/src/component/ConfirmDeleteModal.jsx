import { createPortal } from "react-dom";

const ConfirmDeleteModal = ({ open, title, description, onConfirm, onCancel }) => {
    if (!open) return null;

    const modalContent = (
        <div onClick={(e) => { e.stopPropagation(); onCancel() }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm bg-white dark:bg-[#1f1f1f] rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-2 dark:text-white">{title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{description}</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2f2f2f]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => { onConfirm(); onCancel(); }}
                        className="px-4 py-2 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );

    const root = document.getElementById("modal-root");
    return root ? createPortal(modalContent, root) : modalContent;

};

export default ConfirmDeleteModal;
