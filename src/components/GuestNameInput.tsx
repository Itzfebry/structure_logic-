import { FormEvent, useState } from "react";

interface GuestNameInputProps {
  onSubmit: (name: string) => void;
}

export const GuestNameInput = ({ onSubmit }: GuestNameInputProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name.trim() || "Someone Special");
  };

  return (
    <form className="guest-form" onSubmit={handleSubmit}>
      <label htmlFor="guest-name">Your lovely name</label>
      <input id="guest-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" autoComplete="name" />
      <button className="primary-button open-button" type="submit">Open invitation <span>♡</span></button>
    </form>
  );
};
