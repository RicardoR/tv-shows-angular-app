export interface SearchShowResponse {
  score: number,
  show: Show[]
}

export interface Show {
  id: number,
  name: string,
  image: ShowImage
  rating: ShowRating,
  summary: string,
  genres: string[]
}

export interface ShowImage {
  medium: string,
  original: string,
}

export interface ShowRating {
  average: number
}
