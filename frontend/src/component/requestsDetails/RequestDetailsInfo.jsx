import React, { useState } from 'react'
import { IoClose, IoPencil } from 'react-icons/io5'

const RequestDetailsInfo = ({ request, updateRequest }) => {
    const [form, setForm] = useState({
        clientName: request.clientName || "",
        firstName: request.firstName || "",
        email: request.email || "",
    })
    const [isEditing, setIsEditing] = useState(false)
    const [error, setError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (form.clientName.trim() === "") {
            setError("Le nom est obligatoire")
            return
        }

        await updateRequest(request._id, form)
        setIsEditing(false)
    }

    return (
        <div className=" bg-white border rounded-xl p-4 space-y-4">
            <div className='flex justify-between items-center'>
                <h2 className="text-lg font-semibold">Détails client</h2>
                <button onClick={() => setIsEditing(!isEditing)} className='p-2'>{isEditing ? <IoClose size={20} /> : <IoPencil size={15} />}</button>
            </div>

            {!isEditing ? (
                <>
                    <div>
                        <p className="text-sm font-medium text-gray-600">Nom</p>
                        <p className="text-gray-800 truncate max-w-full">
                            {request.clientName} {request.firstName && request.firstName}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-600">Email</p>
                        <p className="text-gray-800 truncate max-w-full">
                            {request.email || "Aucune adresse e-mail"}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="clientName">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="clientName"
                                value={form.clientName}
                                onChange={(e) => setForm({ ...form, clientName: e.target.value })}
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
                            />
                            {error && <p className='text-sm text-red-500 mt-2'>{error}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="firstName">
                                Prénom
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={form.firstName}
                                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
                            />
                        </div>

                        <div className='flex justify-end'>
                            <button className='p-4 py-2 bg-[#1f1f1f] text-white rounded-lg'>
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </>
            )}

            <div>
                <p className="text-sm font-medium text-gray-600">Date de création</p>
                <p className="text-gray-800">
                    {new Date(request.createdAt).toLocaleDateString("fr-FR")}
                </p>
            </div>
        </div>
    )
}

export default RequestDetailsInfo