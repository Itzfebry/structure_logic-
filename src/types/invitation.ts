export type RSVPStatus = "yes" | "maybe" | "no" | null;

export interface Guest {
  name: string;
}

export interface EventDetails {
  date: string;
  time: string;
  location: string;
  address: string;
}
