const artWorkDetails = [
  {
    "word_jp_1": "日本語0",
    "word_en_1": "summer sky",
  },
  {
    "word_jp_1": "日本語1",
    "word_en_1": "the world",
  },
];


export default defineEventHandler((event) => {
  const workId = Number(getRouterParam(event, 'workId'));
  return {
    "code": "string",
    "message": "success",
    "data": {
      "artwork_id": `artwork_id${workId}`,
      "word_jp_1": `${artWorkDetails[workId % 2].word_jp_1}`,
      "word_en_1": `${artWorkDetails[workId % 2].word_en_1}`,
      "spot_info": {
        "place_id": `撮影場所のid${workId}`,
        "place_name": `撮影場所の名称${workId}`,
        "latitude": 0,
        "longitude": 0,
        "address": "string"
      },
      "take_date": `撮影日${workId}`,
    }
  }
});