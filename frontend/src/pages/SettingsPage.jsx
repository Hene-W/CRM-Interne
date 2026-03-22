import React, { useState } from 'react'
import Header from '../component/Header'
import { useAuth } from '../context/AuthContext'


const SettingsPage = () => {
  const { user, updatePassword } = useAuth()
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")


  const handlePassword = async () => {
    setError("")
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Veuillez remplir tous les champs requis.")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    await updatePassword(currentPassword, newPassword)
  }

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
              <input type="email" value={user.email} disabled className="border p-2 rounded-lg bg-gray-100" />
            </div>
          </section>

          {/* Sécurité */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Sécurité</h2>
            <div className="flex flex-col gap-2">
              <label>Mot de passe actuel</label>
              <input
                type="password"
                autoComplete="current-password"
                value={currentPassword}
                onChange={(e) => { setError(""); setCurrentPassword(e.target.value) }}
                className="border p-2 rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Nouveau mot de passe</label>
              <input
                type="password"
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => { setError(""); setNewPassword(e.target.value) }}
                className="border p-2 rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Confirmer mot de passe</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => { setError(""); setConfirmPassword(e.target.value) }}
                className="border p-2 rounded-lg" />
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button onClick={handlePassword} className="bg-[#1f1f1f] hover:bg-[#333333] text-white px-4 py-2 rounded-lg">Mettre à jour</button>
          </section>

        </div>
      </div>
    </div>
  )
}

export default SettingsPage