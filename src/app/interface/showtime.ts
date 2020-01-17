import {ShowtimeDate} from './showtime-date';

export interface Showtime {
  movieId: string;
  showtimes: ShowtimeDate[];
  time: string;
  date: string;
}
