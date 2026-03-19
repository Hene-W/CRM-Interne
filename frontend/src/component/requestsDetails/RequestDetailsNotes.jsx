import React, { useEffect, useMemo, useState } from "react";
import InternalNotesEditor from "./InternalNotesEditor";

const RequestDetailsNotes = ({ request, updateRequest }) => {
    const [internalNotes, setInternalNotes] = useState(request?.internalNotes || "")
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        if (!request) return
        setInternalNotes(request.internalNotes || "");
    }, [request?._id, request?.internalNotes]);


    const handleSaveNotes = async () => {
        if (!request) return

        try {
            setIsSaving(true)
            await updateRequest(request._id, { internalNotes });
        } finally {
            setIsSaving(false)
        }
    };

    return (
        <div className="md:w-2/3 bg-white border rounded-xl p-4 flex flex-col flex-1 h-full overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center py-3 border-b bg-white">
                <h2 className="text-lg font-semibold ">Notes internes</h2>
                <button disabled={isSaving} onClick={handleSaveNotes} className={`flex items-center justify-center gap-2 ${isSaving ? "bg-gray-300 text-black" : "bg-[#1f1f1f] hover:bg-[#333333] text-white"} rounded-lg px-3 py-2 w-auto`}>Sauvegarder</button>
            </div>

            {/* Notes content (scrollable) */}
            <div className="flex-1 py-4 overflow-hidden">

                {!request && <p className="text-sm text-gray-500">Aucune note pour le moment.</p>}

                {request && (
                    <div className="h-full py-4">
                        <InternalNotesEditor
                            value={internalNotes}
                            onChange={setInternalNotes}
                            disabled={!request}
                        />
                    </div>
                )}

            </div>

        </div>
    )
}

export default RequestDetailsNotes