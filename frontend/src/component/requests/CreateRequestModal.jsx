import { useState } from 'react'
import CustomSelect from '../CustomSelect'
import { IoCaretDownOutline } from 'react-icons/io5'
import { useRequests } from '../../context/RequestContext'
import { useRequestTypes } from '../../context/RequestTypeContext'

const CreateRequestModal = ({ isOpen, onClose }) => {
    const [menuTypeOpen, setMenuTypeOpen] = useState(false)
    const [menuStatusOpen, setMenuStatusOpen] = useState(false)
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        type: "",
        statut: 'Nouveau',
        notes: ''
    })

    const { requestTypes } = useRequestTypes()
    const { createRequest } = useRequests()

    const typeOptions = requestTypes.map(rt => ({ value: rt._id, label: rt.name }))
    const statusOptions = [
        { value: "Nouveau", label: "Nouveau" },
        { value: "En cours", label: "En cours" },
        { value: "Terminé", label: "Terminé" },
        { value: "Refusé", label: "Refusé" },
    ]


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.nom) {
            alert('Veuillez remplir les champs obligatoires')
            return
        }

        const requestPayload = {
            clientName: formData.nom,
            firstName: formData.prenom,
            email: formData.email,
            requestType: formData.type,
            status: formData.statut,
            internalNotes: formData.notes
        }

        await createRequest(requestPayload)

        handleCancel()
    }

    const handleCancel = () => {
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            type: "",
            statut: 'Nouveau',
            notes: ''
        })
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
            {/* Overlay sombre */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white w-full h-screen md:h-auto md:max-w-md md:rounded-lg shadow-lg md:max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Créer une demande</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Nom */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nom <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Prénom */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                            <input
                                type="text"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Type
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setMenuTypeOpen(!menuTypeOpen)}
                                    className="flex items-center justify-between gap-2 hover:bg-[#f6f7ed] border border-[#f4f4f4] rounded-lg px-3 md:px-4 py-2 w-full text-left"
                                >
                                    {formData.type
                                        ? (requestTypes.find(t => t._id === formData.type)?.name || formData.type)
                                        : "Sélectionner un type"}
                                    <span><IoCaretDownOutline /></span>
                                </button>

                                {menuTypeOpen && (
                                    <CustomSelect
                                        options={typeOptions}
                                        value={formData.type}
                                        onChange={(val) => setFormData(prev => ({ ...prev, type: val }))}
                                        placeholder="Sélectionner un type"
                                        open={menuTypeOpen}
                                        setOpen={setMenuTypeOpen}
                                        allowAdd={true}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Statut */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setMenuStatusOpen((o) => !o)}
                                    className="flex items-center justify-between gap-2 hover:bg-[#f6f7ed] border border-[#f4f4f4] rounded-lg px-3 md:px-4 py-2 w-full text-left"
                                >
                                    {formData.statut ? formData.statut : "Sélectionner un statut"}
                                    <span><IoCaretDownOutline /></span>
                                </button>

                                {menuStatusOpen && (
                                    <CustomSelect
                                        options={statusOptions}
                                        value={formData.statut}
                                        onChange={(val) => setFormData(prev => ({ ...prev, statut: val }))}
                                        placeholder="Sélectionner un statut"
                                        hideButton={true}
                                        open={menuStatusOpen}
                                        setOpen={setMenuStatusOpen}
                                        allowAdd={false}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Notes */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="flex-1 px-4 py-2 bg-[#1f1f1f] hover:bg-[#333333] text-white rounded-lg font-medium transition"
                            >
                                Créer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRequestModal