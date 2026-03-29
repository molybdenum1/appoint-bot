export interface User {
  id: number;
  telegram_id: string;
  name: string | null;
  role: "client" | "master";
  phone?: string | null;
  created_at: string;
}

export interface Service {
  id: number;
  title: string;
  master_id: string;
  price: number;
  duration_minutes: number;
  is_active?: boolean;
}

export interface Booking {
  id: number;
  client_id: number;
  master_id: number;
  service_id: number;
  booking_date: string;
  start_time: string;
  end_time: string;
  status: "pending" | "confirmed" | "canceled";
  comment?: string | null;
}

export interface WorkSchedule {
  id: number;
  master_id: number;
  weekday: number;
  service_id: number;
  start_time: string;
  end_time: string;
}

export interface BlockedSlots {
  id: number;
  master_id: number;
  service_id: number;
  block_date: string;
  start_time: string;
  end_time: string;
  reason?: string | null;
  created_at: string;
}

export interface BotSession {
  id: number;
  telegram_id: number;
  current_step: string;
  session_data: Record<string, any>;
  expires_at: string;
  created_at: string;
}
