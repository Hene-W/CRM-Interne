import React, { useState } from 'react'
import CustomSelect from "../CustomSelect"
import DropDownMenu from '../DropDownMenu'
import ConfirmDeleteModal from "../ConfirmDeleteModal"
import { useRequestTypes } from '../../context/RequestTypeContext'
import { IoCaretDownOutline, IoEllipsisHorizontal } from 'react-icons/io5'

const RequestDetailsHeader = ({ request, updateRequest, deleteRequest }) => {
    const { requestTypes } = useRequestTypes()
    const typeOptions = requestTypes.map(rt => ({ value: rt._id, label: rt.name }))

    const [menuTypeOpen, setMenuTypeOpen] = useState(false)
    const [menuStatusOpen, setMenuStatusOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
    const statusOptions = [
        { value: "Nouveau", label: "Nouveau" },
        { value: "En cours", label: "En cours" },
        { value: "Terminé", label: "Terminé" },
        { value: "Refusé", label: "Refusé" },
    ]

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {request.clientName} {request.firstName && request.firstName}
                </h1>
                <div className='relative'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2 text-2xl'><IoEllipsisHorizontal /></button>
                    <DropDownMenu
                        className="absolute"
                        position="bl"
                        open={isMenuOpen}
                        onClose={() => setIsMenuOpen(false)}
                        items={[
                            { label: "Suprimer la demande", onClick: () => { setIsConfirmModalOpen(true) }, danger: true }
                        ]}
                    />
                </div>
            </div>

            <div>
                <ConfirmDeleteModal
                    open={isConfirmModalOpen}
                    title={`Supprimer ${request.clientName + " " + (request.firstName && request.firstName)}`}
                    description={`Êtes-vous sûr de vouloir supprimer ${request.clientName + " " + (request.firstName && request.firstName)} ? Cette action est irréversible.`}
                    onConfirm={() => deleteRequest(request._id)}
                    onCancel={() => setIsConfirmModalOpen(false)}
                />
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setMenuTypeOpen(!menuTypeOpen)}
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm flex items-center gap-2"
                    >
                        Type : <strong>{request.requestType?.name || "Aucun"}</strong>
                        <span><IoCaretDownOutline size={14} /></span>
                    </button>

                    {menuTypeOpen && (
                        <CustomSelect
                            options={typeOptions}
                            value={request.requestType?._id || null}
                            onChange={(val) => updateRequest(request._id, { requestType: val })}
                            open={menuTypeOpen}
                            setOpen={setMenuTypeOpen}
                            allowAdd={true}
                        />
                    )}
                </div>


                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setMenuStatusOpen(!menuStatusOpen)}
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm flex items-center gap-2"
                    >
                        Statut : <strong>{request.status || "Aucun"}</strong>
                        <span><IoCaretDownOutline size={14} /></span>
                    </button>

                    {menuStatusOpen && (
                        <CustomSelect
                            options={statusOptions}
                            value={request.status || null}
                            onChange={(val) => updateRequest(request._id, { status: val })}
                            open={menuStatusOpen}
                            setOpen={setMenuStatusOpen}
                            allowAdd={false}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default RequestDetailsHeader