import { FormEvent, useState } from "react";

interface GuestNameInputProps {
  onSubmit: (name: string) => void;
}

export const GuestNameInput = ({ onSubmit }: GuestNameInputProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name.trim() || "Seseorang yang Istimewa");
  };

  return (
    <form className="guest-form" onSubmit={handleSubmit}>
      <label htmlFor="guest-name">Nama Anda</label>
      <input id="guest-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Masukkan nama Anda" autoComplete="name" />
      <button className="primary-button open-button" type="submit">Buka undangan <span>♡</span></button>
    </form>
  );
};
