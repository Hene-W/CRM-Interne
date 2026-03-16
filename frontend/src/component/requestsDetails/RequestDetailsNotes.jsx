import React from 'react'

const RequestDetailsNotes = ({ request, isLoading }) => {
    return (
        <>
            {!isLoading && request?.noteInterne ? "notes...." : <p className="text-sm text-gray-500">
                Aucune note pour le moment.
            </p>
            }

            {/* plus tard : textarea + bouton */}
        </>
    )
}

export default RequestDetailsNotes