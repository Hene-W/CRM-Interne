import React from 'react'
import Header from '../component/Header'

const SettingsPage = () => {
  return (
    <div>
      <Header title="Paramètre" showButton={false} />

      <div className="flex-col md:p-6 md:max-w-3xl md:mx-auto">

        <div className="md:p-6 space-y-8">

          {/* Profil */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Profil</h2>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input type="email" value="user@example.com" disabled className="border p-2 rounded-lg bg-gray-100" />
            </div>
          </section>

          {/* Sécurité */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Sécurité</h2>
            <div className="flex flex-col gap-2">
              <label>Nouveau mot de passe</label>
              <input type="password" className="border p-2 rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Confirmer mot de passe</label>
              <input type="password" className="border p-2 rounded-lg" />
            </div>
            <button className="bg-[#1f1f1f] hover:bg-[#333333] text-white px-4 py-2 rounded-lg">Mettre à jour</button>
          </section>

        </div>
      </div>
    </div>
  )
}

export default SettingsPage