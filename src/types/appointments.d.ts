interface CreateAppointmentsDto {
  athlete_id: string | number;
  scheduled: string;
  description: string;
  duration: number;
  title: string;
}

interface UpdateAppointmentsDto {
  scheduled?: string;
  description?: string;
  duration?: number;
  title?: string;
}

interface UserScoutProfile {
  id: string;
  profile: {
    public_id: string;
  };
}

interface UserAthleteProfile {
  id: string;
  profile: {
    public_id: string;
  };
}

interface UserAppointments {
  id: string;
  scout_id: string;
  athlete_id: string;
  scheduled: string;
  description: string;
  duration: number;
  title: string;
}
