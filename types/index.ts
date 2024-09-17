export type ArticleDetailType = 'modal' | 'page'; // AR画面からモーダルで表示 | 詳細ページで表示

export interface ApiBrowsingArtworkData {
  "artwork_id": string,
  "word_jp_1": string,
  "word_en_1": string,
  "spot_info": {
    "place_id": string,
    "place_name": string,
    "latitude": number,
    "longitude": number,
    "address": string
  },
  "take_date": string
}